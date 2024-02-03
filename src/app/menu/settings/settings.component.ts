import { Component } from '@angular/core';
import { MenuItemComponent } from '../../shared/menu-item/menu-item.component';
import { settingsList } from './settingsLIst';

@Component({
  selector: 'mdr-settings',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  public settings = settingsList;
}
