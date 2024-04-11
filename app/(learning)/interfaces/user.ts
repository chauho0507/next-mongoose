export interface IUser {
  id: number | null
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: {
    street: string
    suite: string
    city: string
    zipCode: string
    geo: {
      lat: string
      lng: string
    }
  }
}
