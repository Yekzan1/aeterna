/**
 * @file web3.h
 * @brief Web 3.0 Layer: IPFS Resolution and Crypto Wallet logic.
 */

#ifndef AETERNA_WEB3_H
#define AETERNA_WEB3_H

#include <stddef.h>

/**
 * @brief Resolves an IPFS CID to a local or gateway URL.
 */
char* aeterna_web3_ipfs_resolve(const char *cid);

/**
 * @brief Structure representing a basic ECDSA Wallet.
 */
typedef struct {
    unsigned char public_key[64];
    unsigned char private_key[32];
    char address[42];
} aeterna_wallet_t;

/**
 * @brief Generates a new ECDSA wallet.
 */
int aeterna_web3_wallet_generate(aeterna_wallet_t *wallet);

/**
 * @brief Signs a message using the wallet's private key.
 */
int aeterna_web3_sign_message(aeterna_wallet_t *wallet, const char *msg, unsigned char *sig);

#endif // AETERNA_WEB3_H
