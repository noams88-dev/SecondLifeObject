import {User} from './user';

export class Article {
  id: number;
  name: string;
  description: string;
  auctionStartDate: Date;
  auctionEndDate: Date;
  initialPrice: number;
  finalPrice: number;
  saleStatus: string;
  user: User;
}
