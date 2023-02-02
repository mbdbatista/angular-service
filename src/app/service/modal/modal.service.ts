import { ApplicationRef, ComponentRef, Injectable, Type, ViewContainerRef, ViewRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalComponent } from 'src/app/modules/shared/components/modal/modal.component';
import { ModalCallbackType } from 'src/app/modules/shared/model/modal.model';

@Injectable({providedIn: 'root'} )
export class ModalService {

  private component?: ComponentRef<ModalComponent>

  constructor(private appRef: ApplicationRef){}

  open(content: Type<any>): Observable<ModalCallbackType> {
    const div = this.addContainer()  
    this.component = this.appRef.bootstrap(ModalComponent, div)    
    this.component.instance.modalBody.createComponent(content)
    return this.component.instance.event
  }

  close() {
    this.component?.destroy()
    this.component = undefined
  }

  private addContainer(): HTMLDivElement {
    const hasContainer = document.querySelector('#modal-content')
    if (hasContainer) return hasContainer as HTMLDivElement
    const div = document.createElement('div')
    div.id = 'modal-content'
    document.querySelector('body')?.appendChild(div)
    return div
  }
}