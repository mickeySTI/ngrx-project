import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/errorMessage/error.component';

@NgModule({
    declarations: [ErrorComponent],
    imports: [CommonModule],
    exports: [ErrorComponent],
})
export class ErrorModule {}
