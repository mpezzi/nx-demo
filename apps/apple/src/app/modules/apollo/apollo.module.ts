import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

@NgModule({
  imports: [BrowserModule, HttpClientModule, ApolloModule, HttpLinkModule],
  exports: [BrowserModule, HttpClientModule, ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({ uri: 'http://localhost:4000/graphql' })
        };
      },
      deps: [HttpLink],
    }
  ]
})
export class ApolloClientModule {}
