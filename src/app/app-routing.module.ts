import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { OpenviduVideoAsistenciaComponent } from './openvidu-video-asistencia/openvidu-video-asistencia.component';
import { VideoAsistenciaComponent } from './video-asistencia/video-asistencia.component';
const routes: Routes = [
  
  { path: '', redirectTo: 'VideoAsistencia', pathMatch: 'full' },
  

  { path: 'Login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'Home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'VideoAsistencia', component: VideoAsistenciaComponent} 
  //{ path: 'OpenviduVideoAsistenciaComponent', loadChildren: './OpenviduVideoAsistenciaComponent#OpenviduVideoAsistenciaComponent' },  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
