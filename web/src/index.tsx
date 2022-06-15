import React from 'react'
import { AppRegistry, View, Text } from 'react-native'

const App = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}

AppRegistry.registerComponent('sample-app', () => App)
AppRegistry.runApplication('sample-app', {
  rootTag: document.getElementById('root'),
})
