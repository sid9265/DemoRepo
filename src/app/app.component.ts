import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  
  names: string | undefined;
  age: number | undefined;
  
  
  uName: string | undefined;
  uAge: number | undefined; 

  assignVal() {
    this.uName = this.names;
    this.uAge=this.age;
}

 clear() {
  this.names = undefined;
  this.age = undefined;

  this.uName = this.names;
  this.uAge=this.age;
}
    
}

 