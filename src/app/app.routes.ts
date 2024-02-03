import { Routes } from '@angular/router';
import { KnowledgeBaseComponent } from './routes/knowledge-base/knowledge-base.component';
import { authGuard } from './core/guards/auth.guard';
import { CardComponent } from './shared/card/card.component';
import { DeveloperInfoComponent } from './shared/developer-info/developer-info.component';

export const routes: Routes = [
  {
    path: 'knowledge-base',
    component: KnowledgeBaseComponent,
    canActivate: [authGuard],
  },
  {
    path: 'info',
    component: DeveloperInfoComponent,
    canActivate: [authGuard],
  },
];
