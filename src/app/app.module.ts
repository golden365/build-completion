import { NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {BrowserModule} from '@angular/platform-browser';
import {AdminModule} from './admin/admin.module';
import {PagesModule} from './pages/pages.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {AgmCoreModule, DataLayerManager, GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SlimLoadingBarModule,
        PagesModule,
        AdminModule,
        BrowserAnimationsModule,
        FormsModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyAzSnXXXXXXXXXXXXXXXXXSZGGWU'}),
        BsDropdownModule.forRoot(),
    ],
    exports: [TooltipModule, ModalModule,
    ],
    providers: [
        GoogleMapsAPIWrapper,
        DataLayerManager
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
