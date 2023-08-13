import BleManager from 'react-native-ble-manager';

// Scan for available devices
BleManager.scan([], 5, true)
  .then(results => {
    // Filter and display the Emotiv Epoc device in the list
    const device = results.find(result => result.name === 'Emotiv Epoc');
    console.log('Found Emotiv Epoc:', device);
    // Connect to the Emotiv Epoc device
    BleManager.connect(device.id)
      .then(() => {
        console.log('Connected to Emotiv Epoc!');
        // Start receiving EEG data
        // Implement Emotiv SDK functions to retrieve EEG data streams
      })
      .catch(error => {
        console.log('Connection error:', error);
      });
  })
  .catch(error => {
    console.log('Scan error:', error);
  });


//   import BleManager from 'react-native-ble-manager';  
  
//   // Scan for BLE devices 
//   BleManager.startScan([], null, (error, device) => {
//        if (error) {     console.log('Error scanning devices:', error);
//             return;   } 
//        if (device.name === 'Epoc+' || device.name === 'Insight')
//  {     console.log('Found Emotiv device:', device.name, device.id);
//        // Connect to the device    
       
//         BleManager.connect(device.id).then(() => {         console.log('Connected to device:', device.id);       
//        // Perform any required operations on the device     
//            // ...       
//              // For example, you could subscribe to notifications from the raw data characteristic      
//                 // by using the Emotiv SDK to retrieve the UUID of the characteristic and then    
//                      // passing that UUID to the 
//                      BleManager.startNotification() method.       }).catch((error) => {         console.log('Error connecting to device:', error);       });   } }); 