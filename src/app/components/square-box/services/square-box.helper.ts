import { ElementRef } from '@angular/core';
import { CSSEnum } from '../enums/square-box.enum';
import { ElementPosition } from '../types/square-box.interface';

export const convertFromEventToPostition = ({ clientX, clientY }: MouseEvent): ElementPosition => {
  return {
    horizontalPos: `${clientX}${CSSEnum.pixelPostFix}`,
    verticalPos: `${clientY}${CSSEnum.pixelPostFix}`,
  } as ElementPosition;
};

export const updatePosition = (element: ElementRef, position: ElementPosition): void => {
  element.nativeElement.style.position = 'absolute';
  element.nativeElement.style.left = position.horizontalPos;
  element.nativeElement.style.top = position.verticalPos;
};

export const makeTransition = (element: ElementRef, transitionSpeed: number): void => {
  element.nativeElement.style['-webkit-transition'] = `${transitionSpeed}s`;
  element.nativeElement.style['-moz-transition'] = `${transitionSpeed}s`;
  element.nativeElement.style['-ms-transition'] = `${transitionSpeed}s`;
  element.nativeElement.style['-o-transition'] = `${transitionSpeed}s`;
  element.nativeElement.style.transition = `${transitionSpeed}s`;
};
