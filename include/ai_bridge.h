/**
 * @file ai_bridge.h
 * @brief Native AI Bridge for LLM integration.
 */

#ifndef AETERNA_AI_BRIDGE_H
#define AETERNA_AI_BRIDGE_H

typedef enum {
    AI_MODEL_LOCAL,
    AI_MODEL_REMOTE
} aeterna_ai_type_t;

typedef struct {
    aeterna_ai_type_t type;
    char *endpoint;
    char *api_key;
} aeterna_ai_config_t;

/**
 * @brief Initializes the AI bridge.
 */
int aeterna_ai_init(aeterna_ai_config_t *config);

/**
 * @brief Sends a prompt to the AI and gets a response.
 * @param prompt The user or system prompt.
 * @return The AI generated response (must be freed by caller).
 */
char* aeterna_ai_query(const char *prompt);

/**
 * @brief Analyzes page content using the native AI.
 */
char* aeterna_ai_analyze_page(const char *html_content);

#endif // AETERNA_AI_BRIDGE_H
