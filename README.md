<p align="center">
    <img src="static/img/logo.svg" alt="secos-logo" width="64"><br>
    A security operating system focused on the AIoT (Artificial Intelligence of Things) field.<br/>
    <br/>
</p>

English | [中文版](README_CN.md)

# Introduction

This repository is the source repository for the SecOS documentation built using [Docusaurus](https://docusaurus.io/). Docusaurus is an open-source website generator tool developed by Meta, based on React, for creating, maintaining, and deploying static websites.

## Development

Docusaurus is actually a set of Node.js packages, so this documentation is essentially a Node.js application. Therefore, the first step is to ensure that the Node.js environment is correctly installed.

1. Yarn is used as the package manager. By default, yarn is not installed in Node.js, so first, use the command `npm install -g yarn` to install it globally.
2. To start development for the first time, you need to run the command `yarn install` to install the required dependencies.
3. Use any editor (VS Code is recommended) to modify the source code and edit new documents (all in Markdown format)
4. Running the command `yarn start` will start a local development server and automatically open a browser window to preview the entire website.

## Deploy

Currently, the SecOS documentation website is hosted on GitHub Pages. The repository is configured by default to deploy via GitHub Actions. When the source code is committed to the repository, it will automatically trigger GitHub Actions to deploy the website.

> It also supports yarn deploy for deploying to a separate branch (after modifying the repository configuration).
>  - Linux:
>    - Use SSH:
>        ```
>        $ USE_SSH=true yarn deploy
>        ```
> 
>    - Not use SSH:
> 
>        ```
>        $ GIT_USER=<Your GitHub username> yarn deploy
>        ```
>  - Windows PowerShell:
>    - Use SSH:
> 
>        ```
>        $ cmd /C 'set "USE_SSH=true" && yarn deploy'
>        ```
> 
>    - Not use SSH:
> 
>        ```
>        $ cmd /C 'set "GIT_USER=<Your GitHub username>" && yarn deploy'
>        ```
