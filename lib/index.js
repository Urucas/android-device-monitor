import usbDetect from 'usb-detection'
import ADB from 'adbjs'
import semafor from 'semafor'

export default function monitor(events) {
  
  let adb = new ADB()
  let logger = semafor()
  logger.log("Android device monitor is running!")

  let devices = adb.devices()

  let onConnection = (device) => {
    logger.ok("A device is now connected")
    logger.log(device)
  }
  let onDisconnection = (device) => {
    logger.fail("A device has been disconnected")
    logger.log(device)
  }

  // add default events
  events = events || {}
  if(!events.onConnection) events.onConnection = onConnection
  if(!events.onDisconnection) events.onDisconnection = onDisconnection

  // Detect add/insert
  usbDetect.on('add', (device) => { 
    let id = device.serialNumber
    
    // check if the connected devices is android device
    // by getting adb device list
    devices = adb.devices()
    for(let i=0; i<devices.length; i++) {
      let d = devices[i]
      if(d.id == id) {
        // fire the connection events
        return events.onConnection(device)
      }
    }
  });

  // Detect remove
  usbDetect.on('remove', (device) => {
    let id = device.serialNumber
    
    // check if the disconnected device is on 
    // the previous android devices list 
    for(let i=0; i<devices.length; i++) {
      let d = devices[i]
      if(d.id == id) {
        // fire the disconnection events
        return events.onDisconnection(device)
      }
    }
    devices = adb.devices()
  });

}
