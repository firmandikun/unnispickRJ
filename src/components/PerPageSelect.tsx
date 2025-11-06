import React from "react";

type Props = {
  value: number;
  options?: number[];
  onChange: (v: number) => void;
};

export default function PerPageSelect({ value, options = [5, 10, 20], onChange }: Props) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-neutral-600">Per page</span>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border rounded px-2 py-1"
      >
        {options.map((v) => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>
    </div>
  );
}
