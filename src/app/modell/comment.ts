import { RepComment } from './repComment';
import { User } from './user';

export class UserComment{
    idComment:number;
    idUser:number;
    userName:string;
    content:string;
    user:User;
    dateCreate:Date;
    listRepComment:RepComment[];
    repComment:boolean=true;
}