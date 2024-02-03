import { Component } from '@angular/core';
import { RoutesComponent } from './routes/routes.component';

@Component({
  selector: 'mdr-menu',
  standalone: true,
  imports: [RoutesComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
