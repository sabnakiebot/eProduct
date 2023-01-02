import { IProduct } from 'app/shared/model/product.model';

export interface IOrder {
  id?: number;
  orderId?: number | null;
  orderNo?: string | null;
  totalAmount?: number | null;
  product?: IProduct | null;
}

export const defaultValue: Readonly<IOrder> = {};
