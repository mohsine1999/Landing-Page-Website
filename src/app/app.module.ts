import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HowToUseComponent } from './components/how-to-use/how-to-use.component';
import { DescriptionComponent } from './components/description/description.component';
import { DownloadComponent } from './components/download/download.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//new
import { TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Description2Component } from './components/description2/description2.component';
import { Description3Component } from './components/description3/description3.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HowToUseComponent,
    DescriptionComponent,
    DownloadComponent,
    GetStartedComponent,
    FooterComponent,
    Description2Component,
    Description3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage : 'en',
      loader : {
        provide : TranslateLoader,
        useFactory : HttpLoaderFactory,
        deps : [HttpClient]
      }

    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent,
    HowToUseComponent,
    DescriptionComponent,
    DownloadComponent,
    GetStartedComponent,
    FooterComponent
  ]
})
export class AppModule {}

export function createLoaderFactory(http:HttpClient){

 return new TranslateHttpLoader(http,'../assets/i18n/','.json')

}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
