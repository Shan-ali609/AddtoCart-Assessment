
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string; 
  image: string; 
};

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    
    if (!res.ok) {
      throw new Error(`Failed to fetch products, status: ${res.status}`);
    }

    const products = await res.json();
    return products as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
