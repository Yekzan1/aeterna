# AETERNA Browser Makefile
# Core: C11, Web 3.0, AI Native, Security Sandbox

CC = gcc
CFLAGS = -Wall -Wextra -Wpedantic -std=c11 -g -Iinclude -D_POSIX_C_SOURCE=200809L
LDFLAGS = -lpthread -lcurl -lseccomp # Placeholder for libcurl and libseccomp

SRC_CORE = src/core/arena.c src/core/kernel.c
SRC_WEB3 = src/web3/web3.c
SRC_AI = src/ai/ai_bridge.c
SRC_SECURITY = src/security/security.c
SRC_MAIN = src/main.c

SRCS = $(SRC_CORE) $(SRC_WEB3) $(SRC_AI) $(SRC_SECURITY) $(SRC_MAIN)
OBJS = $(SRCS:.c=.o)
TARGET = aeterna

.PHONY: all clean test

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) $(OBJS) -o $@ $(LDFLAGS)

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) $(TARGET)

test: $(TARGET)
	@echo "Running tests..."
	# Placeholder for test execution
	./$(TARGET)
