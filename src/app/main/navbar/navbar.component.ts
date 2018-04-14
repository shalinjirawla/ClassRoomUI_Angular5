import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FuseMatchMedia } from '../../core/services/match-media.service';
import { FuseNavbarService } from './navbar.service';
import { ObservableMedia } from '@angular/flex-layout';
import { FuseMainComponent } from '../main.component';
import { NavigationEnd, Router } from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { FuseNavigationService } from '../../core/components/navigation/navigation.service';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
    selector     : 'fuse-navbar',
    templateUrl  : './navbar.component.html',
    styleUrls    : ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('rotatedState', [
          state('default', style({ transform: 'rotate(0)' })),
          state('rotated', style({ transform: 'rotate(-180deg)' })),
          transition('rotated => default', animate('1500ms ease-out')),
          transition('default => rotated', animate('400ms ease-in'))
      ])
  ]
})
export class FuseNavbarComponent implements OnInit, OnDestroy
{
    @HostBinding('class.close') isClosed: boolean;
    @HostBinding('class.folded') isFoldedActive: boolean;
    @HostBinding('class.folded-open') isFoldedOpen: boolean;
    @HostBinding('class.initialized') initialized: boolean;
    @Input('folded') foldedByDefault = false;
    @ViewChild(PerfectScrollbarDirective) perfectScrollbarDirective;

    state: string = 'default';

    matchMediaWatcher: Subscription;

    constructor(
        private fuseMainComponentEl: FuseMainComponent,
        private fuseMatchMedia: FuseMatchMedia,
        private fuseNavigationService: FuseNavigationService,
        private navBarService: FuseNavbarService,
        public media: ObservableMedia,
        private router: Router
    )
    {
        navBarService.setNavBar(this);

        this.fuseNavigationService.onNavCollapseToggled.subscribe(() => {

            setTimeout(() => {
                this.perfectScrollbarDirective.update();
            }, 310);
        });

        this.matchMediaWatcher =
            this.fuseMatchMedia.onMediaChange
                .subscribe((mediaStep) => {
                    setTimeout(() => {

                        if ( this.media.isActive('lt-lg') )
                        {
                            this.closeBar();
                            this.deActivateFolded();
                        }
                        else
                        {
                            this.openBar();
                        }
                    });
                });

        router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationEnd )
                {
                    if ( this.media.isActive('lt-lg') )
                    {
                        setTimeout(() => {
                            this.closeBar();
                        });
                    }
                }
            }
        );
    }

    ngOnInit()
    {
        this.isClosed = false;
        this.isFoldedActive = this.foldedByDefault;
        this.isFoldedOpen = false;
        this.initialized = false;
        this.updateCssClasses();

        setTimeout(() => {
            this.initialized = true;
        });

        if ( this.media.isActive('lt-lg') )
        {
            this.closeBar();
            this.deActivateFolded();
        }
        else
        {
            if ( !this.foldedByDefault )
            {
                this.deActivateFolded();
            }
            else
            {
                this.activateFolded();
            }
        }
    }

    openBar()
    {
        this.activateFolded();
    }

    closeBar()
    {
        this.deActivateFolded();
    }

    toggleBar()
    {
        if ( this.isClosed )
        {
            this.openBar();
        }
        else
        {
            this.closeBar();
        }
    }

    toggleFold()
    {
        if ( !this.isFoldedActive )
        {
            this.activateFolded();
        }
        else
        {
            this.deActivateFolded();
        }
    }

    activateFolded()
    {
        this.isFoldedActive = true;
        this.fuseMainComponentEl.addClass('fuse-nav-bar-folded');
        this.isFoldedOpen = false;
    }

    deActivateFolded()
    {
        this.isFoldedActive = false;
        this.fuseMainComponentEl.removeClass('fuse-nav-bar-folded');
        this.isFoldedOpen = false;
    }

    @HostListener('mouseenter')
    onMouseEnter()
    {
        this.isFoldedOpen = true;
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }

    @HostListener('mouseleave')
    onMouseLeave()
    {
        this.isFoldedOpen = false;
    }

    updateCssClasses()
    {
        if ( this.isClosed )
        {
            this.fuseMainComponentEl.addClass('fuse-nav-bar-opened');
            this.fuseMainComponentEl.removeClass('fuse-nav-bar-closed');
        }
        else
        {
            this.fuseMainComponentEl.addClass('fuse-nav-bar-closed');
            this.fuseMainComponentEl.removeClass('fuse-nav-bar-opened');
        }
    }

    ngOnDestroy()
    {
        this.matchMediaWatcher.unsubscribe();
    }
}
