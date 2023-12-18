interface ProductDetailsProps {
  params: { slug: string };
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return <h1>{params.slug}</h1>;
}
