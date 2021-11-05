# LabApp

A general application to build off of for The Hybrid Atelier Laboratory.

## General Notes

The main branch is a template to view the https://hybridatelier.uta.edu/ via a native desktop app.
main.js is the file that will running the shell of our project applications. ([info](https://www.electronjs.org/docs/latest/api/browser-window))

# Setting up Electron

To install prebuilt Electron binaries, use npm. The preferred method is to install Electron as a development dependency in your app:

```bash
npm install electron --save-dev
```

## Clone the repo & running the app

```bash
git clone https://github.com/The-Hybrid-Atelier/LabApp.git
cd src
npm install
npm start
```

# Electron Building

In this app, we are currently using the [electron-builder](https://choosealicense.com/licenses/mit/) library.
The configurations of building binaries for LabApp will be located in package.json.
For more information, view the [electron-builder](https://choosealicense.com/licenses/mit/) documentation link.

Note: Documentation strongly recommends using Yarn, but npm is okay in most cases.

```bash
npm install electron-builder --dev
```

To build the app, our current command that is configured in the package.json is:

```bash
npm install electron-builder --dev
```
