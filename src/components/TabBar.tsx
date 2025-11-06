import React from "react";
import { Link, useLocation } from "react-router-dom";

type TabItemProps = {
  to: string;
  label: string;
  icon: string;
  activeIcon?: string;
};

const TabItem = ({ to, label, icon, activeIcon }: TabItemProps) => {
  const { pathname } = useLocation();
  const active = pathname === to || (to === "/" && pathname === "/");

  return (
    <Link
      to={to}
      className="flex flex-col items-center justify-center flex-1 transition-all duration-150 active:scale-95"
    >
      <img
        src={active && activeIcon ? activeIcon : icon}
        alt={label}
        className="w-6 h-6 mb-0.5"
      />
      <span
        className={`text-[11px] font-medium ${
          active ? "text-[#2ec4b6]" : "text-neutral-500"
        }`}
      >
        {label}
      </span>
    </Link>
  );
};

export default function TabBar() {
  return (
    <nav className="h-14 border-t bg-white flex px-6 gap-6 items-center justify-between">
      <TabItem
        to="/"
        label="Home"
        icon="https://mobile.unnispick.com/assets/home-b4701a57.svg"
        activeIcon="https://mobile.unnispick.com/assets/home-b4701a57.svg"
      />
      <TabItem
        to="/products"
        label="Produk"
        icon="https://mobile.unnispick.com/assets/products-f35da9e1.svg"
        activeIcon="https://mobile.unnispick.com/assets/products-f35da9e1.svg"
      />
      <TabItem
        to="/profile"
        label="Akun"
        icon="https://mobile.unnispick.com/assets/account-137d6ae7.svg"
        activeIcon="https://mobile.unnispick.com/assets/account-137d6ae7.svg"
      />
    </nav>
  );
}
