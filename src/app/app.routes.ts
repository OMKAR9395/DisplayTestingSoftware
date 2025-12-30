import { Routes } from '@angular/router';
import { Dashboard } from '../pages/dashboard/dashboard';
import { CommandPanel } from '../pages/command-panel/command-panel';
import { CommandQr } from '../pages/command-qr/command-qr';

export const routes: Routes = [
     {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '',
        redirectTo: 'command-panel',
        pathMatch: 'full'
      },
      {
        path: 'command-panel',
        component: CommandPanel
      },
      {
        path: 'command-qr',
        component: CommandQr
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];
