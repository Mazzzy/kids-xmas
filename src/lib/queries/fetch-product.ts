export const fetchProduct = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
  const data = await res.json();

  return data;
};
