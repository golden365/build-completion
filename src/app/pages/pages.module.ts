import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {
    _MatMenuDirectivesModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule,
    MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatNativeDateModule, MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {HowitworksComponent} from './howitworks/howitworks.component';
import {LoginComponent} from './login/login.component';
import {Dialog, RegisterComponent} from './register/register.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MDBBootstrapModule, ModalModule} from 'angular-bootstrap-md';
import { CommonuserComponent } from './commonuser/commonuser.component';
import { DashboardComponent } from './commonuser/dashboard/dashboard.component';
import { BookingMessageComponent } from './commonuser/booking-message/booking-message.component';
import { SearchComponent } from './commonuser/search/search.component';
import { SearchsComponent } from './searchs/searchs.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md';
import { StickyHeaderModule, NavbarModule } from 'angular-bootstrap-md';
import { RegisterServiceComponent } from './register-service/register-service.component';
import { UsersComponent } from './users/users.component';
import {AgmCoreModule} from '@agm/core';
import {AdminModule} from '../admin/admin.module';
@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        HowitworksComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        CommonuserComponent,
        DashboardComponent,
        BookingMessageComponent,
        SearchComponent,
        SearchsComponent,
        Dialog,
        RegisterServiceComponent,
        UsersComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        SlimLoadingBarModule,
        ReactiveFormsModule,
        RouterModule,
        MatSidenavModule,
        MatButtonToggleModule,
        MDBBootstrapModule,
        FormsModule,
        AutocompleteLibModule,
        CheckboxModule,
        WavesModule,
        ButtonsModule,
        InputsModule,
        IconsModule,
        CardsModule,
        MatSelectModule,
        StickyHeaderModule,
        NavbarModule,
        ModalModule,
        MatDialogModule,
        AgmCoreModule,
        MatAutocompleteModule,
        MatInputModule,
        MatCheckboxModule,
        MatDatepickerModule, MatInputModule, MatNativeDateModule, MatRadioModule, _MatMenuDirectivesModule, MatMenuModule, AdminModule,
    ],
    entryComponents: [RegisterComponent, Dialog],
    bootstrap: [RegisterComponent],
})
export class PagesModule {
}
