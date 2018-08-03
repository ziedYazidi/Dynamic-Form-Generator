import {Field} from './field';
import {User} from './user';
import {first} from 'rxjs/operators';

export class UserFieldAdapter{

  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  makeFit(fields: any[]){
    let tab: Field[] = [];
    for (let element in this.user){
      if(element === "role" || element == "dateCode" || element == "photo"){
        break;
      }
      let field: Field = {key: element, value:this.user[element], class: "form-control", option: "required"}
      tab.push(field)
    }
    fields.push(tab);
  }
}
