import { Routes } from '@angular/router';
import { FormContact } from './pages/form-contact/form-contact';
import { ListContacts } from './pages/list-contacts/list-contacts';

export const routes: Routes = [
    {
        path: 'formulario',
        component: FormContact
    },
    {
        path: 'lista-contatos',
        component: ListContacts
    },
    {
        path: '',
        redirectTo: '/lista-contatos',
        pathMatch: 'full'
    }
];
