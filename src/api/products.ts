import { api } from '@/data/api'
import { ProductResponse } from '@/data/products'

export async function getProducts(): Promise<ProductResponse | undefined> {
  const response = await api(
    '/v1/products?page=1&rows=6&sortBy=id&orderBy=DESC',
  )
  const products = await response.json()
  return products
}
