# Multi-Chain Storage

**Technology stack：** vue2 + vuex + vue-router + webpack + sass + element-ui + web3


## Container Installation

Running Swan Faucet as a container is the recommended way of using it.

### Prerequisites

#### Install Docker Compose

https://docs.docker.com/compose/install/
### Stable

Run the following command to run the latest stable image of MCS Web

```bash
docker build -t filswan/mcs-web .
docker run  -p 8080:8080 filswan/mcs-web
```
The service will be Available on:

http://127.0.0.1:8080

http://172.17.0.2:8080

Hit CTRL-C to stop the server

## Installation dependency

Run `npm install` to generate component.

## Development server

```shell
# Node version below 17
$ npm run dev

# Node version 17 and above
$ npm run dev_t
```

Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Build project

Node version below 17
```shell
# Build test projects
$ npm run build:test

# Build prod test projects
$ npm run build:test_prod

# Build calibration projects
$ npm run build:calibration

# Build prod projects
$ npm run build:prod

# Build semi prod projects
$ npm run build:semi_prod
```

Node version 17 and above
```shell
# Build test projects
$ npm run build:test_t

# Build prod test projects
$ npm run build:test_prod_t

# Build calibration projects
$ npm run build:calibration_t

# Build prod projects
$ npm run build:prod_t

# Build semi prod projects
$ npm run build:semi_prod_t
```

The build artifacts will be stored in the `dist/` directory.

## install echarts, swiper

Run `npm install echarts --save``npm i swiper@5.2.0` to generate component.

## Reference documents

- [vue](https://vuejs.bootcss.com/v2/guide/)：Vue is a progressive framework for building user interfaces.

- [vuex](https://vuex.vuejs.org/zh/)：Vuex is a state management pattern developed specifically for vue.js applications.

- [vue-router](https://router.vuejs.org/zh/)：Vue router is the official routing manager of vue.js.

- [webpack](https://webpack.js.org/concepts/)：Front end module packer.

- [element-ui](https://element.eleme.io/)：Element, a desktop component library based on Vue 2.0 for developers, designers and product managers.

- [web3.js](http://cw.hubwiz.com/card/c/web3.js-1.0/)：Web3.js is a set of JS libraries used to interact with local or remote Ethereum nodes.

## Pre order preparation

**Preparation before operation:**

   Since this project is based on nodejs, you need to make preparations for nodejs. Before running the project, please ensure that the following applications have been installed in the system:

   (1)、Node (version 10.18.0 and above). Please refer to:[Download and install node.](https://nodejs.org/en/download/)

## Further help

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# electron-quick-start

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/latest/tutorial/quick-start) within the Electron documentation.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `preload.js` - A content script that runs before the renderer process loads.

You can learn more about each of these components in depth within the [Tutorial](https://electronjs.org/docs/latest/tutorial/tutorial-prerequisites).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [Electron Fiddle](https://electronjs.org/fiddle) - Electron Fiddle, an app to test small Electron experiments

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
