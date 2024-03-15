// profile.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  profile: any = {};

  submitForm() {
    console.log(this.profile);
  }
}
