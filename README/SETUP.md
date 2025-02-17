## Setup

Follow these steps to run the documentation website locally, displayed in your localhost at http://localhost:3000/.

### Pre-requisites

-   Install a code editor, such as Visual Studio Code (`vscode`). You may also want to install editing extensions such as `prettier`, `eslint`, and others listed in the `.vscode/extensions.json` file.
-   Install [Node.js](https://nodejs.org/en/download/) (version 16.14+).
-   Install `yarn` via `npm` using this command:

    ```
    npm install --global yarn
    ```

### Building the website
The website requires node v21.0 at time of writing. There is a change in the way that Node handles ES Modules in v23.0, which breaks the build. This situation could be remedies by refactoring away from use of ES modules with "require" statements.

To install dependencies and build the website in production mode:
-  yarn install
-  yarn build

This will generate the static website in the ./build directory. To serve this website type `yarn serve`. 

### Running the website locally

1. Create a fork of the documentation repository in GitHub: https://github.com/casper-network/docs-redux/.
2. Clone the fork on your machine.

    ```
    git clone https://github.com/USERNAME/docs
    ```

3. In the forked folder, run this command, which is required to run only once for a folder:

    ```
    yarn install
    ```

4. Start the localhost server:

    ```
    yarn run start
    ```

5. Access http://localhost:3000/ in your browser.


