import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorComponent } from './compnents/backend-error/backend-error.component';

@NgModule({
    declarations: [BackendErrorComponent],
    imports: [CommonModule],
    exports: [BackendErrorComponent],
})
export class BackendErrorsModule {}
