import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PakistanComponent } from './pakistan/pakistan.component';
import { UnitedkingdomComponent } from './unitedkingdom/unitedkingdom.component';
import { Observable, filter } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

const initializeAppFactory = (router: Router) =>  {
  return () =>  
      router.events.subscribe((event) =>{
        if(event instanceof NavigationStart){
          if(event.url.includes('uk')){
            router.navigate(['/unitedkingdom'])
          }else if(event.url.includes('pk')){
            router.navigate(['/pakistan'])
          }
        }
            console.log(event)
      });

    router.events.pipe(
        filter((event) => event instanceof NavigationStart)
       ).subscribe((event: any) => {
         // this only fires for `NavigationStart` and no other events
         console.log(event.url)
       })
}

@NgModule({
  declarations: [
    AppComponent,
    PakistanComponent,
    UnitedkingdomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    deps: [Router],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
