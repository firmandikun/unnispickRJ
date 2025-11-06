import React from "react";
import { useLocation } from "react-router-dom";

type TabKey = "Event" | "Feed" | "Subscription" | "Recycle";

type Props = {
  active?: TabKey;
  onTabChange?: (t: TabKey) => void;
  onBell?: () => void;
  onCart?: () => void;
};

const tabs: TabKey[] = ["Event", "Feed", "Subscription", "Recycle"];

export default function Header({
  active = "Subscription",
  onTabChange,
  onBell,
  onCart,
}: Props) {
  const { pathname } = useLocation();

  const isProfile = pathname !== "/profile";

  return (
    <header className="sticky top-0 z-30 bg-white">
      <div className="px-4 pt-3 pb-2">
        <div className="flex items-center gap-3">
          <div className="shrink-0 leading-none">
            <div className="flex items-end gap-1">
              <span className="text-[22px] font-extrabold tracking-wide text-[#2ec4b6]">
                UNNIS
              </span>
            </div>
            <div className="text-[10px] text-[#2ec4b6]/80 -mt-0.5"></div>
          </div>

          <div className="flex-1">
            <label className="block">
              <div className="flex items-center h-10 rounded-xl border border-neutral-300/70 px-3 shadow-[inset_0_1px_0_rgba(0,0,0,0.02)]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="opacity-70"
                >
                  <path
                    d="M21 21l-3.9-3.9M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  placeholder="Search product.."
                  className="ml-2 w-full bg-transparent outline-none text-[13px] placeholder:text-neutral-400"
                />
              </div>
            </label>
          </div>

          <div className="flex items-center gap-3 pl-1">
            <button
              onClick={onBell}
              aria-label="Notifications"
              className="p-1 rounded-md active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                ></path>
              </svg>
            </button>
            <button
              onClick={onCart}
              aria-label="Cart"
              className="p-1 rounded-md active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isProfile ? (
        <div className="border-t border-neutral-100">
          <div className="grid grid-cols-4 text-center text-[13px] text-neutral-500">
            {tabs.map((t) => {
              const isActive = t === active;
              return (
                <button
                  key={t}
                  onClick={() => onTabChange?.(t)}
                  className="py-2.5 relative font-medium"
                >
                  <span className={isActive ? "text-neutral-800" : ""}>
                    {t}
                  </span>
                  <span
                    className={[
                      "absolute left-1/2 -bottom-[1px] h-[2px] w-10 -translate-x-1/2 rounded-full transition-all",
                      isActive ? "bg-[#2ec4b6]" : "bg-transparent",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-200/60 to-transparent" />
    </header>
  );
}
