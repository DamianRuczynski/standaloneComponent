import { Component, Input } from '@angular/core';
import { Card } from '../../cards';

@Component({
  selector: 'mdr-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() data: Card = {} as Card;
}
