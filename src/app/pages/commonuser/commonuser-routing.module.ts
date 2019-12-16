import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CommonuserComponent} from './commonuser.component';

const routes: Routes = [{
    path: '',
    component: CommonuserComponent,
    children: [
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        },
    ],
}];
@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forChild(routes),
    ]
})
export class CommonuserRoutingModule {
}
