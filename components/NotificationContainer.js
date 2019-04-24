import React from 'react';
import {
 Text,
 View,
 Button,
} from 'react-native';
import { pushNotifications } from './services';

const AppContainer = () => {
 const handleOnPress = () => {
   pushNotifications.localNotification();
 };

 return (
   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <Text>
       Test Notification
     </Text>
     <Button
       title={'Send Notification'}
       onPress={handleOnPress}/>
   </View>
 );
};

export default AppContainer;