import PushNotification from "react-native-push-notification";

const configure = () => {
  PushNotification.configure({
    onRegister: function(token) {
      //process token
    },

    onNotification: function(notification) {
    },

    popInitialNotification: true,
    requestPermissions: true
  });
};

const localNotification = () => {
  PushNotification.localNotification({
    autoCancel: true,
    largeIcon: "ic_launcher",
    smallIcon: "ic_notification",
    bigText: "My big text that will be shown when notification is expanded",
    subText: "This is a subText",
    color: "green",
    vibrate: true,
    vibration: 300,
    title: "มีฝนตกทั่วพื้นที่",
    message: "ระวังเรื่องการเดินทางและกิจกรรมนอกสถานที่",
    playSound: true,
    soundName: "default",
    actions: '["Accept", "Reject"]'
  });
};

export { configure, localNotification };
