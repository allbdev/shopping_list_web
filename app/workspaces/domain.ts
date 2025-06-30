export interface Workspace {
  id: string;
  name: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface ProductsList {
  id: number;
  workspace_id: number;
  user_id: number;
  title: string;
  created_at: string;
  updated_at: string;
  Products: Array<Product>;
}

export interface Product {
  list_id: number;
  product_id: number;
  quantity: number;
  checked: boolean;
  created_at: string;
  updated_at: string;
  name: string;
}
