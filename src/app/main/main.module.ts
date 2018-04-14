import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../core/modules/shared.module';

import { FuseMainComponent } from './main.component';
import { FuseContentComponent } from './content/content.component';
import { FuseFooterComponent } from './footer/footer.component';
import { FuseNavbarComponent } from './navbar/navbar.component';
import { FuseToolbarComponent } from './toolbar/toolbar.component';
import { FuseNavigationModule } from '../core/components/navigation/navigation.module';
import { FuseNavbarToggleDirective } from './navbar/navbar-toggle.directive';
import { FuseQuickPanelComponent } from './quick-panel/quick-panel.component';
import { FuseThemeOptionsComponent } from '../core/components/theme-options/theme-options.component';
import { FuseShortcutsModule } from '../core/components/shortcuts/shortcuts.module';
import { FuseSearchBarModule } from '../core/components/search-bar/search-bar.module';
import { RegistrationComponent } from './content/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FuseLoginComponent } from './Login/Login.component';

@NgModule({
    declarations: [
        FuseContentComponent,
        FuseFooterComponent,
        FuseMainComponent,
        FuseNavbarComponent,
        FuseToolbarComponent,
        FuseNavbarToggleDirective,
        FuseThemeOptionsComponent,
        FuseQuickPanelComponent,
        RegistrationComponent,
        FuseLoginComponent
    ],
    imports     : [
        SharedModule,
        RouterModule,
        FuseNavigationModule,
        FuseShortcutsModule,
        FuseSearchBarModule,
        ReactiveFormsModule
    ],
    exports     : [
        FuseMainComponent
    ],
})

export class FuseMainModule
{
}
