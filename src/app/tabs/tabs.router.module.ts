import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// This part manages the routes/ the connections between the sites
// if you called the page tabs then there are three options and each path is connected with one page

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

      // the first tab is the CV tab, therefore the path is empty and it's redirected to tabs/cv
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
