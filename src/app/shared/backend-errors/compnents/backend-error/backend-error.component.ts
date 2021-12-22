import { BackendErrorsInterface } from 'src/app/shared/models/backend-errors.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'mc-backend-errors',
    templateUrl: './backend-error.component.html',
    styleUrls: ['./backend-error.component.scss'],
})
export class BackendErrorComponent implements OnInit {
    @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

    errorMessages: string[];

    constructor() {}

    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrorsProps).map(
            (name: string) => {
                const messages = this.backendErrorsProps[name].join(' ');
                console.log(messages);
                return messages;
            }
        );
    }
}
