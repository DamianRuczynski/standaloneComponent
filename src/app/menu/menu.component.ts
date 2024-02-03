import { Component } from '@angular/core';
import { RoutesComponent } from './routes/routes.component';
import { OthersComponent } from './others/others.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'mdr-menu',
  standalone: true,
  imports: [RoutesComponent, OthersComponent, SettingsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
