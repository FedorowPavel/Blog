export function setDataToLocalStorage<Data>(data: Data, key: string): void {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getDataFromLocalStorage<Data>(key: string): Data {
  return JSON.parse(localStorage.getItem(key) as string)
}

export function removeDataFromLocalStorage(key: string): void {
  localStorage.removeItem(key)
}
