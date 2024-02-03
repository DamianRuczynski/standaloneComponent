import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '../../menu/routes/menuList';

@Component({
  selector: 'mdr-menu-item',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() item: MenuItem = {} as MenuItem;
}
