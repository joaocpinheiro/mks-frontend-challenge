export interface Product {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
}
export interface ProductResponse {
  products: Product[]
  count: number
}
