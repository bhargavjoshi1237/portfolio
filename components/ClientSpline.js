"use client";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function ClientSpline(props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-sm text-[#e7e7e780]">Loading 3D scene...</p>
      </div>
    );
  }
  return <Spline {...props} />;
}
