import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mdr-searchbox',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.scss',
})
export class SearchboxComponent {}
