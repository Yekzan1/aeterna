/**
 * @file security.h
 * @brief Security Sandbox using seccomp and process isolation.
 */

#ifndef AETERNA_SECURITY_H
#define AETERNA_SECURITY_H

/**
 * @brief Enables the security sandbox for the current process.
 * Restricts system calls to the bare minimum required for a browser tab.
 */
int aeterna_security_apply_sandbox(void);

/**
 * @brief Drops root privileges if running as sudo.
 */
int aeterna_security_drop_privileges(void);

#endif // AETERNA_SECURITY_H
