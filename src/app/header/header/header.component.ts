import { Component } from '@angular/core';
import { SearchboxComponent } from '../searchbox/searchbox.component';

@Component({
  selector: 'mdr-header',
  standalone: true,
  imports: [SearchboxComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
