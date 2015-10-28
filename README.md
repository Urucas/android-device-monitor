# android-device-monitor
A node module to check on android usb device changes(connection, disconnection)

#Install
```bash
npm install -g android-device-monitor
```

#Usage
```bash
$ android-device-monitor
```

<img src="https://raw.githubusercontent.com/Urucas/android-device-monitor/master/screen.png" />


**API**

```javascript
import monitor from 'android-device-monitor'
monitor({
  "onConnection": (device) => {
    // do something when a device is connected
  },
  "onDisconnection": (device) => {
    // do something when a device is disconnected
    // send an alert to wake up somebody
  }
})
```
