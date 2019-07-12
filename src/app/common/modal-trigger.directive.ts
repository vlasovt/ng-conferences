import { JQ_TOKEN } from './jQuery.service';
import { Directive, OnInit, Inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

  private el: HTMLElement;

  ngOnInit(): void {
    this.el.addEventListener('click', e=>{
      this.$('#simple-modal').modal({});  
    });
  }

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any ){ 
    this.el = ref.nativeElement;
  }


}
