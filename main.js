const {app, BrowserWindow} = require('electron')
const Highcharts = require('highcharts')

let win

function createWindow() {
  win = new BrowserWindow({width: 512, height: 384})
  win.loadURL(`file://${__dirname}/index.html`)
  
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if(win === null) {
    createWindow() // should only get here if we're on macos
  }
})