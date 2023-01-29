import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css']
})
export class HowToUseComponent implements OnInit {

  constructor(public translate : TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('en');
   }

  ngOnInit(): void {
  }

}
