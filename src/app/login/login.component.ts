import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showIt = false;
  value = '';
  constructor(public common: CommonService){}

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    this.showModal();
    return !Boolean(this.value);
  }

  showModal() {
    this.showIt = true;
  }

  closeModal() {
    this.showIt = false;
    this.common.onCloseSub.next(false);
  }

  onResponse(response: any) {
    this.common.onCloseSub.next(true);
  }

  onChange(evt: any) {
    this.value = evt.target.value;
  }
}
