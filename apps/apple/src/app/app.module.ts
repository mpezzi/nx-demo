import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdsLayoutModule } from '@nx-demo/ads-angular';

import { AppComponent } from './app.component';
import { ApolloClientModule } from './modules/apollo';
import { PostModule } from './modules/post';
import { routes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    ApolloClientModule,
    PostModule,
    AdsLayoutModule,
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
