import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { buildRoute } from './utils';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  programsRoute = '/programs';
  constructor(private httpClient: HttpClient) {}

  getAllPrograms(): Observable<any> {
    return this.httpClient.get(buildRoute(this.programsRoute));
  }

  addProgram(name: string, nbLots: number): Observable<any> {
    return this.httpClient.post(buildRoute(this.programsRoute), {
      name,
      nbLots,
    });
  }
}
