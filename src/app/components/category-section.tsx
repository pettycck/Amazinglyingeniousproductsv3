import { ProductCard } from './product-card';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  features?: string[];
  badge?: string;
}

interface CategorySectionProps {
  title: string;
  products: Product[];
}

export function CategorySection({ title, products }: CategorySectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-gray-200">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            features={product.features}
            badge={product.badge}
          />
        ))}
      </div>
    </section>
  );
}