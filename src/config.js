export const WHATSAPP_CONFIG = {
  number: "62822122456",
  text: "Halo KrediOne, saya membutuhkan bantuan.",
  getLink: () => `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(WHATSAPP_CONFIG.text)}`,
  getDisplay: () => `+${WHATSAPP_CONFIG.number}`
};

export const CONTACT_CONFIG = {
  email: "bantuan@kredione.com",
  hours: "Setiap Hari, 24/7",
  location: "Jakarta, Indonesia"
};
