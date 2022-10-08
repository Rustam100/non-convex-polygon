export interface MenuItem {
  name: string;
  description?: string | null;
  subMenu?: MenuItem[] | null;
}
