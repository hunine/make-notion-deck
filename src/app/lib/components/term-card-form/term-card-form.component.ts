/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output, forwardRef, inject } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TermCardFormType } from '@lib/types/term-card-form.type';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

const modules = [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzDividerModule,
    NzIconModule,
];

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
    private _formBuilder = inject(NonNullableFormBuilder);

    @Input() groupId: number = 0;
    @Output() clickToDelete: EventEmitter<number> = new EventEmitter<number>();

    @Input() termCardForm: FormGroup = this._formBuilder.group({
        term: '',
        definition: '',
    });

    private _onTouched: () => void = () => {};

    constructor() {}

    writeValue(value: any): void {
        this.termCardForm.setValue(value, { emitEvent: true });
    }

    registerOnChange(fn: (value: Partial<TermCardFormType>) => void): void {
        (this.termCardForm.valueChanges as Observable<Partial<TermCardFormType>>).subscribe(
            (value: Partial<TermCardFormType>) => {
                fn(value);
            },
        );
    }

    registerOnTouched(fn: () => void): void {
        this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        isDisabled ? this.termCardForm.disable() : this.termCardForm.enable();
    }

    handleClickToDelete(): void {
        this.clickToDelete.emit(this.groupId);
    }
}
