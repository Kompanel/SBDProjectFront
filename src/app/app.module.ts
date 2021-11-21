import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { GameListComponent } from './component/game-list/game-list.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GameService} from "./service/game.service";
import { ProcessorListComponent } from './component/processor-list/processor-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { ProcessorDetailsComponent } from './processor-details/processor-details.component';

const routes: Routes = [
  {path: 'games/:id', component: GameDetailsComponent},
  {path: 'processors/:id', component: ProcessorDetailsComponent},
  {path: 'games', component: GameListComponent},
  {path: 'processors', component: ProcessorListComponent},
  {path: '', redirectTo: '/games', pathMatch: 'full'},
  {path: '**', redirectTo: '/games', pathMatch: 'full'},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    GameListComponent,
    ProcessorListComponent,
    GameDetailsComponent,
    ProcessorDetailsComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

