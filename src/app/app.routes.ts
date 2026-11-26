import { Routes } from '@angular/router';
import { FormContact } from './pages/form-contact/form-contact';
import { ListContacts } from './pages/list-contacts/list-contacts';
import { FormProfile } from './pages/form-profile/form-profile';

export const routes: Routes = [
    {
        path: 'formulario',
        component: FormContact
    },
    {
        path: 'formulario/:id',
        component: FormContact
    },
    {
        path: 'lista-contatos',
        component: ListContacts
    },
    {
        path: 'perfil-contato/:id',
        component: FormProfile
    },
    {
        path: '',
        redirectTo: '/lista-contatos',
        pathMatch: 'full'
    }
];
