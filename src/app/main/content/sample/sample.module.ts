import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { FuseSampleComponent } from './sample.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FuseLoginComponent } from '../../Login/Login.component';
const routes = [
    {
        path     : 'sample',
        component: FuseSampleComponent
    },
    {
        path : 'registration',
        component : RegistrationComponent
    },
    {
        path : 'login',
        component :  FuseLoginComponent
    }
];

@NgModule({
    declarations: [
        FuseSampleComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    exports     : [
        FuseSampleComponent
    ]
})

export class FuseSampleModule
{
}
