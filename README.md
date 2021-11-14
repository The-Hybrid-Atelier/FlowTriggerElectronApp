# LabApp

A general application to build off of for The Hybrid Atelier Laboratory.

[Quick Sample Run-thru Video](https://drive.google.com/file/d/1MeyfHN5E0SCE2t_syjxXArB_4_DFZGvh/view?usp=sharing)

[Watch our Intro Video](https://drive.google.com/file/d/1Bbaz10mofeM7eu_beZMURej-iZroBePn/view?usp=sharing)

## Authors

-[Tyler Do](https://github.com/dotyler)

## General Notes

The main branch is a template to view the https://hybridatelier.uta.edu/ via a native desktop app.
main.js is the file that will running the shell of our project applications. ([info](https://www.electronjs.org/docs/latest/api/browser-window))

# Setting up Electron

To install prebuilt Electron binaries, use npm. The preferred method is to install Electron as a development dependency in your app:

```bash
npm install electron --save-dev
```

## Getting Started: Clone the repo & running the app

```bash
git clone https://github.com/The-Hybrid-Atelier/LabApp.git
cd src
npm install
npm start
```

# Electron Forge (Simple Application Builder)

In this app, we are currently using the [electron-forge](https://www.electronforge.io/) library.
The configurations of building binaries for LabApp will be located in package.json.
For more information, view the [electron-forge](https://www.electronforge.io/) documentation link.

Note: Documentation strongly recommends using Yarn, but npm is okay in most cases.

```bash
npm install --save-dev @electron-forge/cli
```

To build the app, our current command configured is:
Note: Make sure package.json is configured correctly

```bash
npm run make
```

## Error fixing:

```
An unhandled rejection has occurred inside Forge:
Error: Could not find any make targets configured for the "win32" platform.
```

Run this command after reinstalling electron forge using npm

```bash
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

# Electron Builder (More difficult, Application builder)

In this app, we are currently using the [electron-builder](https://www.electron.build/) library.
The configurations of building binaries for LabApp will be located in package.json.
For more information, view the [electron-builder](https://www.electron.build/) documentation link.

Note: Documentation strongly recommends using Yarn, but npm is okay in most cases.

```bash
npm install electron-builder --dev
```

To build the app, our current command configured is:
Note: Make sure package.json is configured correctly

```bash
npm run dist
```
