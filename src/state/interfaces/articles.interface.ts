export interface Article {
  name: string;
  brand: string;
  model: string;
  type: ArticleType;
  description: string;
  quantity: number;
}

export enum ArticleType {
  REPLACEMENT = "REPLACEMENT",
  CONSUMIBLE = "CONSUMIBLE",
  ACCESORY = "ACCESORY",
}
