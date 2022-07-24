import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { BrowseBeersPageComponent } from './components/browse-beers-page/browse-beers-page.component';
import { FavoriteBeersPageComponent } from './components/favorite-beers-page/favorite-beers-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeartOutline } from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BeerModalComponent } from './components/beer-modal/beer-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HttpErrorInterceptor } from './http-error.interceptor';

const icons = [ HeartOutline ];

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BrowseBeersPageComponent,
    FavoriteBeersPageComponent,
    NavbarComponent,
    BeerListComponent,
    BeerCardComponent,
    BeerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    NzCardModule,
    NzListModule,
    NzGridModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzInputModule,
    NzIconModule.forRoot(icons),
    NzButtonModule,
    NzModalModule,
    NzPaginationModule,
    NzLayoutModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
