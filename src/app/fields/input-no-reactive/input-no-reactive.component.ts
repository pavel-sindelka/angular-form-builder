import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { DynamicComponentUnsubscribeOnDestroy } from '../../component-factory/dynamic-component-unsubscribe-on-destroy';

@Component({
  selector: 'input-no-reactive',
  templateUrl: './input-no-reactive.component.html',
  styleUrls: ['./input-no-reactive.component.sass']
})
@DynamicComponentUnsubscribeOnDestroy()
export class InputNoReactiveComponent implements OnDestroy {
  @Input() model: string;
  @Input() class: string;
  @Input() label: string;

  @Output() valueChange = new EventEmitter<string>();

  private modelChanged: Subject<string> = new Subject<string>();

  constructor() {
    this.modelChanged
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(model => this.valueChange.emit(model));
  }

  ngOnDestroy() {
    this.modelChanged.unsubscribe();
  }

  public changed(text: string) {
    this.modelChanged.next(text);
  }
}
