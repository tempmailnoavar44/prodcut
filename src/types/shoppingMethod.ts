export interface ShoppingMethodNode {
  text: string;
  children?: ShoppingMethodNode[];
}

export interface TypesShoppingMethodNode {
  data: ShoppingMethodNode;
  success: boolean;
}
