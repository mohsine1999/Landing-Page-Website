import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(public translate : TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
   }

  ngOnInit(): void {
  }

}
