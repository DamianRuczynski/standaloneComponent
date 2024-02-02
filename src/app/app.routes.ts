import { Routes } from '@angular/router';
import { KnowledgeBaseComponent } from './routes/knowledge-base/knowledge-base.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: KnowledgeBaseComponent,
    canActivate: [authGuard],
  },
];
