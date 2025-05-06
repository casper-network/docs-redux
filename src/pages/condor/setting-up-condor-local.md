---
title: Setting Up a Local Casper v2.0 Network for Development
description: How to set up a local Casper v2.0 Network for Development using NCTL and the Rust Casper client.
slug: local-setup
date: 2024-07-16T18:00
authors: [ sczembor,jiu-hong ]
tags: [v2, setup]
hide_table_of_contents: false
---

# Setting Up a Local Casper 2.0 Network for Development

Casper 2.0 is a major upgrade to the Casper Network. This guide walks you through creating a local environment for testing and development using Dockerized NCTL and the Rust Casper Client.

<!-- truncate -->

## Prerequisites

* Docker installed and running on your machine 

## Part 1: The Dockerized NCTL (Network Control Tool)

NCTL is your tool for managing the Casper network. We'll use a Dockerized version for easier setup.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/make-software/casper-nctl-docker.git
   cd casper-nctl-docker
   ```

2. **Switch to the 2.0 Branch:**
   ```bash
   git checkout feat-2.0
   ```
   
   Modify the casper-node's branch to 2.0.0 inside casper-nctl-condor.Dockerfile

   ```
   ...
   RUN git clone -b v2.0.0 https://github.com/casper-network/casper-node.git ~/casper-node
   ...
   ```


3. **Clone the `casper-node` Repository:**
   ```bash
   git clone https://github.com/casper-network/casper-node.git
   cd casper-node
   git checkout v2.0.0
   ```
   Ensure you're in the `casper-nctl-docker` directory when running this command

4. **Build the Docker Image:**
   ```bash
   docker build -f casper-nctl-condor.Dockerfile -t casper-nctl:v2.0.0 .
   ```
   Ensure you're in the `casper-nctl-docker` directory when running this command

   This may take a while.

5. **Verify the Image:**
   ```bash
   docker image ls
   ```
   Look for the `casper-nctl:v2.0.0` image in the output
   ```
   REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
   casper-nctl   v2.0.0    decdc9495181   3 minutes ago   442MB
   ```

6. **Start the NCTL Docker Container:**

   There are two ways to start the NCTL Docker containers.
   Docker Compose brings up an additional NCTL Explorer container, while the manual command does not.
   * **Docker Compose (Recommended):** 
   
      If you're using the `docker-compose.yml` file, make sure that the `image` under the `casper-nctl` service points to the image you just built (`casper-nctl:v2.0.0`) from the previous step, like this:  

      docker-compose.yml

      ```yaml
      ...
      services:
      casper-nctl:
         image: casper-nctl:v2.0.0
         container_name: casper-nctl
      ...
      ```
   
      Start the containers. This will start an NCTL container and an NCTL Explorer container.

      ```bash
      docker-compose up
      ```
      "Ensure you're in the `casper-nctl-docker` directory when running this command.


   * **Manual Docker Command:** 

      Below is the command to start an NCTL container named `mynctl`.

      ```bash
      docker run -d --name mynctl -p 11101:11101 casper-nctl:v2.0.0
      ```


7. **Activate nctl-\* commands:**

   In a Linux or macOS terminal, run:
   ```bash
   source nctl-activate.sh <container_name>
   ```
   In a Powershell terminal, run:
   ```
   . .\nctl-activate.ps1 <container_name>
   ```
   Ensure you're in the `casper-nctl-docker` directory when running this command.



7. **Confirm the nctl status**

   ```bash
   nctl-status
   ```

   Once it is up and running issue the command `nctl-status` then you should see that there are 5 nodes and 5 sidecars running and another 5 nodes and 5 sidecars that are inactive:

   <details>
   <summary>Click me</summary>
   
   ```json
      casper-nctl  | validators-1:casper-net-1-node-1       RUNNING   pid 996, uptime 0:00:03
      casper-nctl  | validators-1:casper-net-1-node-2       RUNNING   pid 998, uptime 0:00:03
      casper-nctl  | validators-1:casper-net-1-node-3       RUNNING   pid 1002, uptime 0:00:03
      casper-nctl  | validators-1:casper-net-1-sidecar-1    RUNNING   pid 997, uptime 0:00:03
      casper-nctl  | validators-1:casper-net-1-sidecar-2    RUNNING   pid 1000, uptime 0:00:03
      casper-nctl  | validators-1:casper-net-1-sidecar-3    RUNNING   pid 1011, uptime 0:00:03
      casper-nctl  | validators-2:casper-net-1-node-4       RUNNING   pid 1082, uptime 0:00:02
      casper-nctl  | validators-2:casper-net-1-node-5       RUNNING   pid 1084, uptime 0:00:02
      casper-nctl  | validators-2:casper-net-1-sidecar-4    RUNNING   pid 1083, uptime 0:00:02
      casper-nctl  | validators-2:casper-net-1-sidecar-5    RUNNING   pid 1085, uptime 0:00:02
      casper-nctl  | validators-3:casper-net-1-node-10      STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-node-6       STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-node-7       STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-node-8       STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-node-9       STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-sidecar-10   STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-sidecar-6    STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-sidecar-7    STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-sidecar-8    STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-sidecar-9    STOPPED   Not started
   ```

   </details>

## Part 2: Casper Client (Rust)

To interact with your local Casper 2.0 network, we'll use the Casper Client. You have two options for using the Casper Client:

**Option 1: Using the Casper Client from the Docker Image**

* The `casper-nctl:v2.0.0` Docker image already includes the `casper-client`.
* You can skip the next two steps if you want to use the pre-installed client.

**Option 2: Using Your Local Casper Client**

1. **Clone the Repository (Optional):**
   ```bash
   git clone https://github.com/casper-ecosystem/casper-client-rs.git
   cd casper-client-rs
   ```

2. **Switch to the Casper 2.0-Compatible Branch  (Optional):**
   ```bash
   git checkout v3.0.1
   ```

3. **Build casper-client:**

   Prerequisite: Install rustup

   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

   Build the Casper Client:

   ```bash
   cargo build --release
   ```

4. **Test Your Setup:**
   ```bash
   casper-client get-block -n http://localhost:11101
   ```

   This command should return the status of all the nodes running in your local network, indicating a successful setup. The output should look similar to this:

   <details>
   <summary>Click me</summary>
   

   ```json
   {
      "jsonrpc": "2.0",
      "id": -2049464589362040719,
      "result": {
         "api_version": "2.0.0",
         "block_with_signatures": {
               "block": {
                  "Version2": {
                     "hash": "9e7c32760b6fefcd4e1a579a9dce0835e1d564e5a5aedaf06911d76f64af9e0c",
                     "header": {
                           "parent_hash": "ecd94fd34417032d4e7b77b0dce3c48164398d1946d95a57b50c73eaee59cf90",
                           "state_root_hash": "ad53786aed35ef7e5a608552329ff0ab33055c4e4bf6764124a3603fce49990a",
                           "body_hash": "18937e8cf4338b5f5fdc2581f8d7d6a47de736d2799e3f3bc9b0ff9f1e7cf106",
                           "random_bit": false,
                           "accumulated_seed": "1ce9cae18eccdea58c1a6b22474c6f98e4a4bf17d53a306390f528a18d264f59",
                           "era_end": null,
                           "timestamp": "2025-04-23T03:41:03.130Z",
                           "era_id": 94,
                           "height": 1028,
                           "protocol_version": "2.0.0",
                           "proposer": "0190664e16a17594ed2d0e3c279c4cf5894e8db0da15e3b91c938562a1caae32ab",
                           "current_gas_price": 1,
                           "last_switch_block_hash": "db222beace01c5c624cbd84a62c92feb0a23f3e0c3372dd5cba9e7ce51db63cf"
                     },
                     "body": {
                           "transactions": {},
                           "rewarded_signatures": [
                              [
                                 248
                              ],
                              [
                                 0
                              ],
                              [
                                 0
                              ]
                           ]
                     }
                  }
               },
               "proofs": [
                  {
                     "public_key": "01509254f22690fbe7fb6134be574c4fbdb060dfa699964653b99753485e518ea6",
                     "signature": "01fbe5ca7584cd517b51cc2ee1c79c055eaccb523470b5f460f23c365d476dabf40d62d753b0f1c1003568dd555b64848cda2029d3f31bf9ee548ea6aefca72506"
                  },
                  {
                     "public_key": "0190664e16a17594ed2d0e3c279c4cf5894e8db0da15e3b91c938562a1caae32ab",
                     "signature": "014ebd115e50169c79dd469f6118df18869232839bc07c3cff079837657ba9d31d913d367da886442f1532fbef66e86985d693346037b4863ef0ec90c1476e3403"
                  },
                  {
                     "public_key": "01c867ff3cf1d4e4e68fc00922fdcb740304def196e223091dee62012f444b9eba",
                     "signature": "01d183f46c1a0af713c2f0629ea0436cb37c04ef300f8c25f84384607a91817e869956ccf47a4902f9d51c173cb8c3f6949391c792e343bc93968274b4c692e50c"
                  },
                  {
                     "public_key": "01f58b94526d280881f79744effebc555426190950d5dfdd2f8aaf10ceaec010c6",
                     "signature": "01308ad12b69bc92497ad3b9d169d685a436ee4194a0e291a14e022bc0e70e5ee881a2f0be5301752ad9888a790bd9c4a7cbff1481df472166f3dce29df9ec9d00"
                  },
                  {
                     "public_key": "01fed662dc7f1f7af43ad785ba07a8cc05b7a96f9ee69613cfde43bc56bec1140b",
                     "signature": "01bac3f6529816492daaa019a4ecf5bd3ef68757a266e4b4a0382a56268fdbc86a65ec037feb87cda554e244f25c3c9e525961a1a660b39ebd6f1aee2e64ce0006"
                  }
               ]
         }
      }
   }
   ```
   </details>

## Troubleshooting

**If sidecars or nodes are not running:** If you see `null` values under each node in the output of `nctl-view-node-status`, it means the version of `casper-sidecar` is not compatible with the `casper-node`.

**Solution:**
1. Go to the `casper-node/ci/ci.json` file.
2. Change the `casper-sidecar` branch under `external_deps` to the casper-node's compatible branch:
   ```json
   "branch": "xxx"
   ``` 
   to:
   ```json
   "branch": "v1.0.4" 
   ```

   Make sure that `casper-node` and `casper-sidecar` are compatible.

3. Rebuild the NCTL image: `docker build -f casper-nctl-condor.Dockerfile -t casper-nctl:v2.0.0 .`

## Using the Casper Client

* **Command Format(Using local casper-client):** `cargo run --release [command] --node-address http://127.0.0.1:11101`
* **Command Format(Using casper-client from the docker image):** `casper-client [command] --node-address http://127.0.0.1:11101`

## Accessing the NCTL Block Web Explorer

This is only available if you started the container using `docker compose up`.

The NCTL Docker setup using docker compose includes a web-based block explorer.  You can access it in your browser at:

```
http://127.0.0.1:8080
```

This allows you to visually explore blocks, transactions, and other details of your local network.

## Important Notes

* **Work in Progress:** Casper 2.0 compatibility is still evolving. Some features may be unstable or incomplete.

## Additional Tips

* **Community Resources:** Join the [Casper Telegram](https://t.me/CSPRCondor) or [Casper Discord](https://discord.gg/caspernetwork) for help and discussion.