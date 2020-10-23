import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './music/music.component';

const appRoutes: Routes = [
    {
        path: 'music',
        component: MusicComponent
    },
];


@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})

export class AppRouting {
}