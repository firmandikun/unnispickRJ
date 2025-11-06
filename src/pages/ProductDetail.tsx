import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProductDetail } from "../hooks/useProductDetail";

export default function ProductDetail() {
  const { id } = useParams();
  const productId = Number(id);
  const { data, isLoading } = useProductDetail(productId);

  if (isLoading) return <p className="p-5">Memuat...</p>;
  if (!data) return <p className="p-5">Produk tidak ditemukan</p>;

  return (
    <div className="h-full flex flex-col">
      <div className="relative">
        {data.thumbnail_url && (
          <img
            src={data.thumbnail_url}
            alt={data.name}
            className="w-full h-64 object-cover"
          />
        )}
        <Link
          to={-1 as any}
          className="absolute top-3 left-3 bg-white/90 rounded-full px-3 py-1 text-sm border"
        >
          Kembali
        </Link>
      </div>
      <div className="p-5 space-y-2">
        <p className="text-xs text-neutral-500">{data.brand?.name}</p>
        <h1 className="text-lg font-bold">{data.name}</h1>
        <p className="text-primary font-extrabold text-xl">
          Rp {data.price.toLocaleString("id-ID")}
        </p>
        <p className="text-sm text-neutral-700 mt-2 leading-relaxed">
          {data.description}
        </p>
        <div className="mt-3 p-3 rounded-xl bg-soft border">
          <h3 className="text-sm font-semibold mb-1">Detail Produk</h3>
          <p className="text-sm">SKU: {data.detail?.sku ?? "-"}</p>
          <p className="text-sm">Stok: {data.detail?.stock ?? "-"}</p>
          {data.detail?.specs && (
            <ul className="mt-1 text-sm list-disc ml-5">
              {Object.entries(data.detail.specs).map(([k, v]) => (
                <li key={k}>
                  <span className="capitalize">{k}</span>: {String(v)}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="w-full py-3 rounded-xl bg-primary text-white font-semibold shadow-soft mt-2">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
