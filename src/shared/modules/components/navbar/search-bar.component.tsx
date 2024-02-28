import { redirect } from 'next/navigation';

import { SearchButton } from './search-button.component';

async function searchProducts(formData: FormData) {
  'use server';
  const searchQuery = formData.get('query')?.toString();
  if (searchQuery) {
    redirect(`/search?query=${searchQuery}`);
  }
  redirect('/');
}

export function SearchBar() {
  return <SearchButton searchProducts={searchProducts} />;
}
