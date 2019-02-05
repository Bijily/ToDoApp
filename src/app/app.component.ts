import {Component} from '@angular/core';
import {TodoDataService} from './todo-data.service';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  providers: [TodoDataService]
})

export class AppComponent{

constructor(private _todataservice: TodoDataService){

}

  Title = "From AppModule";
  UserName = this._todataservice.someMethod();
}
