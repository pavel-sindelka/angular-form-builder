import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FormBuilderComponent } from '../../form-builder/form-builder.component';
import { IUser, UserService } from '../../user-service/user.service';

import { InputReactiveComponent } from '../../fields/input-reactive/input-reactive.component';
import { SelectReactiveComponent } from '../../fields/select-reactive/select-reactive.component';
import { RadioSelectReactiveComponent } from '../../fields/radio-select-reactive/radio-select-reactive.component';
import { WhisperReactiveComponent } from '../../fields/whisper-reactive/whisper-reactive.component';

const components = {
  input: InputReactiveComponent,
  select: SelectReactiveComponent,
  radioSelect: RadioSelectReactiveComponent,
  whisper: WhisperReactiveComponent
};

export class User implements IUser {
  constructor(
    public id: string = '',
    public firstName: string = '',
    public lastName: string = '',
    public ageCategory: string = '',
    public sex: string = '1',
    public favoriteActivity: string = ''
  ) { }
}

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() user: IUser;
  @Input() ageCategories: [any];
  @Input() sexes: [any];

  @Output() formSubmit = new EventEmitter();

  @ViewChild('formBuilder') formBuilder: FormBuilderComponent;

  private formGroup: FormGroup;
  private activitiesChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  private ageCategoryChange;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      id: new FormControl(),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      ageCategory: new FormControl(null, Validators.required),
      sex: new FormControl(null, Validators.required),
      favoriteActivity: new FormControl()
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('user')) {
      const user = changes.user.currentValue;
      this.formGroup.setValue(user);
      this.activitiesChange.next(this.findActivities(user.ageCategory));
    }
  }

  ngOnInit() {
    this.ageCategoryChange = this.formGroup
      .get('ageCategory')
      .valueChanges.subscribe(id =>
        this.activitiesChange.next(this.findActivities(id))
      );

    this.formBuilder
      .addField(components.input, {
        inputs: {
          formGroup: this.formGroup,
          formControlName: 'firstName',
          class: 'col-sm-6 col-xs-12',
          label: 'First Name *'
        }
      })
      .addField(components.input, {
        inputs: {
          formGroup: this.formGroup,
          formControlName: 'lastName',
          class: 'col-sm-6 col-xs-12',
          label: 'Last Name *'
        }
      })
      .addField(components.select, {
        inputs: {
          formGroup: this.formGroup,
          formControlName: 'ageCategory',
          class: 'col-sm-6 col-xs-12',
          label: 'Age category *',
          options: this.ageCategories
        }
      })
      .addField(components.radioSelect, {
        inputs: {
          formGroup: this.formGroup,
          formControlName: 'sex',
          class: 'col-sm-6 col-xs-12',
          label: 'Sex *',
          options: this.sexes
        }
      })
      .addField(components.whisper, {
        inputs: {
          formGroup: this.formGroup,
          formControlName: 'favoriteActivity',
          class: 'col-xs-12',
          label: 'Favorite Activity',
          options: {
            subject: this.activitiesChange
          }
        }
      });
  }

  ngOnDestroy() {
    this.ageCategoryChange.unsubscribe();
  }

  findActivities(id: string) {
    const ageCategory = this.ageCategories.find(category => category.id === id);
    return ageCategory ? ageCategory.activities : [];
  }

  isValid() {
    return this.formGroup.valid;
  }

  value() {
    return this.formGroup.value;
  }

  formSubmitOut() {
    if (!this.isValid()) {
      return;
    }

    this.formSubmit.emit(this.value());
  }
}
