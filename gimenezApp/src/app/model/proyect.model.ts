export class proyect{
    id?: number;
    link: string;
    name: string;
    descrip: string;
    linkproy: string;


    constructor(link: string, name: string, descrip: string, linkproy: string){
        this.link = link;
        this.name = name;
        this.descrip = descrip;
        this.linkproy = linkproy;
    }
}