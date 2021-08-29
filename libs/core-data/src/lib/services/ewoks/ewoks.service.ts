import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Ewok } from "@ewok/api-interfaces";
import { EwokEnvironment, EWOK_ENVIRONMENT } from "@ewok/environment";


@Injectable({
  providedIn: 'root'
})
export class EwoksService {
  model = 'ewoks';

  constructor(
    private httpClient: HttpClient,
    @Inject(EWOK_ENVIRONMENT) private environment: EwokEnvironment
  ) {}

  all() {
    return this.httpClient.get<Ewok[]>(this.getUrl())
  };

  find(ewokId: string) {
    return this.httpClient.get<Ewok>(this.getUrlById(ewokId))
  };

  create(ewoks: Ewok) {
    return this.httpClient.post<Ewok>(this.getUrl(), ewoks)
  };

  update(ewoks: Ewok) {
    return this.httpClient.patch<Ewok>(this.getUrlById(ewoks.id), ewoks)
  };

  delete({ id }: Ewok) {
    return this.httpClient.delete<Ewok>(this.getUrlById(id))
  };

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}