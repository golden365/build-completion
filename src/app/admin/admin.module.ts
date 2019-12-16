import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {
    MatAccordion, MatAccordionDisplayMode, MatAccordionTogglePosition,
    MatButtonModule,
    MatCardModule, MatExpansionModule, MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatMenuModule, MatSelectModule,
    MatSidenavModule, MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {AdminComponent} from './admin.component';
import {RouterModule} from '@angular/router';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { HttpClientModule} from '@angular/common/http';
import {TableService} from './users/table.service';
import { CustomersComponent } from './customers/customers.component';
import {ChartsModule, MDBBootstrapModule} from 'angular-bootstrap-md';
import {SidebarModule} from '@syncfusion/ej2-angular-navigations';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { AdministratorsComponent } from './administrators/administrators.component';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import { UserloginsComponent } from './userlogins/userlogins.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BlockedusersComponent } from './blockedusers/blockedusers.component';
import { EditComponent } from './edit/edit.component';
import { RemoveComponent } from './remove/remove.component';
import { ViewComponent } from './view/view.component';
import { LockComponent } from './lock/lock.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingViewsComponent } from './listing-views/listing-views.component';
import { ListingFavoritesComponent } from './listing-favorites/listing-favorites.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MessagesComponent } from './messages/messages.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { PaymentGatewaysComponent } from './payment-gateways/payment-gateways.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WithdrawRequestsComponent } from './withdraw-requests/withdraw-requests.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { RequestsComponent } from './requests/requests.component';
import { ResponsesComponent } from './responses/responses.component';
import { TopicsComponent } from './topics/topics.component';
import { QuestionsComponent } from './questions/questions.component';
import { SiteSettingsComponent } from './site-settings/site-settings.component';
import { SiteSettingsEditComponent } from './site-settings-edit/site-settings-edit.component';
import { ProvidersComponent } from './providers/providers.component';
import { ServiceLocationsComponent } from './service-locations/service-locations.component';
import { PluginsComponent } from './plugins/plugins.component';
import { ButtonsModule, WavesModule, DropdownModule } from 'angular-bootstrap-md';
import {BsDropdownModule} from 'ngx-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { ServicesComponent } from './services/services.component';
import { AccountcloseComponent } from './accountclose/accountclose.component';
import { CancellationspoliciesComponent } from './cancellationspolicies/cancellationspolicies.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CitiesComponent } from './cities/cities.component';
import { StatesComponent } from './states/states.component';
import { CountriesComponent } from './countries/countries.component';
import { LanguagesComponent } from './languages/languages.component';
import { EmailtemplateComponent } from './emailtemplate/emailtemplate.component';
import { TranslationsComponent } from './translations/translations.component';
import { PagesComponent } from './pages/pages.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        UsersComponent,
        CustomersComponent,
        AdministratorsComponent,
        AddnewuserComponent,
        UserloginsComponent,
        ContactsComponent,
        BlockedusersComponent,
        EditComponent,
        RemoveComponent,
        ViewComponent,
        LockComponent,
        ListComponent,
        ListingsComponent,
        ListingViewsComponent,
        ListingFavoritesComponent,
        BookingsComponent,
        MessagesComponent,
        ReviewsComponent,
        CreditCardsComponent,
        PaymentGatewaysComponent,
        TransactionsComponent,
        WithdrawRequestsComponent,
        MoneyTransferComponent,
        RequestsComponent,
        ResponsesComponent,
        TopicsComponent,
        QuestionsComponent,
        SiteSettingsComponent,
        SiteSettingsEditComponent,
        ProvidersComponent,
        ServiceLocationsComponent,
        PluginsComponent,
        CategoriesComponent,
        ServicesComponent,
        AccountcloseComponent,
        CancellationspoliciesComponent,
        FaqsComponent,
        CitiesComponent,
        StatesComponent,
        CountriesComponent,
        LanguagesComponent,
        EmailtemplateComponent,
        TranslationsComponent,
        PagesComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
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
        SidebarModule,
        PerfectScrollbarModule,
        MatMenuModule,
        MatExpansionModule,
        MatTabsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        BsDropdownModule,
        ButtonsModule,
        DropdownModule.forRoot(),
        WavesModule,
        AgmCoreModule,
        ChartsModule,
    ],
    providers: [TableService],
    exports: [
        ListingFavoritesComponent
    ]
})
export class AdminModule {
}
