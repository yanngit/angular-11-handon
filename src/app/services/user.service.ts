import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {
  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
  ];
  userSubject = new Subject<User[]>();

  emitUsers(): void {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User): void {
    this.users.push(user);
    this.emitUsers();
  }
}
