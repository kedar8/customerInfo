import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, } from '@angular/core';

import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            {
                path: 'dashboard', component: DashboardComponent,
            },
            {
                path: 'customer', component: CustomerComponent,
                children: [

                    {
                        path: 'options', component: OptionsComponent,
                    },
                    {
                        path: 'order', component: OrderComponent,
                    }


                ]
            }

        ]
    },
]



@NgModule({
    declarations: [
        HomeComponent,
        DashboardComponent,
        CustomerComponent,
        OrderComponent,
        OptionsComponent,

    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        AmexioWidgetModule

    ],
    providers: [],

})

export class HomeModule { }
