import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ColorPickerModule } from 'ngx-color-picker';

import { FuseMatSidenavHelperDirective, FuseMatSidenavTogglerDirective } from '../directives/md-sidenav-helper/md-sidenav-helper.directive';
import { FusePipesModule } from '../pipes/pipes.module';
import { FuseConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { FuseCountdownComponent } from '../components/countdown/countdown.component';
import { FuseNavigationService } from '../components/navigation/navigation.service';
import { FuseMatchMedia } from '../services/match-media.service';
import { FuseNavbarService } from '../../main/navbar/navbar.service';
import { FuseMatSidenavHelperService } from '../directives/md-sidenav-helper/md-sidenav-helper.service';
import { FuseHljsComponent } from '../components/hljs/hljs.component';
import { FuseIfOnDomDirective } from '../directives/fuse-if-on-dom/fuse-if-on-dom.directive';
import { FuseMaterialColorPickerComponent } from '../components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations   : [
        FuseMatSidenavHelperDirective,
        FuseMatSidenavTogglerDirective,
        FuseConfirmDialogComponent,
        FuseCountdownComponent,
        FuseHljsComponent,
        FuseIfOnDomDirective,
        FuseMaterialColorPickerComponent
    ],
    imports        : [
        FlexLayoutModule,
        MaterialModule,

        FormsModule,
        FusePipesModule,
        PerfectScrollbarModule,
        ReactiveFormsModule,
        ColorPickerModule,
      
    ],
    exports        : [
        FlexLayoutModule,
        MaterialModule,
      
        FormsModule,
        FuseMatSidenavHelperDirective,
        FuseMatSidenavTogglerDirective,
        FusePipesModule,
        FuseCountdownComponent,
        FuseHljsComponent,
        PerfectScrollbarModule,
        ReactiveFormsModule,
        ColorPickerModule,
      
        FuseIfOnDomDirective,
        FuseMaterialColorPickerComponent
    ],
    entryComponents: [
        FuseConfirmDialogComponent
    ],
    providers      : [
        FuseNavigationService,
        FuseMatchMedia,
        FuseNavbarService,
        FuseMatSidenavHelperService
    ]
})

export class SharedModule
{

}
