import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white border-b border-neutral-100 px-5 py-3">
        <h2 className="text-lg font-semibold text-neutral-800">Akun Saya</h2>
      </div>

      <div className="flex flex-col items-center mt-6">
        <img
          src="https://i.pravatar.cc/120?img=32"
          alt="avatar"
          className="w-20 h-20 rounded-full border border-neutral-200 shadow-sm"
        />
        <h3 className="mt-3 text-base font-semibold text-neutral-800">
          Hanin Aulia
        </h3>
        <p className="text-xs text-neutral-500 mt-0.5">hanin.aulia@example.com</p>
      </div>


      <div className="mt-8 px-5 space-y-3">
        <button className="w-full flex justify-between items-center py-3 border-b border-neutral-100">
          <span className="text-sm text-neutral-700">Edit Profil</span>
          <span className="text-neutral-400">{">"}</span>
        </button>
        <button className="w-full flex justify-between items-center py-3 border-b border-neutral-100">
          <span className="text-sm text-neutral-700">Pesanan Saya</span>
          <span className="text-neutral-400">{">"}</span>
        </button>
        <button className="w-full flex justify-between items-center py-3 border-b border-neutral-100">
          <span className="text-sm text-neutral-700">Riwayat Transaksi</span>
          <span className="text-neutral-400">{">"}</span>
        </button>
        <button className="w-full flex justify-between items-center py-3 border-b border-neutral-100">
          <span className="text-sm text-neutral-700">Bantuan & FAQ</span>
          <span className="text-neutral-400">{">"}</span>
        </button>
      </div>

      {/* Logout */}
      <div className="px-5 mt-8">
        <button className="w-full bg-[#2ec4b6] text-white py-3 rounded-xl font-medium text-sm">
          Keluar
        </button>
      </div>
    </div>
  );
}
