import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';


@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[addLabel]'
})

export class AddLabelDirective {
    @HostListener('click') onclick() {

        // Flex Div Tag(it will contain the label and value field)
        const div = this.render.createElement('div');
        this.render.setStyle(div, 'display', 'flex');
        this.render.setStyle(div, 'justify-content', 'space-between');

        // Label Field
        const matFormField1 = this.render.createElement('mat-form-field');
        const matLabel1 = this.render.createElement('mat-label');
        const input1 = this.render.createElement('input');
        this.render.setAttribute(input1, 'matInput', '');
        const text1 = this.render.createText('Label');
        this.render.appendChild(div, matFormField1);
        this.render.appendChild(matFormField1, matLabel1);
        this.render.appendChild(matFormField1, input1);
        this.render.appendChild(matLabel1, text1);

        //  Value Field
        const matFormField2 = this.render.createElement('mat-form-field');
        const matLabel2 = this.render.createElement('mat-label');
        const input2 = this.render.createElement('input');
        this.render.setAttribute(input2, 'matInput', '');
        const text2 = this.render.createText('Value');
        this.render.appendChild(div, matFormField2);
        this.render.appendChild(matFormField2, matLabel2);
        this.render.appendChild(matFormField2, input2);
        this.render.appendChild(matLabel2, text2);

        // Inserting the final element
        this.render.appendChild(this.render.parentNode(this.er.nativeElement), div);

    }

    constructor(private render: Renderer2, private er: ElementRef) {}
}
