import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogModule } from '../blog/blog.module';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ImpressumComponent } from './static/impressum/impressum.component';
import { AppService } from './app.service';
import { DatenschutzComponent } from './static/datenschutz/datenschutz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: ':slug', component: PostDetailComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true }), BlogModule],
  declarations: [AppComponent, HomeComponent, PostDetailComponent, ImpressumComponent, DatenschutzComponent],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule { }