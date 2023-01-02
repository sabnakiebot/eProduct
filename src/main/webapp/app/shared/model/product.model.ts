import { IOrder } from 'app/shared/model/order.model';

export interface IProduct {
  id?: number;
  productId?: number | null;
  name?: string;
  price?: number | null;
  stock?: number | null;
  orders?: IOrder[] | null;
}

export const defaultValue: Readonly<IProduct> = {};
