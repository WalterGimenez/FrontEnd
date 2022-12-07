export class persona{
    id? : number;
    name : string;
    lastname : string;
    about1 : string;
    about2 : string;
    tit1 : string;
    tit2 : string;
    banner : string;
    link : string;


    constructor(name: string, lastname: string, about1: string, about2: string, tit1: string, tit2: string, banner: string, link : string){
        this.name = name;
        this.lastname = lastname;
        this.about1 = about1;
        this.about2 = about2;
        this.tit1 = tit1;
        this.tit2 = tit2;
        this.banner = banner;
        this.link = link;
    }
}