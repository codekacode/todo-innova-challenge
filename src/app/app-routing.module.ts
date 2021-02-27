import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBoardsComponent} from './pages/detail-boards/detail-boards.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: "", redirectTo:"board", pathMatch:"full"},
  {path: "boards", component:HomeComponent},
  {path: "board/:id" , component:DetailBoardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
