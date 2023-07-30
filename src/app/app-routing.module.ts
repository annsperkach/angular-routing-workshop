import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Display the home page when we visit /
  { path: 'contact', component: ContactComponent }, // Display contact when we visit /contact
  { path: 'about-me', component: AboutMeComponent }, // Display about-me when we visit /about-me
  { path: 'watch/:id', component: WatchComponent }, // Display watch when we visit /watch/:id
  // Note: We have added the ':id' parameter to the path to capture the value the user adds in the URL.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }