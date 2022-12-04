export class proyects{
    id?: number;
    link: String;
    name: String;
    descrip: String;
    linkproy: String;


    constructor(link: String, name: String, descrip: String, linkproy: String){
        this.link = link;
        this.name = name;
        this.descrip = descrip;
        this.linkproy = linkproy;
    }
}