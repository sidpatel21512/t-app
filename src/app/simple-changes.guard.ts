import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CommonService } from './common.service';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class SimpleChangesGuard {
  constructor(public common: CommonService){
    common.onCloseSub.subscribe(r => console.log('r:', r));
  }
  canDeactivate(
    component: ComponentCanDeactivate
  ): boolean | Observable<boolean> {
    return component.canDeactivate() ? true : this.common.onCloseSub;
  }
}
