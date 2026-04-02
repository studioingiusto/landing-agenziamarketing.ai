import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-main-gradient flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-[#9c55ff]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#9c55ff] animate-spin"></div>
        </div>

        <h2 className="text-white font-title text-xl mb-2">Loading pitch deck…</h2>
        <p className="text-white/60 text-sm">Short version (English)</p>
      </div>
    </div>
  );
}
