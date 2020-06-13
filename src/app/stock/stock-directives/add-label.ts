import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';
import {  } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[addLabel]'
})

export class AddLabelDirective {
    @HostListener('click') onclick() {

        // Flex Div Tag(it will contain the label and value field)
        const dual = this.render.createElement('app-dual');
        AppDual;

        // Inserting the final element
        this.render.appendChild(this.render.nextSibling(this.er.nativeElement), dual);

    }

    constructor(private render: Renderer2, private er: ElementRef) {

    }
}
