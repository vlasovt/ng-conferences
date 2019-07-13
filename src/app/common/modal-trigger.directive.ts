import { JQ_TOKEN } from './jQuery.service';
import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

  @Input('modal-trigger') modalId: string;

  private el: HTMLElement;

  ngOnInit(): void {
    this.el.addEventListener('click', e=>{
      this.$(`#${this.modalId}`).modal({});  
    });
  }

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any ){ 
    this.el = ref.nativeElement;
  }


}
