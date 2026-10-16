export const PRODUCT = {
  id: "glossix-30",
  name: "Glossix Papaya Whitening",
  subtitle: "30 Capsules · Glutathione Complex",
  price: 2999,
  compareAt: 4500,
  image: "/glossix.png",
  /** WhatsApp number with country code, digits only — update if needed */
  whatsapp: "923001234567",
} as const;

export type Product = typeof PRODUCT;

export function formatPKR(amount: number) {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
