import { Component } from '@angular/core';
import { menuList } from './menuList';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mdr-routes',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss',
})
export class RoutesComponent {
  public menuList = menuList;
}
