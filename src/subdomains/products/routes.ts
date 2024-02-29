import { DealsContainer } from './containers/deals.container';
import { ProductDetailsContainer } from './containers/product-details.container';
import { ProductSearchContainer } from './containers/product-search.container';
import { ProductsByCategoryContainer } from './containers/products-by-category.container';

export const productRoutes = {
  PRODUCT_DETAILS: ProductDetailsContainer,
  PRODUCTS_BY_CATEGORY: ProductsByCategoryContainer,
  SEARCH_PAGE: ProductSearchContainer,
  DEALS: DealsContainer,
};
