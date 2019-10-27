import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cv',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cv/cv.module').then(m => m.CVPageModule)
          }
        ]
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../projects/projects.module').then(m => m.ProjectsPageModule)
          }
        ]
      },
      {
        path: 'extras',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../extras/extras.module').then(m => m.ExtrasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/cv',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cv',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
