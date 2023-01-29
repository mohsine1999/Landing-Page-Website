import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentLang : string ;

  constructor(public translate : TranslateService) {

    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);

    translate.setDefaultLang('en');
    translate.use('en');

    
   }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

changeCurrentLang(lang : string){
  this.translate.use(lang);
  localStorage.setItem('currentLang', lang);
}
  

}
