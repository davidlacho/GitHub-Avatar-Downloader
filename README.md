# Github-Avatar

## Goals
This project is a command-line HTTP client that will request the avatars for all contributors to a given project on GitHub, and download them to disk.

## Installation
Clone this repository to your local disk:
```
git clone https://github.com/fiveache/GitHub-Avatar-Downloader.git
```
Install dependencies
```
npm install
```
Generate your [GitHub Personal Access Token](https://github.com/settings/tokens). In the root directory of project, create a new directory called `secret`:
```
mkdir secret && cd secret
```
Create a new file called `token.js`:
```
touch token.js
```
In `token.js`, paste the following code, replacing `<GitHub Access Token>` with your [GitHub Personal Access Token](https://github.com/settings/tokens).:
```
const gitHubKey = '<GitHub Access Token>';

module.exports.gitHubKey = gitHubKey;
```

More coming soon...

## Usage
Comming soon...

## Outcomes of Project
  * Break down larger problems into smaller steps
  * work incrementally towards your solution.
  * HTTP
  * APIs
  * JSON
  * File System
  * JavaScript and Node
  * ES6 Syntax
  * JSDoc
