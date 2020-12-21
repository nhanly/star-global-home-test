import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { convertFromEventToPostition, makeTransition, updatePosition } from './services/square-box.helper';

@Component({
  selector: 'app-square-box',
  templateUrl: './square-box.component.html',
  styleUrls: ['./square-box.component.scss'],
})
export class SquareBoxComponent implements OnInit {
  transitionSpeed = 0.7;

  @ViewChild('squareBox', { static: true }) squareBoxEl: ElementRef;

  private clickObservable$: Observable<Event> = fromEvent(document, 'click');

  ngOnInit() {
    this.subscribeToObservable();
  }

  private subscribeToObservable(): void {
    this.clickObservable$.subscribe((event: MouseEvent) => {
      const newPosition = convertFromEventToPostition(event);

      makeTransition(this.squareBoxEl, this.transitionSpeed);
      updatePosition(this.squareBoxEl, newPosition);
    });
  }
}
