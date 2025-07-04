export interface NavItem {
  title: string;
  link?: string;
  children?: NavItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}
