import { Component } from '@angular/core';
import { MenuItemComponent } from '../../shared/menu-item/menu-item.component';
import { othersList } from './others';

@Component({
  selector: 'mdr-others',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './others.component.html',
  styleUrl: './others.component.scss',
})
export class OthersComponent {
  public othersList = othersList;
}
