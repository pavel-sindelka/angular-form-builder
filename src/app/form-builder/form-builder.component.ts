import {
  Component,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass']
})
export class FormBuilderComponent implements OnDestroy {
  @Input() formClass: string;
  @Input() formBodyClass: string;
  @Input() formFooterClass: string;

  @Output() formSubmit = new EventEmitter();

  @ViewChild('formContent', { read: ViewContainerRef })
  private formContent: ViewContainerRef;
  private componentRefs: ComponentRef<any>[] = [];

  constructor() {}

  ngOnDestroy() {
    this.componentRefs.forEach(componentRef => componentRef.destroy());
  }

  addField(component: any) {
    this.formContent.insert(component.hostView);
    this.componentRefs.push(component);

    return this;
  }

  submit() {
    this.formSubmit.emit();
  }
}
