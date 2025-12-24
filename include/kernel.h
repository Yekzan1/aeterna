/**
 * @file kernel.h
 * @brief AETERNA Kernel Core: Event Loop and Multi-threading.
 */

#ifndef AETERNA_KERNEL_H
#define AETERNA_KERNEL_H

#include <pthread.h>
#include <stdbool.h>
#include "arena.h"

typedef struct {
    int tab_id;
    pthread_t thread;
    bool is_active;
    aeterna_arena_t *tab_arena;
    void (*on_event)(void* data);
} aeterna_tab_t;

typedef struct {
    aeterna_tab_t *tabs;
    int max_tabs;
    int active_tabs;
    pthread_mutex_t kernel_mutex;
} aeterna_kernel_t;

/**
 * @brief Initializes the AETERNA Kernel.
 */
aeterna_kernel_t* aeterna_kernel_init(int max_tabs);

/**
 * @brief Spawns a new tab in a separate thread.
 */
int aeterna_kernel_spawn_tab(aeterna_kernel_t *kernel, void (*task)(void*));

/**
 * @brief Main event loop of the kernel.
 */
void aeterna_kernel_run(aeterna_kernel_t *kernel);

/**
 * @brief Shuts down the kernel and cleans up resources.
 */
void aeterna_kernel_shutdown(aeterna_kernel_t *kernel);

#endif // AETERNA_KERNEL_H
