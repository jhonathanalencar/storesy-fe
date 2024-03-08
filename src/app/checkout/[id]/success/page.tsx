interface CheckoutSuccessProps {
  params: { id: string };
}

export default function CheckoutSuccess({ params }: CheckoutSuccessProps) {
  return <h1>{params.id}</h1>;
}
