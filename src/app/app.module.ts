import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './layout/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PolygonModalComponent } from './layout/polygon-modal/polygon-modal.component';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [AppComponent, MenuComponent, PolygonModalComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
