import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HTTPValidationError } from '../interfaces/error.interface';

@Injectable()
export class CrossResultService {
  private baseUrl: string = environment.endpoint;

  constructor(private httpClient: HttpClient) {}

  getCrossResult(
    value: boolean
  ): Observable<{ result_name: string } | HTTPValidationError> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('value', value);

    return this.httpClient.get<{ result_name: string } | HTTPValidationError>(
      this.baseUrl + '/cross_result',
      {
        params: queryParams,
      }
    );
  }
}
