import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { CardModule } from '../card/card.module';
import * as fromBoard from './states/board.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BoardEffects } from './states/board.effects';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    CardModule,
    StoreModule.forFeature(fromBoard.boardFeatureKey, fromBoard.reducer),
    EffectsModule.forFeature([BoardEffects])
  ],
  exports: [BoardComponent]
})
export class BoardModule { }