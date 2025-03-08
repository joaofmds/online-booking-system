import { LoadProductByPageRepository } from "@/slices/product/repositories/contracts";
import { ProductPaginated } from "@/slices/product/entities";
import { Query } from "@/application/types";

export type LoadProductByPage = (query: Query) => Promise<ProductPaginated | null>;
export type LoadProductByPageSignature = (
  loadProductByPage: LoadProductByPageRepository
) => LoadProductByPage;

export const loadProductByPage: LoadProductByPageSignature =
  (loadProductByPageRepository: LoadProductByPageRepository) => (query: Query) => {
    return loadProductByPageRepository.loadProductByPage(query);
  };
