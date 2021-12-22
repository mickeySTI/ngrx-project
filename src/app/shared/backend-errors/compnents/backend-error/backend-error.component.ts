import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'mc-backend-errors',
    templateUrl: './backend-error.component.html',
    styleUrls: ['./backend-error.component.scss'],
})
export class BackendErrorComponent implements OnInit {
    @Input() backendErrors: { [x: string]: string[] };

    errorMessages: string[];

    constructor() {}

    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrors).map(
            (name: string) => {
                const messages = this.backendErrors[name].join();
                return `${name} ${messages}`;
            }
        );
    }
}
