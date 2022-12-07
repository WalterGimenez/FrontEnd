export class experience{
    id?: number;
    name: string;
    startend: string;
    link: string;
    job: string;
    descrip: string;

    constructor(name: string, startend: string, link: string, job: string, descrip: string){
        this.name = name;
        this.startend = startend;
        this.link = link;
        this.job = job;
        this.descrip = descrip;
    }
}