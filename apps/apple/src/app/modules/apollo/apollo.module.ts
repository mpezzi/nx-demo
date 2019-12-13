import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserModule } from '@angular/platform-browser';

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
