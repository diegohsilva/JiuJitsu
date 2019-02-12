import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
        })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
