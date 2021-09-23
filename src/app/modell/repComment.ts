import { User } from './user';

export class RepComment{
    idRepComment:number;
    idComment:number;
    idUser:number;
    userName:string;
    content:string;
    user:User;
    dateCreate:Date;
}