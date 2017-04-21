import {Component} from'@angular/core';
import {PostService} from '../services/posts.service';
@Component({
selector:'user',
templateUrl:'./user.component.html'
})
export class UserComponent{
name:string;
showHobbies:boolean;
email:string;
address: address;
hobbies:string[];
newhobby="";
posts:Post[];


constructor(private postservice:PostService){
    this.name='sashi';
    this.email= 'sashikv@yahoo.com';
    this.showHobbies=false;
    this.address = {
      street:'415 fucshuia lane',
      city: 'san ramon',
      state:'ca'
    }

this.hobbies= ['dance', 'pets', 'movies'];

this.postservice.getPosts().subscribe( posts=> {
this.posts = posts;
})

}//end of constructor

addHobby(str){
this.hobbies.push(str);

}

updateShowHobbies(){
this.showHobbies = !this.showHobbies;
}

removeHobby(hobby){
var pos = this.hobbies.indexOf(hobby);
this.hobbies.splice(pos,1);
}

}
    

interface address{
city:string;
state:string;
street: string;
}
interface Post{
id:number;
title:string;
body:string;
}