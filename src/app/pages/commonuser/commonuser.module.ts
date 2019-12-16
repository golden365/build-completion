import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonuserRoutingModule} from './commonuser-routing.module';
import {
    MatButtonModule,
    MatCardModule, MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule, MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {HttpClientModule} from '@angular/common/http';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {PagesModule} from '../pages.module';
import {SidebarModule} from '@syncfusion/ej2-angular-navigations';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        CommonuserRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        RouterModule,
        Ng2SmartTableModule,
        HttpClientModule,
        MDBBootstrapModule,
        PagesModule,
        SidebarModule,
        PerfectScrollbarModule,
        MatMenuModule,
        MatExpansionModule,
        MatTabsModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class CommonuserModule {
}
