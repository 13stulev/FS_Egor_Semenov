import { Injectable } from '@angular/core';

export class Animal {
  constructor(public isVisible: boolean, public breed: string, public name: string, public type: string, public gender: string, public age: number, public weight: number, public img: string) {
  }
}

@Injectable()
export class DataService {
  private static _animals: Animal[] = [
    {
      isVisible: false,
      breed: 'Котик',
      name: 'Бабасик',
      type: 'Персидская кошка',
      gender: 'Мужской',
      age: 3,
      weight: 3,
      img: 'assets/images/cat.png'
    },
    {
      isVisible: false,
      breed: 'Котик',
      name: 'Жамо',
      type: 'Бенгальская кошка',
      gender: 'Мужской',
      age: 4,
      weight: 4,
      img: 'assets/images/cat.png'
    },
    {
      isVisible: false,
      breed: 'Котик',
      name: 'Урсик',
      type: 'Абиссинская кошка',
      gender: 'Женский',
      age: 5,
      weight: 5,
      img: 'assets/images/cat.png'
    },
    {
      isVisible: false,
      breed: 'Котик',
      name: 'Церри',
      type: 'Абиссинская кошка',
      gender: 'Мужской',
      age: 2,
      weight: 3,
      img: 'assets/images/cat.png'
    },
    {
      isVisible: false,
      breed: 'Собачка',
      name: 'Персик',
      type: 'Австралийская овчарка',
      gender: 'Мужской',
      age: 1,
      weight: 9,
      img: 'assets/images/dog.png'
    },
    {
      isVisible: false,
      breed: 'Собачка',
      name: 'Пуф',
      type: 'Австралийский келпи',
      gender: 'Мужской',
      age: 2,
      weight: 14,
      img: 'assets/images/dog.png'
    },
    {
      isVisible: false,
      breed: 'Собачка',
      name: 'Патрик',
      type: 'Американская акита',
      gender: 'Мужской',
      age: 2,
      weight: 23,
      img: 'assets/images/dog.png'
    },
    {
      isVisible: false,
      breed: 'Собачка',
      name: 'Патрик',
      type: 'Английский бульдог',
      gender: 'Мужской',
      age: 1,
      weight: 8,
      img: 'assets/images/dog.png'
    },
    {
      isVisible: false,
      breed: 'Попугай',
      name: 'Покер',
      type: 'Волнистый попугай',
      gender: 'Мужской',
      age: 3,
      weight: 0.13,
      img: 'assets/images/parrot.png'
    },
    {
      isVisible: false,
      breed: 'Попугай',
      name: 'Пабло',
      type: 'Голубой ара',
      gender: 'Мужской',
      age: 4,
      weight: 0.2,
      img: 'assets/images/parrot.png'
    }

  ]
  constructor() {
  }


  static getAnimals(): Animal[] {
    return this._animals;
  }
}
