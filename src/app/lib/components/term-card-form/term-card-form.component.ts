import { Component, Input, forwardRef, inject } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TermCardFormType } from '@lib/types/term-card-form.type';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Observable } from 'rxjs';

const modules = [ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule, NzDividerModule];

@Component({
    selector: 'app-term-card-form',
    standalone: true,
    imports: [...modules],
    templateUrl: './term-card-form.component.html',
    styleUrl: './term-card-form.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => TermCardFormComponent),
        },
    ],
})
export class TermCardFormComponent {
    @Input() formControlName: number = 0;
    private _formBuilder = inject(NonNullableFormBuilder);

    termFormGroup: FormGroup = this._formBuilder.group({
        term: [''],
        definition: [''],
    });

    private _onTouched: () => void = () => {};

    constructor() {}

    writeValue(value: TermCardFormType): void {
        this.termFormGroup.setValue(value, { emitEvent: true });
    }

    registerOnChange(fn: (value: Partial<TermCardFormType>) => void): void {
        (this.termFormGroup.valueChanges as Observable<Partial<TermCardFormType>>).subscribe(
            (value: Partial<TermCardFormType>) => {
                fn(value);
            },
        );
    }

    registerOnTouched(fn: () => void): void {
        this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        isDisabled ? this.termFormGroup.disable() : this.termFormGroup.enable();
    }
}
