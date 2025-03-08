import { ProductData } from "@/slices/product/entities";

export interface addProductRepository {
  addProduct(Product: ProductData): Promise<ProductData | null>;
}
