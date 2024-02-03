import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '../../menu/routes/menuList';
import { Router } from '@angular/router';

@Component({
  selector: 'mdr-menu-item',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() item: MenuItem = {} as MenuItem;
  // public routerLink = this.item.link ?? '/home'; // the value of the variable is string!

  constructor(private router: Router) {}
  navigateTo(destination: string = 'info') {
    this.router.navigate(['/', destination]);
  }
}
