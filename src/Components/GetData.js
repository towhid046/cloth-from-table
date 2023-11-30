 export const getData = (keyName) => JSON.parse(localStorage.getItem(keyName)) || []

