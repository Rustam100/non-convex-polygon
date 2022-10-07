import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuItem } from '../interfaces/menu.interface';

@Injectable()
export class MenuService {
  private baseUrl: string = environment.endpoint;

  constructor(private httpClient: HttpClient) {}

  getMenu(): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>(this.baseUrl + '/menu');
  }
}
