import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'region-test';

  constructor(private router: Router){}

  ngOnInit(): void {
    //this.router.events.subscribe((event) => console.log(event));
    // this.router.events.pipe(
    //   filter((event) => event instanceof NavigationStart)
    // ).subscribe((event: any) => {
    //   // this only fires for `NavigationStart` and no other events
    //   console.log(event.url)
    // });
  }
}
