import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  constructor(private el: ElementRef) {}

  @Input('appHoverStyle') decoType: string;

  @HostListener('mouseenter') onMouseEnter(): void {
    console.log(this.decoType);
    if (this.decoType === 'title') {
      this.textDeco('underline');
    }
    if (this.decoType === 'tags') {
      this.textWeight(700);
    }
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.textDeco(null);
    this.textWeight(400);
  }

  private textDeco(decoration: string): void {
    this.el.nativeElement.style.textDecoration = decoration;
  }

  private textWeight(weight: number): void {
    this.el.nativeElement.style.fontWeight = weight;
  }

}
