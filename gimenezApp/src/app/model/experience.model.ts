export class experience{
    id?: number;
    name: String;
    startend: String;
    link: String;
    job: String;
    descrip: String;

    constructor(name: String, startend: String, link: String, job: String, descrip: String){
        this.name = name;
        this.startend = startend;
        this.link = link;
        this.job = job;
        this.descrip = descrip;
    }
}