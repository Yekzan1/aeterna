/**
 * @file arena.h
 * @brief Custom Arena Allocator for AETERNA Kernel.
 * @author AETERNA Core Team
 */

#ifndef AETERNA_ARENA_H
#define AETERNA_ARENA_H

#include <stddef.h>
#include <stdint.h>

/**
 * @brief Arena structure for memory management.
 */
typedef struct {
    size_t size;
    size_t offset;
    uint8_t *buffer;
} aeterna_arena_t;

/**
 * @brief Initializes a new arena.
 * @param size The total size of the arena in bytes.
 * @return Pointer to the initialized arena, or NULL on failure.
 */
aeterna_arena_t* aeterna_arena_init(size_t size);

/**
 * @brief Allocates memory from the arena.
 * @param arena Pointer to the arena.
 * @param size Size of the allocation.
 * @return Pointer to the allocated memory, or NULL if out of space.
 */
void* aeterna_arena_alloc(aeterna_arena_t *arena, size_t size);

/**
 * @brief Resets the arena offset to zero (effectively freeing all memory).
 * @param arena Pointer to the arena.
 */
void aeterna_arena_reset(aeterna_arena_t *arena);

/**
 * @brief Destroys the arena and frees the underlying buffer.
 * @param arena Pointer to the arena.
 */
void aeterna_arena_destroy(aeterna_arena_t *arena);

#endif // AETERNA_ARENA_H
