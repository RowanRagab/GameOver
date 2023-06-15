import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { GameDetailsComponent } from './Components/game-details/game-details.component';
import { AllComponent } from './Components/all/all.component';
import { PlatformComponent } from './Components/platform/platform.component';
import { CategoryComponent } from './Components/category/category.component';
import { authGuard } from './register/auth.guard';
import { SortbyComponent } from './Components/sortby/sortby.component';


const routes: Routes = [
  { path: "", component: HomeComponent, title: 'Game Over' },
  { path: "home", component: HomeComponent, title: 'Game Over' },
  { path: "all", canActivate: [authGuard], component: AllComponent, title: 'All Games' },
  { path: "platform/:plat", canActivate: [authGuard], component: PlatformComponent, title: 'Platform' },
  { path: "sortby/:sortby", canActivate: [authGuard], component: SortbyComponent, title: 'sort By ..' },
  { path: "category/:cat", canActivate: [authGuard], component: CategoryComponent, title: 'Category' },
  { path: "gameDetails/:id", canActivate: [authGuard], component: GameDetailsComponent, title: 'Game Details' },
  { path: "rigester", loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) },
  { path: "**", component: HomeComponent, title: 'Game Over' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
