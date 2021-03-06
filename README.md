# android-device-monitor
Monitoring Android USB Devices in Node

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

#Requirements
* ADB
* libs required by [node-usb-detection](https://github.com/MadLittleMods/node-usb-detection) module


#Related
* Receive notifications on Slack on (dis)connection events [https://github.com/Urucas/android-device-monitor-slack-integration](https://github.com/Urucas/android-device-monitor-slack-integration)
