import { UtilsService } from './../../../services/utils.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'mc-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
    @Input('total') totalProps: number;
    @Input('limit') limitProps: number;
    @Input('url') urlProps: string;
    @Input('currentPage') currentPageProps: number;

    pagesCount: number;
    pages: number[];

    constructor(private utilsService: UtilsService) {}

    ngOnInit(): void {
        this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
        this.pages = this.utilsService.range(1, this.pagesCount);
    }
}
