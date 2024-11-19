# Introduction

The documents for SecOS built with [Docusaurus](https://docusaurus.io/).

# Development
By default, the `yarn` is not installed, so use `npm install -g yarn` to install it firstly.

1. `yarn install` to install dependencys
2. `yarn start` to starts a local development server, then it will opens up a browser window.
3. `yarn build` to generate static content into the `build` directory and can be served using any static contents hosting service.
4. `yarn deploy` to deploy the static content in the `build` directory to github pages
   - Linux:
     - Using SSH:
         ```
         $ USE_SSH=true yarn deploy
         ```

     - Not using SSH:

         ```
         $ GIT_USER=<Your GitHub username> yarn deploy
         ```
   - Windows PowerShell:
     - Using SSH:

         ```
         $ cmd /C 'set "USE_SSH=true" && yarn deploy'
         ```

     - Not using SSH:

         ```
         $ cmd /C 'set "GIT_USER=<Your GitHub username>" && yarn deploy'
         ```
