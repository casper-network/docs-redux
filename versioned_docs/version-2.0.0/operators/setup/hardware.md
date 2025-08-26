---
title: Hardware
---

# Recommended Hardware Specifications

## System Requirements {#system-requirements}

The following hardware specifications are recommended for the Casper [Mainnet](https://cspr.live/) and [Testnet](https://testnet.cspr.live/):

-   4 Cores
-   32 GB Ram
-   Storage (SSD)  
  - 2 TB (Archival Nodes)
  - 500 GB (TTL Nodes)
-   Linux machine running Ubuntu 22.04, 24.04 or Debian 13
  - Binaries are build on 22.04 and will run on Linux having same or higher Clib version.


:::note Notes

- SSD is required because HDD cannot perform random writes at the performance needed to keep in sync with the full speed of the network.

- For non-archival nodes, current disc usage is significantly lower (e.g., ~500 GB is sufficient for at least 1 year). It is safe to start with lower capacity and scale up as needed.

- LMDB is a memory backed database. More RAM than recommended will help read performance after data is cached.
:::

### CPU Requirements {#cpu-requirements}

Attempting to run a Casper node on older hardware can result in unexpected crashes. This is due to the CPU not supporting instructions used by our official binaries, including AVX2 and Intel SHA extensions. 

These are the list of CPU flags on x86_64 architecture, for reference;

- AVX2
- AVX
- BMI
- CMOV
- MODE64
- NOVLX
- SHA
- SSE1
- SSE2
- SSE3
- SSE41
- SSSE3

To avoid these issues, we recommend a CPU running AMD Zen, Intel Ice Lake or newer architecture.

:::note

This only applies to official binaries released by Casper. If you are compiling your node from scratch, you may choose to disable the extensions in question.

If you are using a non standard OS, you should compile from source instead of using released binaries.

:::
