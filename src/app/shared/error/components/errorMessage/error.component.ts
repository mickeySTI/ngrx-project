import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'mc-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
    @Input('message') messageProps: string = 'Something went wrong';

    constructor() {}

    ngOnInit(): void {}
}
