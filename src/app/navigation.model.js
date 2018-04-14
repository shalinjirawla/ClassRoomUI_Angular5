"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FuseNavigation = (function () {
    function FuseNavigation() {
        this.items = [
            {
                'title': 'APPS',
                'type': 'subheader'
            },
            {
                'title': 'Sample',
                'type': 'nav-item',
                'icon': 'email',
                'url': '/sample',
                'badge': {
                    'title': 20,
                    'bg': '#F44336',
                    'fg': '#FFFFFF'
                }
            }
        ];
    }
    return FuseNavigation;
}());
exports.FuseNavigation = FuseNavigation;
//# sourceMappingURL=navigation.model.js.map