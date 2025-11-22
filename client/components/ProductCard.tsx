import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  onWishlist?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating = 0,
  reviews = 0,
  onWishlist = false,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(onWishlist);
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
              -{discount}%
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-3 left-3 p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
          >
            <Heart
              className="w-5 h-5"
              fill={isWishlisted ? "currentColor" : "none"}
              color={isWishlisted ? "currentColor" : "currentColor"}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {name}
          </h3>

          {/* Rating */}
          {rating > 0 && (
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill={i < Math.floor(rating) ? "#ff0000" : "#e5e5e5"}
                    color={i < Math.floor(rating) ? "#ff0000" : "#e5e5e5"}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({reviews})
              </span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold text-primary">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="w-full py-2 rounded-lg bg-secondary text-foreground hover:bg-yellow-500 font-semibold transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
