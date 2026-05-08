import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Check } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
  features?: string[];
  badge?: string;
}

export function ProductCard({ name, price, image, description, features, badge }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-gray-100 relative">
        {badge && (
          <Badge className="absolute top-3 right-3 z-10 bg-blue-600 hover:bg-blue-700">
            {badge}
          </Badge>
        )}
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="mb-3 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-xs text-gray-700 flex items-start gap-1">
                <Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${price.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
}