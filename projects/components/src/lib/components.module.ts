import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
  ],
  declarations: [
    ComponentsComponent,
    TopMenuComponent,
    HeaderComponent
  ],
  exports: [
    ComponentsComponent,
    TopMenuComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
