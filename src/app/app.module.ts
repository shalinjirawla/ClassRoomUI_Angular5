import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';

import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FuseMainModule } from './main/main.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { RegistrationService } from './service/reg.service';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        PerfectScrollbarModule,
        FuseMainModule,
        FuseSampleModule,
        ReactiveFormsModule
    ],
    providers   : [
        FuseSplashScreenService,
        FuseConfigService,
        RegistrationService
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
