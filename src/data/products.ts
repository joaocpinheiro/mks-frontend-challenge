export interface Products {
  products: {
    id: number
    name: string
    brand: string
    description: string
    price: number
  }[]
  count: number
}
