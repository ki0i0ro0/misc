import AsyncStorage from '@react-native-async-storage/async-storage'

export const save = async (text: string, createdAt: number) => {
  const key = `${createdAt}`
  const value = JSON.stringify({
    text,
    createdAt,
  })

  await AsyncStorage.setItem(key, value)
}

export const loadAll = async () => {
  const keys = await AsyncStorage.getAllKeys()
  // @ts-ignore
  keys.sort()
  const entryList = await AsyncStorage.multiGet(keys)
  return entryList.map((entry) => JSON.parse(entry[1] || ''))
}
