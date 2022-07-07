import { List, FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet } from 'react-native'

export const MainScreen = () => {
  const navigation = useNavigation()

  const onPressAdd = () => {
    navigation.navigate('Compose') // (3)
  }

  return (
    <View style={styles.container}>
      <FAB
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16,
        }}
        icon="plus"
        onPress={onPressAdd}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
