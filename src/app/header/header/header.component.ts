import { Component } from '@angular/core';
import { SearchboxComponent } from '../searchbox/searchbox.component';
import { ActionsComponent } from '../actions/actions.component';

@Component({
  selector: 'mdr-header',
  standalone: true,
  imports: [SearchboxComponent, ActionsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
