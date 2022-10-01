import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [ 
    trigger('divState' , 
    [ state('normal' , style({backgroundColor: 'red' })), 
    state('high' , style({backgroundColor :'blue' , transform: 'translateX(100px )'})) ,
    transition('normal => high', animate(300)), 
    transition('high => normal', animate(800))]),
    trigger('wildState' , 
    [ state('normal' , style({backgroundColor: 'red' , transform: 'translateX(0px ) scale(1)'})), 
    state('high' , style({backgroundColor :'blue' , transform: 'translateX(0px ) scale(1)'})) ,
    state('shrunk' , style({backgroundColor :'blue' , transform: 'translateX(0px ) scale(0.5)'})) ,
    transition('normal <=> shrunk', animate(800)), 
    ]), trigger('list1' , 
    [ state('in' , style({opacity:1 , transform: 'translateX(0px ) '})), 
    

    transition('void => *', [style({opacity:0 , transform: 'translateX(-100px)'}),animate(300)]), 
    transition('* => void' , [animate(300 , style({opacity: 0 , transform: 'translateX(150px)'}))])
    ])
  ]
})
export class AnimationComponent implements OnInit {
  list = [ 'Test1' , 'Test2' ];
  state = 'high';
  wildState ='normal'
  listState = ''


  constructor() { }

  ngOnInit(): void {
  }
  onShrink(){
    this.wildState == 'normal' ? this.wildState = 'shrunk' : this.wildState = 'normal'
  }
  onAdd(item: string){
    this.list.push(item);
    this.listState ='in' ;
  }
  onDelete(item: string){
    this.list.splice(this.list.indexOf(item),1);
    this.listState = 'out' ;
  }
  onAnimate(){
    this.state == 'normal' ? this.state = 'high' : this.state = 'normal';
   
  }

}
