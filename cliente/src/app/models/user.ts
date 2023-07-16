export class User {
    _id?: string;
    userId?: string;
    createDate?: number;
    updateDate?: number;
    name: string;

    constructor(createDate: number, updateDate: number, name: string, userId: string){
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.name = name;
        this.userId = userId;
    }
}