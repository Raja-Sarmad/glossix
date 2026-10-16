"use client";

import type { ReactNode } from "react";
import { useCart } from "./cart-context";
import { ArrowRightIcon, CartIcon } from "./icons";

type Props = {
  label?: string;
  className?: string;
  showIcons?: boolean;
  children?: ReactNode;
};

export function AddToCartButton({
  label = "Add to Cart",
  className,
  showIcons = true,
  children,
}: Props) {
  const { addProduct } = useCart();

  return (
    <button
      type="button"
      onClick={() => addProduct(1)}
      className={
        className ??
        "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] px-7 py-3.5 text-sm font-extrabold whitespace-nowrap text-white shadow-[0_12px_28px_rgba(79,70,229,0.35)] transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
      }
    >
      {children ?? (
        <>
          {showIcons ? <CartIcon size={16} className="shrink-0" /> : null}
          <span>{label}</span>
          {showIcons ? <ArrowRightIcon size={16} className="shrink-0" /> : null}
        </>
      )}
    </button>
  );
}
