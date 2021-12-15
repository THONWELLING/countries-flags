export type Countries = {
  name: string
  capital: string
  region: string
  subregion: string
  population: number
  flags: {
    svg: string
    png: string
  }
  languages: [
    {
      name: string
      nativeName: string
    }
  ]
  borders: []
}