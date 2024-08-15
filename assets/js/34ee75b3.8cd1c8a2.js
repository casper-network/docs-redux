"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[1805],{57674:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"welcome-docs-redux","metadata":{"permalink":"/docs-redux/blog/welcome-docs-redux","source":"@site/blog/2024-08-15-hello-blogworld.md","title":"Casper Docs Redux!","description":"The first blog post using the new Docs portal.","date":"2024-08-15T18:00:00.000Z","tags":[{"inline":true,"label":"hello","permalink":"/docs-redux/blog/tags/hello"},{"inline":true,"label":"new docs","permalink":"/docs-redux/blog/tags/new-docs"},{"inline":true,"label":"docs-redux","permalink":"/docs-redux/blog/tags/docs-redux"}],"readingTime":0.595,"hasTruncateMarker":true,"authors":[{"name":"Mel Padden","page":{"permalink":"/docs-redux/blog/authors/melpadden"},"title":"Head of Developer Relations for Casper Association","url":"https://github.com/melpadden","socials":{"x":"https://x.com/mel_casper"},"permalink":"/melpadden","imageURL":"https://github.com/melpadden.png","key":"melpadden"}],"frontMatter":{"title":"Casper Docs Redux!","description":"The first blog post using the new Docs portal.","slug":"welcome-docs-redux","date":"2024-08-15T18:00","authors":["melpadden"],"tags":["hello","new docs","docs-redux"],"hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"Setting Up a Local Casper Condor Network for Development","permalink":"/docs-redux/blog/condor-local-setup"}},"content":"Welcome to the new-look Casper documentation portal. We have put a lot of thought into making the documentation more accessible, easier to move around, and easier on the eye. We have stripped away some visual clutter to allow you to focus on the content, and introduced versioning so that you can compare versions to see what has changed. This is obviously with a mind to the Condor changeover, as we thought it made a lot of sense to allow you to move between versions of the docs as you upgrade your systems and applications for Casper v2.0.\\n\\nPlease enjoy and if you have any comments, suggestions or errata, please email [devrel@casper.network](mailto:devrel@casper.network) with your contribution or query.\\n\\n\x3c!-- truncate --\x3e"},{"id":"condor-local-setup","metadata":{"permalink":"/docs-redux/blog/condor-local-setup","source":"@site/blog/2024-07-16-setting-up-condor-local.md","title":"Setting Up a Local Casper Condor Network for Development","description":"How to set up a local Casper Condor Network for Development using CCTL and the Rust Casper client.","date":"2024-07-16T18:00:00.000Z","tags":[{"inline":false,"label":"Condor","permalink":"/docs-redux/blog/tags/condor","description":"Blog posts related to the Condor upgrade"},{"inline":true,"label":"setup","permalink":"/docs-redux/blog/tags/setup"}],"readingTime":4.08,"hasTruncateMarker":true,"authors":[{"name":"Stanislaw Czembor","page":{"permalink":"/docs-redux/blog/authors/sczembor"},"title":"Developer Advocate for Casper Association","url":"https://github.com/sczembor","permalink":"/sczembor","imageURL":"https://github.com/sczembor.png","key":"sczembor"}],"frontMatter":{"title":"Setting Up a Local Casper Condor Network for Development","description":"How to set up a local Casper Condor Network for Development using CCTL and the Rust Casper client.","slug":"condor-local-setup","date":"2024-07-16T18:00","authors":["sczembor"],"tags":["condor","setup"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Casper Docs Redux!","permalink":"/docs-redux/blog/welcome-docs-redux"}},"content":"Casper Condor is a major upgrade to the Casper Network. This guide walks you through creating a local Condor environment for testing and development using Dockerized NCTL and the Rust Casper Client.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Prerequisites\\n\\n* Docker installed and running on your machine \\n\\n## Part 1: The Dockerized NCTL (Network Control Tool)\\n\\nNCTL is your tool for managing the Casper network. We\'ll use a Dockerized version for easier setup.\\n\\n1. **Clone the Repository:**\\n   ```bash\\n   git clone https://github.com/make-software/casper-nctl-docker.git\\n   cd casper-nctl-docker\\n   ```\\n\\n2. **Switch to the Condor Branch:**\\n   ```bash\\n   git checkout feat-2.0\\n   ```\\n\\n3. **Clone the `casper-node` Repository:**\\n   ```bash\\n   git clone https://github.com/casper-network/casper-node.git\\n   cd casper-node\\n   git checkout release-2.0.0-rc3\\n   ```\\n   Ensure you\'re in the `casper-nctl-docker` directory when running this command\\n\\n4. **Build the Docker Image:**\\n   ```bash\\n   docker build -f casper-nctl-condor.Dockerfile -t casper-nctl:rc3 .\\n   ```\\n   This may take a while\\n\\n5. **Verify the Image:**\\n   ```bash\\n   docker image ls\\n   ```\\n   Look for the `casper-nctl:rc3` image in the output\\n   ```\\n   REPOSITORY                 TAG        IMAGE ID       CREATED        SIZE\\n   casper-nctl                rc3        9fd1e7b25d42   40 hours ago   433MB\\n   ```\\n\\n6. **Start the NCTL Docker Container:**\\n   * **Docker Compose (Recommended):** If you\'re using the `docker-compose.yml` file, make sure that  the `image` under the `mynctl` service points to `casper-nctl:rc3`. Then run `docker-compose up`.\\n   * **Manual Docker Command:** \\n      ```bash\\n      docker run -d --name mynctl -p 11101:11101 casper-nctl:rc3\\n      ```\\n\\n      Once it is up and running you should see that there are 5 nodes and 5 sidecars running and another 5 nodes and 5 sidecars that are inactive:\\n     ```\\n      casper-nctl  | validators-1:casper-net-1-node-1       RUNNING   pid 996, uptime 0:00:03\\n      casper-nctl  | validators-1:casper-net-1-node-2       RUNNING   pid 998, uptime 0:00:03\\n      casper-nctl  | validators-1:casper-net-1-node-3       RUNNING   pid 1002, uptime 0:00:03\\n      casper-nctl  | validators-1:casper-net-1-sidecar-1    RUNNING   pid 997, uptime 0:00:03\\n      casper-nctl  | validators-1:casper-net-1-sidecar-2    RUNNING   pid 1000, uptime 0:00:03\\n      casper-nctl  | validators-1:casper-net-1-sidecar-3    RUNNING   pid 1011, uptime 0:00:03\\n      casper-nctl  | validators-2:casper-net-1-node-4       RUNNING   pid 1082, uptime 0:00:02\\n      casper-nctl  | validators-2:casper-net-1-node-5       RUNNING   pid 1084, uptime 0:00:02\\n      casper-nctl  | validators-2:casper-net-1-sidecar-4    RUNNING   pid 1083, uptime 0:00:02\\n      casper-nctl  | validators-2:casper-net-1-sidecar-5    RUNNING   pid 1085, uptime 0:00:02\\n      casper-nctl  | validators-3:casper-net-1-node-10      STOPPED   Not started\\n      casper-nctl  | validators-3:casper-net-1-node-6       STOPPED   Not started\\n      casper-nctl  | validators-3:casper-net-1-node-7       STOPPED   Not started\\n      casper-nctl  | validators-3:casper-net-1-node-8       STOPPED   Not started\\n      casper-nctl  | validators-3:casper-net-1-node-9       STOPPED   Not started\\n      casper-nctl  | validators-3:casper-net-1-sidecar-10   STOPPED   Not started\\n      casper-nctl  | validators-3:casper-net-1-sidecar-6    STOPPED   Not started\\n      casper-nctl  | validators-3:casper-net-1-sidecar-7    STOPPED   Not started\\n      casper-nctl  | validators-3:casper-net-1-sidecar-8    STOPPED   Not started\\n      casper-nctl  | validators-3:casper-net-1-sidecar-9    STOPPED   Not started\\n     ```\\n\\n\\n## Part 2: Casper Client (Rust)\\n\\nTo interact with your local Condor network, we\'ll use the Casper Client. You have two options for using the Casper Client:\\n\\n**Option 1: Using the Casper Client from the Docker Image**\\n\\n* The `casper-nctl:rc3` Docker image already includes the `casper-client`.\\n* You can skip the next two steps if you want to use the pre-installed client.\\n\\n**Option 2: Using Your Local Casper Client**\\n\\n1. **Clone the Repository (Optional):**\\n   ```bash\\n   git clone https://github.com/casper-ecosystem/casper-client-rs.git\\n   cd casper-client-rs\\n   ```\\n\\n2. **Switch to the Condor-Compatible Branch  (Optional):**\\n   ```bash\\n   git checkout feat-track-node-2.0\\n   ```\\n\\n3. **Activate NCTL scripts:**\\n   ```bash\\n   source nctl-activate.sh casper-nctl\\n   ```\\n\\n4 **Test Your Setup:**\\n   ```bash\\n   nctl-view-node-status\\n   ```\\n   This command should return the status of all the nodes running in your local network, indicating a successful setup. The output should look similar to this:\\n   ```\\n   ------------------------------------------------------------------------------------------------------------------------------------\\n   2024-07-10T15:31:42.181535 [INFO] [2043] NCTL :: node #1 :: status:\\n   {\\n   \\"api_version\\": \\"2.0.0\\",\\n   \\"peers\\": [\\n      {\\n         \\"node_id\\": \\"tls:05b5..7b39\\",\\n         \\"address\\": \\"127.0.0.1:22103\\"\\n      },\\n      {\\n         \\"node_id\\": \\"tls:527e..37d2\\",\\n         \\"address\\": \\"127.0.0.1:22105\\"\\n      },\\n      {\\n         \\"node_id\\": \\"tls:b1d0..870f\\",\\n         \\"address\\": \\"127.0.0.1:22102\\"\\n      },\\n      {\\n         \\"node_id\\": \\"tls:dcdf..e348\\",\\n         \\"address\\": \\"127.0.0.1:22104\\"\\n      }\\n   ],\\n   \\"build_version\\": \\"2.0.0-d5c0d238f\\",\\n   \\"chainspec_name\\": \\"casper-net-1\\",\\n   \\"starting_state_root_hash\\": \\"2d92cf9f3ff3eb70f40be598b61cbf747c1b5ea67df9596d84a88c5458028a80\\",\\n   \\"last_added_block_info\\": {\\n      \\"hash\\": \\"c1056e0e5978e725777f48e4488462d7794e6547f25b1fbcc4ba261ca2864395\\",\\n      \\"timestamp\\": \\"2024-07-10T15:31:38.601Z\\",\\n      \\"era_id\\": 19,\\n      \\"height\\": 205,\\n      \\"state_root_hash\\": \\"6c5502c3443f526e943fa5a5421349e938464c063c8dd0ada616c997e3805612\\",\\n      \\"creator\\": \\"0190664e16a17594ed2d0e3c279c4cf5894e8db0da15e3b91c938562a1caae32ab\\"\\n   },\\n   \\"our_public_signing_key\\": \\"01fed662dc7f1f7af43ad785ba07a8cc05b7a96f9ee69613cfde43bc56bec1140b\\",\\n   \\"round_length\\": \\"4s 96ms\\",\\n   \\"next_upgrade\\": null,\\n   \\"uptime\\": \\"13m 15s\\",\\n   \\"reactor_state\\": \\"Validate\\",\\n   \\"last_progress\\": \\"2024-07-10T15:18:26.354Z\\",\\n   \\"available_block_range\\": {\\n      \\"low\\": 0,\\n      \\"high\\": 205\\n   },\\n   \\"block_sync\\": {\\n      \\"historical\\": null,\\n      \\"forward\\": null\\n   },\\n   \\"latest_switch_block_hash\\": \\"5192198c783ed8b66e206c37b34c5e268c84be2f4b78dd9899eecf5f37fb9f68\\"\\n   }\\n   .\\n   .\\n   .\\n   ```\\n\\n## Troubleshooting\\n\\n**If sidecars or nodes are not running:** If you see `null` values under each node in the output of `nctl-view-node-status`, it means the version of `casper-sidecar` is not compatible with the `casper-node`.\\n\\n**Solution:**\\n1. Go to the `casper-node/ci/ci.json` file.\\n2. Change the `casper-sidecar` branch under `external_deps` from:\\n   ```json\\n   \\"branch\\": \\"feat-2.0\\"\\n   ``` \\n   to:\\n   ```json\\n   \\"branch\\": \\"release-1.0.0rc2_node-2.0.0rc3\\" \\n   ```\\n\\n   This is because the `casper-node` we are using is `release-2.0.0-rc3`. The required combination of versions of `casper-sidecar` and `casper-node` may change in the future (rc4 etc.).\\n\\n3. Rebuild the NCTL image: `docker build -f casper-nctl-condor.Dockerfile -t casper-nctl:rc3 .`\\n\\n## Using the Casper Client\\n\\n* **Command Format(Using local casper-client):** `cargo run --release [command] --node-address http://127.0.0.1:11101`\\n* **Command Format(Using casper-client from the docker image):** `casper-client [command] --node-address http://127.0.0.1:11101`\\n\\n## Accessing the NCTL Block Web Explorer\\n\\nThe NCTL Docker setup includes a web-based block explorer.  You can access it in your browser at:\\n\\n```\\nhttp://127.0.0.1:8080\\n```\\n\\nThis allows you to visually explore blocks, transactions, and other details of your local network.\\n\\n## Important Notes\\n\\n* **Work in Progress:** Condor compatibility is still evolving. Some features may be unstable or incomplete.\\n\\n## Additional Tips\\n\\n* **Community Resources:** Join the [Casper Telegram](https://t.me/CSPRCondor) for help and discussion."}]}}')}}]);