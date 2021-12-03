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
import { GameDetailsComponent } from './component/game-details/game-details.component';
import { ProcessorDetailsComponent } from './component/processor-details/processor-details.component';
import { GraphicsCardListComponent } from './component/graphics-card-list/graphics-card-list.component';
import { GraphicsCardDetailsComponent } from './component/graphics-card-details/graphics-card-details.component';
import { MainMenuComponent } from './component/main-menu/main-menu.component';
import { InformationsComponent } from './component/informations/informations.component';
import { GameRunCheckerComponent } from './component/game-run-checker/game-run-checker.component';
import { GameRunResoultComponent } from './component/game-run-resoult/game-run-resoult.component';
import { AdminPanelComponent } from './component/admin-panel/admin-panel.component';
import { CreateGameComponent } from './component/create-game/create-game.component';

const routes: Routes = [
  {path: 'admin/create-game', component: CreateGameComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: 'pc-game-run-test/:gameId/:processorId/:cardId/:ram', component: GameRunResoultComponent},
  {path: 'pc-game-run-test', component: GameRunCheckerComponent},
  {path: 'games/:id', component: GameDetailsComponent},
  {path: 'processors/:id', component: ProcessorDetailsComponent},
  {path: 'graphics-cards/:id', component: GraphicsCardDetailsComponent},
  {path: 'games', component: GameListComponent},
  {path: 'processors', component: ProcessorListComponent},
  {path: 'graphics-cards', component: GraphicsCardListComponent},
  {path: 'informations', component: InformationsComponent},
  {path: '', component: MainMenuComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'},

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
    ProcessorDetailsComponent,
    GraphicsCardListComponent,
    GraphicsCardDetailsComponent,
    MainMenuComponent,
    InformationsComponent,
    GameRunCheckerComponent,
    GameRunResoultComponent,
    AdminPanelComponent,
    CreateGameComponent
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

