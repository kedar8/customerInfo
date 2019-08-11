import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { LoginComponent } from "./login.component";
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
]
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        AmexioWidgetModule

    ],
    providers: [],

})
export class LoginModule { }
