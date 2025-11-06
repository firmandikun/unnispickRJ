import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/products/${product.id}`} className="block">
      <div className="rounded overflow-hidden border bg-white">
        {product.thumbnail_url && (
          <img
            src={product.thumbnail_url}
            alt={product.name}
            className="w-full h-44 object-cover"
          />
        )}
        <div className="p-3">
          <p className="text-[11px] text-neutral-500">
            {product.brand?.name ?? "—"}
          </p>
          <h3 className="text-sm font-semibold line-clamp-2 min-h-[40px]">
            {product.name}
          </h3>
          <p className="mt-1 text-primary font-bold">
            Rp {product.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </Link>
  );
}
