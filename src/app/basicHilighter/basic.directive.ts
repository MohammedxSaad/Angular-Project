import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive ({
    selector : '[appBasic]'

})

export class Basic implements OnInit{
    constructor(private elemnetRef:ElementRef){

    }
    ngOnInit(): void {
        this.elemnetRef.nativeElement.style.backgroundColor= 'green';
    }

}