import {Subject} from 'rxjs';

export class AppareilService {
  static STATUS_ALLUME = 'allume';
  static STATUS_ETEINT = 'eteint';
  appareilsSubject = new Subject<any[]>();
  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: AppareilService.STATUS_ALLUME
    },
    {
      id: 3,
      name: 'Frigo',
      status: AppareilService.STATUS_ALLUME
    },
    {
      id: 2,
      name: 'Ordinateur',
      status: AppareilService.STATUS_ETEINT
    }
  ];

  emitAppareilSubject(): void {
    this.appareilsSubject.next([...this.appareils]);
  }

  getAppareils(): any[] {
    return this.appareils.slice();
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
    this.appareils.forEach((data) => {
      data.status = AppareilService.STATUS_ALLUME;
    });
    this.emitAppareilSubject();
  }

  switchOffAll(): void {
    this.appareils.forEach((data) => {
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
}
