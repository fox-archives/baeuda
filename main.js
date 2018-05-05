const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
//Above three lines can be compressed into const {app, BrowserWindow} = require('electron')

const path = require('path')
const url = require('url')

let zMainWindow

function zCreateWindow() {
  //Creates the browser window
  zMainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    frame: false,
    icon: __dirname + '/app/assets/icons/icon.png' /*, resizable: false*/
  })
  zMainWindow.show()

  zMainWindow.loadURL(url.format({ //Loads html of application
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

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
})
