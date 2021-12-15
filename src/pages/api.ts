import axios from 'axios'

const http = axios.create({
  baseURL: 'https://restcountries.com/v2/'
})


export const api = {
  getAll: async () => {
    let flagsByRegion = await http.get('all')
    return flagsByRegion.data
  },
  getFlagsByCapital: async () => {
    let flagsByCapital = await http.get('capital/')
    return flagsByCapital.data
  },
  getFlagsByLanguage: async () => {
    let flagsByLanguage = await http.get('lang/')
    return flagsByLanguage.data
  },
  getFlagsBySelect: async () => {
    let flagSelected = await http.get('alpha/{currency}')
    return flagSelected.data
  }
}


