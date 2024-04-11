import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormField,MatLabel,MatError,ReactiveFormsModule,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  

}
