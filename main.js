const electron = require('electron')
<<<<<<< HEAD
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
=======
const app = electron.app
const BrowserWindow = electron.BrowserWindow
//Above three lines can be compressed into const {app, BrowserWindow} = require('electron')
>>>>>>> 379d5b310af4239cfb983aeb26e8031c6e70b254

const path = require('path')
const url = require('url')

<<<<<<< HEAD
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {

    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600, icon:__dirname+'/app/assets/icons/icon.png'})

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
=======
let zMainWindow

function zCreateWindow() {
    //Creates the browser window
    zMainWindow = new BrowserWindow({
        width: 400,
        height: 600,
        frame: false,
        icon: __dirname + '/app/assets/icon.png' /*, resizable: false*/
    })
    zMainWindow.show()

    zMainWindow.loadURL(url.format({ //Loads html of application
>>>>>>> 379d5b310af4239cfb983aeb26e8031c6e70b254
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

<<<<<<< HEAD
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.

    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store mwindows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
  })
  require("./app/js/menu.js")
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
=======
    zMainWindow.on('closed', () => {
        zMainWindow = null
    })
}

app.on('ready', zCreateWindow) //Creates a browser window after initialization





//Extra Behaviors
//Quit when all windows are closed (if not on mac)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

//If there are no windows open, when application icon is clicked, make a new window
app.on('active', () => {
    if (zMainWindow === null) {
        zCreateWindow()
    }
>>>>>>> 379d5b310af4239cfb983aeb26e8031c6e70b254
})
