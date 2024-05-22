import { FormControl } from '@angular/forms';

export interface TermCardFormType {
    term: FormControl<string>;
    definition: FormControl<string>;
}
