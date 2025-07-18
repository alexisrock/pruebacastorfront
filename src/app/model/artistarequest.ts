

export interface ArtistaRequest {
    artistaname: string
  }


export interface ArtistaResponse {
    id: string
    name: string
    genres: string[]
    popularity: number
    followers: number
    image_url: string
  }