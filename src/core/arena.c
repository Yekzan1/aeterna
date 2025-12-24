#include "arena.h"
#include <stdlib.h>
#include <string.h>

aeterna_arena_t* aeterna_arena_init(size_t size) {
    aeterna_arena_t *arena = (aeterna_arena_t*)malloc(sizeof(aeterna_arena_t));
    if (!arena) return NULL;

    arena->buffer = (uint8_t*)malloc(size);
    if (!arena->buffer) {
        free(arena);
        return NULL;
    }

    arena->size = size;
    arena->offset = 0;
    return arena;
}

void* aeterna_arena_alloc(aeterna_arena_t *arena, size_t size) {
    // Align to 8 bytes
    size = (size + 7) & ~7;

    if (arena->offset + size > arena->size) {
        return NULL;
    }

    void *ptr = &arena->buffer[arena->offset];
    arena->offset += size;
    return ptr;
}

void aeterna_arena_reset(aeterna_arena_t *arena) {
    if (arena) {
        arena->offset = 0;
    }
}

void aeterna_arena_destroy(aeterna_arena_t *arena) {
    if (arena) {
        free(arena->buffer);
        free(arena);
    }
}
