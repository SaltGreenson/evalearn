export const isCurrentPath = (pathname: string, href: string): boolean =>
  Boolean(
    (pathname.includes(href) && href !== "/") ||
      (pathname === href && href === "/")
  );
