"use client";

import type { ReactNode } from "react";
import { CartProvider } from "./cart-context";
import { CartDrawer } from "./cart-drawer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
