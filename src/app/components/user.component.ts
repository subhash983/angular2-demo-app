import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl:'user.component.html' ,
  providers: [PostsService]
})

export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Subhash Jha';
    this.email = 'test@gmail1.com';
    this.address = {
      street: 'Munnekolala',
      city: 'Bangalore',
      state: 'Karnataka'
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
