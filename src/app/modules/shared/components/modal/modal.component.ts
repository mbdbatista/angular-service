import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalCallbackType, ModalData } from '../../model/modal.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @ViewChild('modalBody', { read: ViewContainerRef })
  modalBody!: ViewContainerRef

  close = ModalCallbackType.CLOSE
  confirm = ModalCallbackType.CONFIRM
  cancel = ModalCallbackType.CANCEL

  event: Subject<ModalCallbackType> = new Subject()
  data!: ModalData

  toggle(option: ModalCallbackType) {
    this.event.next(option)
  }
}
