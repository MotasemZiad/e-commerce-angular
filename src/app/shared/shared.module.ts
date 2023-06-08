import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [HeaderComponent, SpinnerComponent, SelectComponent],
  imports: [CommonModule, SharedModuleRoutingModule],
  exports: [HeaderComponent, SpinnerComponent, SelectComponent],
})
export class SharedModule {}
