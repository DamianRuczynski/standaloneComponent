import { Component } from '@angular/core';
import { SearchboxComponent } from '../../header/searchbox/searchbox.component';
import { Card, Info, cards, info } from './cards';
import { CardComponent } from './components/card/card.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-knowledge-base',
  standalone: true,
  imports: [SearchboxComponent, CardComponent, InfoComponent, FooterComponent],
  templateUrl: './knowledge-base.component.html',
  styleUrl: './knowledge-base.component.scss',
})
export class KnowledgeBaseComponent {
  public cards: Card[] = cards;
  public infos: Info[] = info;
}
