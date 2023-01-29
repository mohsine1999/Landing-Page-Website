import { Component, OnInit } from '@angular/core';
import { DEFAULT_LANGUAGE, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor(public translate : TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
  }

}
