import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public onCloseSub: Subject<boolean>;
  constructor() { 
    this.onCloseSub = new Subject<boolean>();
  }
}
