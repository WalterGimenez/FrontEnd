export class persona{
    id? : number;
    name : String;
    lastname : String;
    about1 : String;
    about2 : String;
    tit1 : String;
    tit2 : String;
    banner : String;


    constructor(name: String, lastname: String, about1: String, about2: String, tit1: String, tit2: String, banner: String){
        this.name = name;
        this.lastname = lastname;
        this.about1 = about1;
        this.about2 = about2;
        this.tit1 = tit1;
        this.tit2 = tit2;
        this.banner = banner;
    }
}