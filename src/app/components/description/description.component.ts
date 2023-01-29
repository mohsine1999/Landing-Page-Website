import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(public translate : TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('en');
   }

  ngOnInit(): void {
  }

}
