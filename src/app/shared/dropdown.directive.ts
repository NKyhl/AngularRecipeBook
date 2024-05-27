import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') expanded = false;

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    this.expanded = this.elRef.nativeElement.contains(event.target) ? !this.expanded : false;
  }

  constructor(private elRef: ElementRef) {}
}