import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-cliclo-de-vida',
  templateUrl: './cliclo-de-vida.component.html',
  styleUrl: './cliclo-de-vida.component.css'
})
export class ClicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit{
  /*No es un evento del ciclo de vida*/
  constructor(
    private ChangeDetectorRef: ChangeDetectorRef
  
  ){}
  /*Parametro*/
  @Input()
  titulo: any;
  
  @ViewChild(RatingComponent)
  ratingComponent: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes')
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('on destroy')
  }

  ngDoCheck(): void {
    console.log('do check')
  }

  ngAfterViewInit(): void {
    console.log('on After View Init')
    this.ratingComponent.ratingAnterior = 3;
  }

  ngOnInit(): void {
    console.log('on init')
  }

}
