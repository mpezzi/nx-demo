import { HttpService, Injectable } from "@nestjs/common";
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class JsonPlaceholderClient {

  /**
   * Holds url.
   */
  public url = 'https://jsonplaceholder.typicode.com';

  /**
   * Constructor.
   */
  public constructor(
    private readonly http: HttpService,
  ) { }

  /**
   * Perform a GET request.
   */
  public get(url: string, config?: AxiosRequestConfig): Promise<any> {

    return this.http.get(this.url + url, config).toPromise().then(r => r.data);

  }

}
