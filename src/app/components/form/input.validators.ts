import {AbstractControl, ValidationErrors, Validators} from '@angular/forms';

export class InputValidators{
  static validate(validationArg: string): ValidationErrors | null {
    var validationArgs: string[] = validationArg.split(" ");
    switch (validationArgs[0]){
      case "required":
        return Validators.required;

      case "email":
        return Validators.email;

      case "minlength":
        return Validators.minLength(parseInt(validationArg[1]));
    }
  }
}
