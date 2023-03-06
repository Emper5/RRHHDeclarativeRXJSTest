import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent],
})
export class SharedModule {}
