import { FAB, List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { loadAll } from './store'
export const MainScreen = () => {
  const navigation = useNavigation()
  const [memos, setMemos] = useState([])

  useEffect(() => {
    const initialize = async () => {
      const newMemos = await loadAll() // (2)
      setMemos(newMemos)
    }
    const unsubscribe = navigation.addListener('focus', initialize) // (1)
    return unsubscribe
  }, [navigation])

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
