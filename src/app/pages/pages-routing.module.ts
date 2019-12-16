import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HowitworksComponent} from './howitworks/howitworks.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PagesComponent} from './pages.component';
import {SearchsComponent} from './searchs/searchs.component';
import {RegisterServiceComponent} from './register-service/register-service.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'howitworks',
                component: HowitworksComponent,
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'register-service',
                component: RegisterServiceComponent
            },
            {
                path: 'searchs',
                component: SearchsComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class PagesRoutingModule {
}
