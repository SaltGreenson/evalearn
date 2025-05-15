export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");

  // Беларусь (+375 XX XXX XX XX)
  if (cleaned.startsWith("375") && cleaned.length === 12) {
    return cleaned.replace(
      /(375)(\d{2})(\d{3})(\d{2})(\d{2})/,
      "+$1 ($2) $3 $4 $5"
    );
  }

  // Россия и другие (например, +7 (XXX) XXX-XX-XX)
  if (cleaned.startsWith("7") && cleaned.length === 11) {
    return cleaned.replace(
      /(7)(\d{3})(\d{3})(\d{2})(\d{2})/,
      "+$1 ($2) $3-$4-$5"
    );
  }

  // США (например, (123) 456-7890)
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }

  // Международные номера (например, +XX XXX XXX XXXX)
  if (cleaned.length > 10) {
    return cleaned.replace(
      /(\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2})/,
      "+$1 ($2) $3 $4 $5"
    );
  }

  return cleaned;
};
