import React from "react";
import type { Brand } from "../types";

type Props = {
  brand: Brand;
  active?: boolean;
  onClick: () => void;
  showCount?: boolean;
};

export default function BrandChip({ brand, active=false, onClick, showCount=false }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "group inline-flex items-center gap-2",
        "px-3.5 py-2 rounded",
        "border transition-all duration-200",
        "shadow-[0_1px_0_rgba(0,0,0,0.02)]",
        active
          ? "bg-[#2ec4b6] text-white border-transparent"
          : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300",
      ].join(" ")}
    >
      <span
        className={[
          "relative inline-grid place-items-center",
          "w-7 h-7 rounded-full",
          active
            ? "bg-gradient-to-tr from-white/70 to-white/30"
            : "bg-neutral-100",
        ].join(" ")}
      >
        <span
          className={[
            "absolute inset-0 rounded-full",
            active
              ? "ring-2 ring-offset-2 ring-offset-[#2ec4b6] ring-white/80"
              : "ring-1 ring-white/80",
          ].join(" ")}
        />
        {brand.logo_url ? (
          <img
            src={brand.logo_url}
            alt={brand.name}
            className="w-[22px] h-[22px] rounded-full object-cover"
          />
        ) : (
          <span className="w-[22px] h-[22px] rounded-full bg-white/70" />
        )}
      </span>

      {/* Texts */}
      <span className="text-[13px] font-semibold tracking-tight max-w-[120px] truncate">
        {brand.name}
      </span>

      {/* Optional count badge */}
      {showCount && typeof brand.products_count === "number" && (
        <span
          className={[
            "ml-0.5 px-2 py-[2px] rounded-full text-[11px] font-medium",
            active
              ? "bg-white/20 text-white"
              : "bg-neutral-50 text-neutral-600 border border-neutral-200",
          ].join(" ")}
        >
          {brand.products_count}
        </span>
      )}
    </button>
  );
}
