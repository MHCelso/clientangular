"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var register_component_1 = require('./register.component');
var default_component_1 = require('./default.component');
var appRoutes = [
    { path: 'index', component: default_component_1.DefaultComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map