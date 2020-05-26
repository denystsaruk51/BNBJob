
import {    
    AsyncStorage,
    Alert
  } from 'react-native'


export async function StoreItem(key, item) {
    try {        
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item))
        Alert.alert(
            JSON.stringify(item),
            'Used to send you candidates Close to you',
              [
                {
                  text: 'lll',
                },
                {
                  text: 'sdfsf',
                },
              ],
              { cancelable: false }
          )
        return jsonOfItem
    } catch (error) {
      console.log(error.message)
    }
}

export async function RetrieveItem(key) {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key)
      const item = JSON.parse(retrievedItem)
      return item
    } catch (error) {
      console.log(error.message)
    }
    return
}