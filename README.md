# Introduction

The documents for SecOS built by [Docusaurus](https://docusaurus.io/).

# Development

1. Execute `npm install` to install dependencys
2. Execute `npm start` to starts a local development server, then it will opens up a browser window.
3. Execute `npm run build` to generate static content into the `build` directory and can be served using any static contents hosting service.
4. Execute `npm run deploy` to deploy the static content in the `build` directory to github's pages
   - Linux:
     - Using SSH:
         ```
         $ USE_SSH=true npm run deploy
         ```

     - Not using SSH:

         ```
         $ GIT_USER=<Your GitHub username> npm run deploy
         ```
   - Windows PowerShell:
     - Using SSH:

         ```
         $ cmd /C 'set "USE_SSH=true" && npm run deploy'
         ```

     - Not using SSH:

         ```
         $ cmd /C 'set "GIT_USER=<Your GitHub username>" && npm run deploy'
         ```
