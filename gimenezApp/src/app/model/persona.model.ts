export class persona{
    id? : number;
    name : String;
    lastName : String;
    image :  String;
    aboutMe : String;
    aboutMe2 : String;
    tit1 : String;
    tit2 : String;


    constructor(name: String, lastName: String, image: String, aboutMe: String, aboutMe2: String, tit1: String, tit2: String){
        this.name = name;
        this.lastName = lastName;
        this.image = image;
        this.aboutMe = aboutMe;
        this.aboutMe2 = aboutMe2;
        this.tit1 = tit1;
        this.tit2 = tit2;
    }
}