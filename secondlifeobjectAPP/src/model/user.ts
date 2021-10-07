import {Role} from './role';
import {Article} from './article';

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  roles: Role[];
  name: string;
  firstname: string;
  credit: string;
  phone: string;
  imageUrl: string;
  articles: Article[];
}
