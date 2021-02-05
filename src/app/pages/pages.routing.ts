import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const ROUTES: Routes = [
    {
        path:'dashboard', 
        component:PagesComponent,
        children:[
          {path: '', component: DashboardComponent, data : {title:'Dashboard'} },
          {path: 'progress', component: ProgressComponent, data : {title:'Progress Bard'}},
          {path: 'chart', component: Grafica1Component,  data : {title:'Charts'}},
          {path: 'account-settings', component: AccountSettingsComponent,  data : { title:'Acounts Settings'}},
          {path: 'promesas', component: PromesasComponent,  data : {title:'Promises'}},
          {path: 'rxjs', component: RxjsComponent,  data : {title:'RXJS'}},

        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
