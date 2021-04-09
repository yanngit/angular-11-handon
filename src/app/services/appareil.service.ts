export class AppareilService {
  static STATUS_ALLUME = 'allume';
  static STATUS_ETEINT = 'eteint';
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

  getAppareils(): any[] {
    return this.appareils;
  }

  switchOnOne(i: number): void {
    this.appareils[i].status = AppareilService.STATUS_ALLUME;
  }

  switchOffOne(i: number): void {
    this.appareils[i].status = AppareilService.STATUS_ETEINT;
  }

  switchOnAll(): void {
    this.appareils.forEach((data) => {
      data.status = AppareilService.STATUS_ALLUME;
    });
  }

  switchOffAll(): void {
    this.appareils.forEach((data) => {
      data.status = AppareilService.STATUS_ETEINT;
    });
  }

  getAppareil(idToFind: number): any {
    return this.appareils.find(({id}) => id === idToFind);
  }
}
