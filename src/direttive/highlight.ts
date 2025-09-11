import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.backgroundColor='yellow'
   }
@HostListener('mouseenter') onMouseEnter(){
this.cambiaColore(this.appHighlight),  console.log(this.onMouseLeave)

}
@HostListener('mouseleave') onMouseLeave(){
this.cambiaColore(this.appHighlight),  console.log(this.onMouseEnter)
}

cambiaColore(colore:string){
  this.element.nativeElement.style.backgroundColor = colore
  console.log(colore)
}
@Input () appHighlight =''

}
