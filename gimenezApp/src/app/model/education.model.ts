export class education{
    id?: number;
    name: string;
    startend: string;
    descrip: string;
    link: string;
    

    constructor(name: string, startend: string, descrip: string, link: string){
        this.name = name;
        this.startend = startend;
        this.descrip = descrip;
        this.link = link;
    }
}