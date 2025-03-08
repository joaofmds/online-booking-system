import { addProductRepository } from "@/slices/product/repositories/contracts";
import { ProductEntity, ProductData } from "@/slices/product/entities";

export type AddProduct = (data: ProductData) => Promise<ProductEntity | null>;
export type AddProductSignature = (AddProduct: addProductRepository) => AddProduct;

export const addProduct: AddProductSignature =
  (addProductRepository: addProductRepository) => (data: ProductData) => {
    return addProductRepository.addProduct(new ProductEntity(data));
  };
