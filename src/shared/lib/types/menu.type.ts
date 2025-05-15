export type MenuItemType = {
  handleRedirect: VoidFunction;
  isActive?: () => boolean;
  icon: string;
  label: string;
};
