export type MenuType = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type Product = {
  id: string;
  title: string;
  desc: string | null;
  img: string | null;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createAt: Date;
  intent_id?: String;
};

export type CartItemType = {
  id: string;
  title: string;
  img?: number;
  price: object[];
  optionTitle?: string;
  quantity: number;
};
