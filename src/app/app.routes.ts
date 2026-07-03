import { Routes } from '@angular/router';
import { Feedback } from './modules/feedback/feedback';
import { Admin } from './modules/admin/admin';
import { Home } from './modules/home/components/home/home';
import { Search } from './modules/search/components/search/search';
import { SearchResponseViewer } from './modules/search/components/search-response-viewer/search-response-viewer';
import { Monitoring } from './modules/monitoring/components/monitoring/monitoring';

export const routes: Routes = [
    {
        path:"",component: Home
    },
    {
        path:"feedback",component: Feedback
    },
    {
        path:"admin",component: Admin
    },
    {
        path:"search",component: Search
    },
    {
        path:"response",component: SearchResponseViewer
    },
    {
        path:"monitoring",component: Monitoring
    }
];
