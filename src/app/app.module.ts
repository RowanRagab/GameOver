import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AsideComponent } from './Components/aside/aside.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RecommendComponent } from './Components/home/recommend/recommend.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { MostPlayComponent } from './Components/home/most-play/most-play.component';
import { GameDetailsComponent } from './Components/game-details/game-details.component';
import { AllComponent } from './Components/all/all.component';
import { PlatformComponent } from './Components/platform/platform.component';
import { CategoryComponent } from './Components/category/category.component';
import { SearchPipe } from './pipes/search.pipe'
import { FormsModule } from '@angular/forms';
import { LoadingPageComponent } from './Components/loading-page/loading-page.component';
import { AboutGamePipe } from './pipes/about-game.pipe';
import { ToastrModule } from 'ngx-toastr';
import { SortbyComponent } from './Components/sortby/sortby.component';
import { UserDataComponent } from './register/user-data/user-data.component';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    NavbarComponent,
    RecommendComponent,
    MostPlayComponent,
    GameDetailsComponent,
    AllComponent,
    PlatformComponent,
    CategoryComponent,
    SearchPipe,
    LoadingPageComponent,
    AboutGamePipe,
    SortbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, RegisterModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
