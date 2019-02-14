import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { ProfessorComponent } from './pages/professor/professor.component';

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
                path: 'aluno',
                component: AlunoComponent
            },
            {
                path: 'professor',
                component: ProfessorComponent
            }

        ]
    },


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
