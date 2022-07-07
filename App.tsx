// 省略
import { MainScreen } from './src/MainScreen'
import { ComposeScreen } from './src/ComposeScreen'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{
              title: 'メモ帳',
            }}
          />
          {/* (1) */}
          <Stack.Screen
            name="Compose"
            component={ComposeScreen}
            options={{
              title: '作成',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
