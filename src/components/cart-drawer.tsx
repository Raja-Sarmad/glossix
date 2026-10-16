"use client";

import Image from "next/image";
import { formatPKR, PRODUCT } from "@/lib/product";
import { useCart } from "./cart-context";
import { MinusIcon, PlusIcon, TrashIcon, XIcon } from "./icons";

export function CartDrawer() {
  const { items, open, setOpen, setQty, removeItem, subtotal, count } =
    useCart();

  if (!open) return null;

  const checkoutMessage = [
    "Hi! I'd like to order Glossix:",
    ...items.map(
      (line) => `• ${line.name} x${line.qty} = ${formatPKR(line.price * line.qty)}`,
    ),
    `Total: ${formatPKR(subtotal)}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/${PRODUCT.whatsapp}?text=${encodeURIComponent(checkoutMessage)}`;

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        className="absolute inset-0 bg-[#1e1b4b]/40 backdrop-blur-[2px]"
        aria-label="Close cart"
        onClick={() => setOpen(false)}
      />

      <aside
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-[#e2e8f0] px-5 py-4">
          <div>
            <p className="text-lg font-extrabold text-[#1e1b4b]">Your Cart</p>
            <p className="text-xs font-medium text-[#64748b]">
              {count} item{count === 1 ? "" : "s"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#e2e8f0] text-[#1e1b4b]"
            aria-label="Close"
          >
            <XIcon size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <p className="text-base font-bold text-[#1e1b4b]">Cart is empty</p>
                <p className="mt-1 text-sm text-[#64748b]">
                  Add Glossix to get started.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-5 inline-flex rounded-full bg-[#1e1b4b] px-5 py-2.5 text-sm font-bold text-white"
                >
                  Continue shopping
                </button>
              </div>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((line) => (
                <li
                  key={line.id}
                  className="flex gap-3 rounded-2xl border border-[#e2e8f0] p-3"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#eef2ff]">
                    <Image
                      src={line.image}
                      alt={line.name}
                      fill
                      className="object-contain p-1"
                      unoptimized
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-extrabold text-[#1e1b4b]">
                          {line.name}
                        </p>
                        <p className="mt-0.5 text-xs text-[#64748b]">
                          {PRODUCT.subtitle}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.id)}
                        className="text-[#94a3b8] hover:text-[#ef4444]"
                        aria-label="Remove"
                      >
                        <TrashIcon size={16} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-[#e2e8f0] bg-[#f8fafc]">
                        <button
                          type="button"
                          className="grid h-8 w-8 place-items-center text-[#1e1b4b]"
                          onClick={() => setQty(line.id, line.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon size={14} />
                        </button>
                        <span className="min-w-6 text-center text-sm font-bold">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          className="grid h-8 w-8 place-items-center text-[#1e1b4b]"
                          onClick={() => setQty(line.id, line.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          <PlusIcon size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-extrabold text-[#1e1b4b]">
                        {formatPKR(line.price * line.qty)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 ? (
          <div className="border-t border-[#e2e8f0] px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-[#64748b]">Subtotal</span>
              <span className="text-lg font-extrabold text-[#1e1b4b]">
                {formatPKR(subtotal)}
              </span>
            </div>
            {subtotal < 3000 ? (
              <p className="mt-1 text-xs text-[#64748b]">
                Add {formatPKR(3000 - subtotal)} more for free delivery.
              </p>
            ) : (
              <p className="mt-1 text-xs font-semibold text-[#2563eb]">
                Free delivery unlocked
              </p>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(79,70,229,0.35)]"
            >
              Checkout on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-[#e2e8f0] px-5 py-3 text-sm font-bold text-[#1e1b4b]"
            >
              Continue shopping
            </button>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
