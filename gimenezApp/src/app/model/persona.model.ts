export class persona{
    id? : number;
    name : String;
    lastName : String;
    image :  String;
    aboutMe : String;


    constructor(name: String, lastName: String, image: String, aboutMe: String){
        this.name = name;
        this.lastName = lastName;
        this.image = image;
        this.aboutMe = aboutMe;
    }
}