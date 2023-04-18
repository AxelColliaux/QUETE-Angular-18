import { Injectable } from '@angular/core';
import { Observable, of } from  'rxjs';
import { delay } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private role: String = 'ANONYMOUS';

  login(): Observable<boolean>  {
    return of(false).pipe( 
    delay(3000)
  );
  }

  getRole(): String {
    return this.role;
  }

  setRole(role: String): void {
    this.role = role;
  }
}
