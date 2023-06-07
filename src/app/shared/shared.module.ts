import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [HeaderComponent, SpinnerComponent],
  imports: [CommonModule, SharedModuleRoutingModule],
  exports: [HeaderComponent, SpinnerComponent],
})
export class SharedModule {}
