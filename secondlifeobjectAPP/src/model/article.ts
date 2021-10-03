import {User} from './user';

export class Article {
  id: number;
  name: string;
  description: string;
  dateDebutEnchere: Date;
  dateFinEnchere: Date;
  prixInitial: number;
  prixVente: number;
  etatVente: string;
  user: User;
}
