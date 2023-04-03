// Set local storage
export const setLocalStorage = <T>(key: string, data: T): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(data))

    return true
  } catch {
    return false
  }
}

// Get local storage
export const getLocalStorage = (key: string): string => {
  try {
    return JSON.parse(localStorage.getItem(key) || '')
  } catch {
    return ''
  }
}
