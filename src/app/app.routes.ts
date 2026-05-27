import { Routes } from '@angular/router';
import { Home } from './modules/home/home';
import { Feedback } from './modules/feedback/feedback';
import { Admin } from './modules/admin/admin';

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
