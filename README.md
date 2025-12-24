# AETERNA: The C-Kernel Decentralized Browser

**AETERNA** is the world's first web browser with its core kernel written in pure C (C11) for **brute performance**, designed from the ground up to fuse **Generative AI** capabilities with the **Decentralized Web (Web 3.0)**.

This project is structured to be **Production-Ready**, adhering to strict security standards and minimal external dependencies.

## 🚀 Key Features

| Module | Description | Core Technologies |
| :--- | :--- | :--- |
| **Core Engine** | Custom memory management and asynchronous event loop for maximum speed and stability. Each tab runs in its own thread. | C11, Arena Allocator, pthreads |
| **Web 3.0 Layer** | Native support for decentralized protocols and cryptographic operations. | libcurl (for HTTP/3), IPFS Resolution, ECDSA Wallet |
| **AI Native Bridge** | Interface for local or remote LLM inference to automate navigation and data analysis. | C Interface, LLM API/llama.cpp |
| **Security Sandbox** | Process isolation mechanisms to contain potential threats from web content. | seccomp (Linux), Privilege Dropping |

## 🏗️ Project Structure

The project follows a standard, clean C structure:

```
aeterna/
├── include/              # Public header files (.h)
│   ├── ai_bridge.h       # AI Native Bridge definitions
│   ├── arena.h           # Custom Arena Allocator
│   ├── kernel.h          # Core Engine (Event Loop, Threading)
│   ├── security.h        # Security Sandbox definitions
│   └── web3.h            # Web 3.0 Layer definitions
├── src/                  # Source code files (.c)
│   ├── ai/               # AI Native Bridge implementation
│   ├── core/             # Core Engine implementation
│   ├── security/         # Security Sandbox implementation
│   ├── web3/             # Web 3.0 Layer implementation
│   └── main.c            # Main entry point
├── lib/                  # External libraries (if any)
├── tests/                # Unit and integration tests
├── docs/                 # Doxygen documentation output
├── Makefile              # Robust build system
└── .gitignore            # Standard Git ignore file
```

## 🛠️ Building the Project

A robust `Makefile` is provided to handle compilation.

### Prerequisites

You will need a C11 compatible compiler (like GCC or Clang) and the following libraries:

*   `libpthread` (for multi-threading)
*   `libcurl` (for HTTP/3 and network operations)
*   `libseccomp` (for the security sandbox on Linux)

### Compilation

1.  Clone the repository:
    ```bash
    git clone [YOUR_REPO_URL]
    cd aeterna
    ```
2.  Build the executable:
    ```bash
    make
    ```
    This will create the `aeterna` executable in the root directory.

### Running

```bash
./aeterna
```

## 🔒 Security and Standards

All code is written to be **security-compliant**, strictly avoiding unsafe C functions like `scanf`, `strcpy`, `gets`, etc., in favor of safer alternatives (`snprintf`, `strncpy`, etc.).

### Documentation

All functions, structures, and files are commented using the **Doxygen** format, allowing for easy generation of comprehensive API documentation.

## 📝 Contribution

We welcome contributions! Please refer to the `CONTRIBUTING.md` (to be created) for guidelines.
