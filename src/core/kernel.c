#include "kernel.h"
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

static void* tab_thread_routine(void *arg) {
    aeterna_tab_t *tab = (aeterna_tab_t*)arg;
    printf("[Kernel] Tab %d started on thread %lu\n", tab->tab_id, (unsigned long)tab->thread);
    
    // Simulate tab work
    while (tab->is_active) {
        // Tab specific logic here
        usleep(100000); // 100ms
    }
    
    return NULL;
}

aeterna_kernel_t* aeterna_kernel_init(int max_tabs) {
    aeterna_kernel_t *kernel = (aeterna_kernel_t*)malloc(sizeof(aeterna_kernel_t));
    if (!kernel) return NULL;

    kernel->tabs = (aeterna_tab_t*)calloc(max_tabs, sizeof(aeterna_tab_t));
    kernel->max_tabs = max_tabs;
    kernel->active_tabs = 0;
    pthread_mutex_init(&kernel->kernel_mutex, NULL);

    return kernel;
}

int aeterna_kernel_spawn_tab(aeterna_kernel_t *kernel, void (*task)(void*)) {
    pthread_mutex_lock(&kernel->kernel_mutex);
    
    if (kernel->active_tabs >= kernel->max_tabs) {
        pthread_mutex_unlock(&kernel->kernel_mutex);
        return -1;
    }

    int id = kernel->active_tabs++;
    aeterna_tab_t *tab = &kernel->tabs[id];
    tab->tab_id = id;
    tab->is_active = true;
    tab->tab_arena = aeterna_arena_init(1024 * 1024); // 1MB per tab
    
    if (pthread_create(&tab->thread, NULL, tab_thread_routine, tab) != 0) {
        pthread_mutex_unlock(&kernel->kernel_mutex);
        return -1;
    }

    pthread_mutex_unlock(&kernel->kernel_mutex);
    return id;
}

void aeterna_kernel_run(aeterna_kernel_t *kernel) {
    printf("[Kernel] AETERNA Core Engine Running...\n");
    // Main loop would handle IPC, global events, etc.
    while (true) {
        // Placeholder for global event processing
        sleep(1);
        // Break condition for demo purposes could be added
    }
}

void aeterna_kernel_shutdown(aeterna_kernel_t *kernel) {
    if (!kernel) return;

    for (int i = 0; i < kernel->active_tabs; i++) {
        kernel->tabs[i].is_active = false;
        pthread_join(kernel->tabs[i].thread, NULL);
        aeterna_arena_destroy(kernel->tabs[i].tab_arena);
    }

    free(kernel->tabs);
    pthread_mutex_destroy(&kernel->kernel_mutex);
    free(kernel);
    printf("[Kernel] AETERNA Core Engine Shutdown.\n");
}
