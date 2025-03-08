import { LoadProductRepository } from "@/slices/product/repositories/contracts";
import { ProductData } from "@/slices/product/entities";
import { Query } from "@/application/types";

export type LoadProduct = (query: Query) => Promise<ProductData | null>;
export type LoadProductSignature = (loadProduct: LoadProductRepository) => LoadProduct;

export const loadProduct: LoadProductSignature =
  (loadProductRepository: LoadProductRepository) => (query: Query) => {
    return loadProductRepository.loadProduct(query);
  };
