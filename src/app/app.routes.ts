import { Routes } from '@angular/router';
import { Feedback } from './modules/feedback/feedback';
import { Admin } from './modules/admin/admin';
import { Home } from './modules/home/components/home/home';

export const routes: Routes = [
    {
        path:"",component: Home
    },
    {
        path:"feedback",component: Feedback
    },
    {
        path:"admin",component: Admin
    }
];
