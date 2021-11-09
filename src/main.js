
// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;


function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1281, 
    height: 800, 
    minWidth: 1281, 
    minHeight: 800,


    backgroundColor: '#80FFFFFF',
    webPreferences: {
      preload: `${__dirname}/renderer.js`
    }
  });

// Load a remote URL
  mainWindow.loadURL("https://hybridatelier.uta.edu/");

  // Or load a local HTML file
// win.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

function createMainMenu() {
  const template = [
    {
      label: "LabApps",
      submenu: [
        {
          label: "Hybrid Atelier Home",
          accelerator: "CommandOrControl+R",
          click() {
            mainWindow.loadURL("https://hybridatelier.uta.edu/");
          }
        },
        {
          label: "Example UTA Home",
          accelerator: "CommandOrControl+U",
          click() {
            mainWindow.loadURL("https://www.uta.edu/");
          }
        }
      ]
    },s
    {
      label: "IoT Interfaces",
      submenu: [
        {
          label: "Air Control Panel",
          click() {
            mainWindow.loadURL("http://humrattlepurr.cearto.com/iot/air");
          }
        },
        {
          label: "LED Control Panel",
          click() {
            mainWindow.loadURL("http://humrattlepurr.cearto.com/iot/led");
          }
        },
        {
          label: "Emotibit Control Panel",
          click() {
            mainWindow.loadURL("http://humrattlepurr.cearto.com/iot/emotibit");
          }
        },
        {
          label: "Audio Control Panel",
          click() {
            mainWindow.loadURL("http://humrattlepurr.cearto.com/iot/audio");
          }
        },
        {
          label: "Video Control Panel",
          click() {
            mainWindow.loadURL("http://humrattlepurr.cearto.com/iot/video");
          }
        },
        {
          label: "Server Control Panel",
          click() {
            mainWindow.loadURL("http://humrattlepurr.cearto.com/iot/server");
          }
        },
        {
          label: "Meter Control Panel",
          click() {
            mainWindow.loadURL("http://humrattlepurr.cearto.com/iot/meter");
          }
        },
        {
          label: "Prototype Control Panel",
          click() {
            mainWindow.loadURL("http://humrattlepurr.cearto.com/iot/prototype");
          }
        },
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow();
  createMainMenu();
});

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


















// // Modules to control application life and create native browser window
// const {app, BrowserWindow} = require('electron')
// const path = require('path')

// function createWindow () {
//   // Create the browser window.
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')
//     }
//   })

//   // and load the index.html of the app.
//   mainWindow.loadFile('https://hybridatelier.uta.edu/')

//   // Open the DevTools.
//   // mainWindow.webContents.openDevTools()
// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.whenReady().then(() => {
//   createWindow()

//   app.on('activate', function () {
//     // On macOS it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (BrowserWindow.getAllWindows().length === 0) createWindow()
//   })
// })

// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// app.on('window-all-closed', function () {
//   if (process.platform !== 'darwin') app.quit()
// })

// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.
