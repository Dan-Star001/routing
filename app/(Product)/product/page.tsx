import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string;
};

type ProductsResponse = {
  products: Product[];
};

const PRODUCTS_API_URL = "https://dummyjson.com/products?limit=12";

async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_API_URL, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`The product API returned status ${response.status}.`);
  }

  const data: ProductsResponse = await response.json();

  if (!Array.isArray(data.products)) {
    throw new Error("The product API returned an invalid response.");
  }

  return data.products;
}

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
          Online catalogue
        </p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">Products</h1>
        <p className="mt-2 text-gray-600">
          Products loaded from the DummyJSON API.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <article
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            key={product.id}
          >
            <Image
              alt={product.title}
              className="h-48 w-full object-cover"
              height={192}
              src={product.thumbnail}
              width={320}
            />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                {product.category}
              </p>
              <h2 className="mt-2 line-clamp-2 text-lg font-semibold text-gray-900">
                {product.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                {product.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-600">
                  ★ {product.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}