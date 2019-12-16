import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {AdminComponent} from './admin.component';
import {CustomersComponent} from './customers/customers.component';
import {AdministratorsComponent} from './administrators/administrators.component';
import {AddnewuserComponent} from './addnewuser/addnewuser.component';
import {UserloginsComponent} from './userlogins/userlogins.component';
import {ContactsComponent} from './contacts/contacts.component';
import {BlockedusersComponent} from './blockedusers/blockedusers.component';
import {EditComponent} from './edit/edit.component';
import {RemoveComponent} from './remove/remove.component';
import {ViewComponent} from './view/view.component';
import {LockComponent} from './lock/lock.component';
import {ListComponent} from './list/list.component';
import {ListingsComponent} from './listings/listings.component';
import {ListingViewsComponent} from './listing-views/listing-views.component';
import {ListingFavoritesComponent} from './listing-favorites/listing-favorites.component';
import {BookingsComponent} from './bookings/bookings.component';
import {MessagesComponent} from './messages/messages.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {CreditCardsComponent} from './credit-cards/credit-cards.component';
import {PaymentGatewaysComponent} from './payment-gateways/payment-gateways.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {MoneyTransferComponent} from './money-transfer/money-transfer.component';
import {WithdrawRequestsComponent} from './withdraw-requests/withdraw-requests.component';
import {RequestsComponent} from './requests/requests.component';
import {ResponsesComponent} from './responses/responses.component';
import {TopicsComponent} from './topics/topics.component';
import {QuestionsComponent} from './questions/questions.component';
import {SiteSettingsComponent} from './site-settings/site-settings.component';
import {ProvidersComponent} from './providers/providers.component';
import {ServiceLocationsComponent} from './service-locations/service-locations.component';
import {PluginsComponent} from './plugins/plugins.component';
import {CategoriesComponent} from './categories/categories.component';
import {ServicesComponent} from './services/services.component';
import {AccountcloseComponent} from './accountclose/accountclose.component';
import {CancellationspoliciesComponent} from './cancellationspolicies/cancellationspolicies.component';
import {FaqsComponent} from './faqs/faqs.component';
import {CitiesComponent} from './cities/cities.component';
import {StatesComponent} from './states/states.component';
import {CountriesComponent} from './countries/countries.component';
import {LanguagesComponent} from './languages/languages.component';
import {EmailtemplateComponent} from './emailtemplate/emailtemplate.component';
import {TranslationsComponent} from './translations/translations.component';
import {PagesComponent} from './pages/pages.component';

const routes: Routes = [{
    path: '',
    component: AdminComponent,
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
        {
            path: 'users',
            component: UsersComponent,
        },
        {
            path: 'customers',
            component: CustomersComponent,
        },
        {
            path: 'administrators',
            component: AdministratorsComponent,
        },
        {
            path: 'addnewuser',
            component: AddnewuserComponent,
        },
        {
            path: 'userlogins',
            component: UserloginsComponent,
        },
        {
            path: 'contacts',
            component: ContactsComponent,
        },
        {
            path: 'blockedusers',
            component: BlockedusersComponent,
        },
        {
            path: 'edit',
            component: EditComponent,
        },
        {
            path: 'remove',
            component: RemoveComponent,
        },
        {
            path: 'view',
            component: ViewComponent,
        },
        {
            path: 'lock',
            component: LockComponent,
        },
        {
            path: 'list',
            component: ListComponent,
        },
        {
            path: 'listings',
            component: ListingsComponent,
        },
        {
            path: 'listing-views',
            component: ListingViewsComponent,
        },
        {
            path: 'listing-favorites',
            component: ListingFavoritesComponent,
        },
        {
            path: 'bookings',
            component: BookingsComponent,
        },
        {
            path: 'messages',
            component: MessagesComponent,
        },
        {
            path: 'reviews',
            component: ReviewsComponent,
        },
        {
            path: 'credit-cards',
            component: CreditCardsComponent,
        },
        {
            path: 'payment-gateways',
            component: PaymentGatewaysComponent,
        },
        {
            path: 'transactions',
            component: TransactionsComponent,
        },
        {
            path: 'withdraw_requests',
            component: WithdrawRequestsComponent,
        },
        {
            path: 'money-transfer',
            component: MoneyTransferComponent,
        },
        {
            path: 'requests',
            component: RequestsComponent,
        },
        {
            path: 'responses',
            component: ResponsesComponent,
        },
        {
            path: 'topics',
            component: TopicsComponent,
        },
        {
            path: 'questions',
            component: QuestionsComponent,
        },
        {
            path: 'site-settings',
            component: SiteSettingsComponent,
        },
        {
            path: 'providers',
            component: ProvidersComponent,
        },
        {
            path: 'service-locations',
            component: ServiceLocationsComponent,
        },
        {
            path: 'plugins',
            component: PluginsComponent,
        },
        {
            path: 'categories',
            component: CategoriesComponent,
        },
        {
            path: 'services',
            component: ServicesComponent,
        },
        {
            path: 'accountclose',
            component: AccountcloseComponent,
        },
        {
            path: 'cancellationpolicies',
            component: CancellationspoliciesComponent,
        },
        {
            path: 'faqs',
            component: FaqsComponent,
        },
        {
            path: 'cities',
            component: CitiesComponent,
        },
        {
            path: 'states',
            component: StatesComponent,
        },
        {
            path: 'countries',
            component: CountriesComponent,
        },
        {
            path: 'languages',
            component: LanguagesComponent,
        },
        {
            path: 'emailtemplate',
            component: EmailtemplateComponent,
        },
        {
            path: 'translations',
            component: TranslationsComponent,
        },
        {
            path: 'pages',
            component: PagesComponent,
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
export class AdminRoutingModule {
}
