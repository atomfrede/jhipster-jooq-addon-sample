import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterjooqSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterjooqSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JhipsterjooqHomeModule {}
