import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppareilService {
  static STATUS_ALLUME = 'allume';
  static STATUS_ETEINT = 'eteint';
  appareilsSubject = new Subject<any[]>();
  private appareils: any[];
  private FIREBASE_URL = 'https://test-2befa-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private httpClient: HttpClient) { }

  emitAppareilSubject(): void {
    this.appareilsSubject.next([...this.appareils]);
  }

  switchOnOne(i: number): void {
    this.appareils[i].status = AppareilService.STATUS_ALLUME;
    this.emitAppareilSubject();
  }

  switchOffOne(i: number): void {
    this.appareils[i].status = AppareilService.STATUS_ETEINT;
    this.emitAppareilSubject();
  }

  switchOnAll(): void {
    this.appareils.forEach((data: any) => {
      data.status = AppareilService.STATUS_ALLUME;
    });
    this.emitAppareilSubject();
  }

  switchOffAll(): void {
    this.appareils.forEach((data: any) => {
      data.status = AppareilService.STATUS_ETEINT;
    });
    this.emitAppareilSubject();
  }

  getAppareil(idToFind: number): any {
    return this.appareils.find(({id}) => id === idToFind);
  }

  addAppareil(name: string, status: string): void {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer(): void {
    this.httpClient
      .put(this.FIREBASE_URL + '/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getAppareilsFromServer(): void {
    this.httpClient
      .get<any[]>(this.FIREBASE_URL + '/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
