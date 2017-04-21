import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{
constructor(private http:Http){
}

getPosts(){
 return this.http.get("https://jsonplaceholder.typicode.com/posts")
 .map((response:Response )=> response.json())
}


}//end of class

