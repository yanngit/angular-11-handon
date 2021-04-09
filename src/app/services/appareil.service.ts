export class AppareilService {
  static STATUS_ALLUME = 'allume';
  static STATUS_ETEINT = 'eteint';
  private appareils = [
    {
      name: 'Machine à laver',
      status: AppareilService.STATUS_ALLUME
    },
    {
      name: 'Frigo',
      status: AppareilService.STATUS_ALLUME
    },
    {
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
}
