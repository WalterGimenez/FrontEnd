export class education{
    id?: number;
    name: String;
    startend: String;
    descrip: String;
    link: String;
    

    constructor(name: String, startend: String, descrip: String, link: String){
        this.name = name;
        this.startend = startend;
        this.descrip = descrip;
        this.link = link;
    }
}