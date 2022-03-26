import { UserModel } from "./UserModel";

export interface MessageModel{
    text: string;
    date: Date;
    check?: 'SEND' | 'RECEIVE' | 'VIEWED';
    isMe: boolean;
    user?: UserModel;
}