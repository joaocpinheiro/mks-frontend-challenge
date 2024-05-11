import { api } from '@/data/api'
import { Products } from '@/data/products'

export async function getProducts(): Promise<Products[]> {
  const response = await api('/#/Product/get_products')
  const products = await response.json()

  return products
}
