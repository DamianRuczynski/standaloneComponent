import { Component } from '@angular/core';
import { menuList } from './menuList';
import { MatIconModule } from '@angular/material/icon';
import { MenuItemComponent } from '../../shared/menu-item/menu-item.component';

@Component({
  selector: 'mdr-routes',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss',
})
export class RoutesComponent {
  public menuList = menuList;
}
