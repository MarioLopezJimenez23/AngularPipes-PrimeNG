import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public orderBy: keyof Hero | '' = ''

  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Iron-man',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Black Widow',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Captain America',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Thor',
      canFly: true,
      color: Color.blue
    },

  ]


  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero){
    this.orderBy = value;
  }

}
