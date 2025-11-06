import React from "react";

export default function MobileShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center ">
      <div
        className="bg-white shadow-soft  overflow-hidden  h-screen"
        style={{ width: 390 }}
      >
        <div className="h-full w-full mobile-scroll">{children}</div>
      </div>
    </div>
  );
}
