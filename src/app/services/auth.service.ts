export class AuthService {
  private isAuth = false;
  signIn(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
        this.isAuth = true;
      }, 2000);
    });
  }

  signOut(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        resolve(true);
        this.isAuth = false;
    });
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
