import { Component, Input } from '@angular/core';
import { Info } from '../../cards';

@Component({
  selector: 'mdr-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  @Input() data: Info = {} as Info;
}
