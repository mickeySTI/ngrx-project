import { ErrorModule } from './../error/error.module';
import { LoadingModule } from './../loading/loading.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopTagsComponent } from './components/pop-tags/pop-tags.component';
import { reducers } from './state/reducers/popular-tags.reducer';
import { PopularTagsEffects } from './state/popular-tags.effects';
import { PopularTagsService } from './services/pop-tags.service';

@NgModule({
    declarations: [PopTagsComponent],
    imports: [
        CommonModule,
        RouterModule,
        StoreModule.forFeature('popularTagsState', reducers),
        EffectsModule.forFeature([PopularTagsEffects]),
        LoadingModule,
        ErrorModule,
    ],
    exports: [PopTagsComponent],
    providers: [PopularTagsService],
})
export class PopTagsModule {}
