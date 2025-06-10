# Casper Network Documentation

## Overview

This is the documentation repository for the [Casper Network](https://casper.network/). 

The documentation site itself may be viewed at this address: https://docs.casper.network/.

For instructions on how to build, run, edit and contribute to this documentation, please refer to the [developer documentation](./README/INDEX.md).

**Important Note: A complete rework of the documentation is currently underway. While fixes and improvements to this legacy version are welcome, please avoid making major or structural changes.**

## Quick Local Run Instructions

To run the documentation site locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/casper-network/docs-redux.git
    cd docs-redux
    ```

2.  **Create a `.env` file:**

    Create a file named `.env` in the root of the `docs-redux` directory with the following content:

    ```
    URL=http://localhost:3000
    BASE_URL=/
    ALGOLIA_APP_ID=your_algolia_app_id
    ALGOLIA_INDEX_NAME=your_algolia_index_name
    ALGOLIA_API_KEY=your_algolia_api_key
    ```

    *(Note: Replace `your_algolia_app_id`, `your_algolia_index_name`, and `your_algolia_api_key` with actual values if you intend to use Algolia search; otherwise, placeholders are sufficient for local development.)*

3.  **Install dependencies, build, and serve:**

    ```bash
    npm install
    npm run build
    npm run serve
    ```

    This will install the necessary packages, build the static site, and start a local server. You can then access the documentation in your browser at `http://localhost:3000/`.
