# Typescript Master

## Prerequest

### Start from command:

```
node --version // if you use VS Code app Terminal and NVM - versions of Node is different from your and VS Code terminals!
nvm install --lts // for last version
```

### or:

Visual Studio Code to use node version specified by NVM
The solution is to set alias default.
In the OS terminal run -

```
nvm alias default 7.8.0

```

Open vscode, now running

```
node -v // returns 7.8.0

```

It seems VS Code takes up this (alias default) value and not the node version that is set by nvm use X.X.X
Restart VS code for it to pick up the changes.

### Install Code to Path:

<kbd>Ctrl</kbd> + <kbd>Cmnd</kbd> + <kbd>P</kbd>

```
>install path
```

### Add Extensions:

<ul>
<li>Bracket Pair Colorizer</li>
<li>ES7 React/Redux/GraphQL/React-Native snippets</li>
<li>Night Owl</li>
<li>Prettier - Code formatter</li>
</ul>

## Collection of Typescript Tutorials

### Useful:

[Fake JSON API](http://jsonplaceholder.typicode.com)

### Variables

<b>Folder name type01</b>

#### Precreated:

```
npm install -g typescript ts-node
tsc --help

```

#### Start from command:

```
npm init -y // init node app
npm install axios // JSON reader

```

variant 1

```
tsc index.ts // generate index.js
node index.js // run app
```

variant 2

```
ts-node index.ts // generate index.js and run app

```

### Google Map

<b>Folder name type02</b>

### Useful:

[npmjs.com](http://npmjs.com)
Search: <b>faker</b> package

#### Precreated:

```
npm install -g parcel-bundler // http server, auto  convert ts to js

npm install faker
npm install @types/faker
```

#### Start from command:

```
parcel index.html


```

### OOP

<b>Folder name type03</b>
