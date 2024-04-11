import { Component } from '@angular/core';
import { MatAutocomplete, MatOption } from '@angular/material/autocomplete';
import { MatLine } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatListOption, MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormField,MatAutocomplete,MatOption,MatSelectionList,MatDivider,MatListOption,MatIcon,MatLine],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
