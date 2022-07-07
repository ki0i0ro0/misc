import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const ComposeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>メモ作成画面</Text>
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
