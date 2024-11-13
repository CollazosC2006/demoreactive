import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';

export const routes: Routes = [
    {
        path:'',component:DashboardComponent
    },
    {
        path:'Manage',component:ManageComponent
    }

];
