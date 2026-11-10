
const ALLOWED_DOMAIN = "@hbplus.fit";

export const isAllowedDomain = (email: string | null): boolean => {
  if (!email) {
    return false;
  }

  return email.trim().toLowerCase().endsWith(ALLOWED_DOMAIN);
};
