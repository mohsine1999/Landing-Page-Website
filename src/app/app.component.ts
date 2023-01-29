import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RECYCLAGE';
  currentLang : string | undefined;

  constructor (public translate : TranslateService){
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeCurrentLang(lang : string){
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }
  
  }

