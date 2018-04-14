export class FuseNavigation
{
    public items: any[];

    constructor()
    {
        this.items = [
            {
                'title': 'APPS',
                'type' : 'subheader'
            },
            {
                'title': 'Classes',
                'type' : 'nav-item',
                'icon' : 'email',
                'url'  : '/sample',
                'badge': {
                    'title': 3,
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'title': 'Calendar',
                'type' : 'nav-item',
                'icon' : 'perm_contact_calendar',
                'url'  : '/registration'
            },{
                'title': 'Login',
                'type' : 'nav-item',
                'icon' : 'perm_contact_calendar',
                'url'  : '/login'
            }
        ];
    }
}
