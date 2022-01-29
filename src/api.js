import one from './assets/goods-img/small/1.jpg'
import two from './assets/goods-img/small/2.jpg'
import three from './assets/goods-img/small/3.jpg'
import four from './assets/goods-img/small/4.jpg'
import five from './assets/goods-img/small/5.jpg'
import six from './assets/goods-img/small/6.jpg'
import seven from './assets/goods-img/small/7.jpg'
import eight from './assets/goods-img/small/8.jpg'
import nine from './assets/goods-img/small/9.jpg'

// import one from './assets/goods-img/small/1.jpg'

let data = [
   {
      id: 1,
      title: 'Selle Italia SLR Kit Carbonio',
      src: one,
      price: 155
   },
   {
      id: 2,
      title: 'tune Komm-Vor Carbon',
      src: two,
      price: 200
   },
   {
      id: 3,
      title: 'BEAST Components Pure',
      src: three,
      price: 165
   },
   {
      id: 4,
      title: 'Specialized Bridge Comp',
      src: four,
      price: 55
   },
   {
      id: 5,
      title: 'fabric Line Shallow Sport',
      src: five,
      price: 40
   },
   {
      id: 6,
      title: 'Selle Italia X-LR TI 316 Superflow',
      src: six,
      price: 115
   },
   {
      id: 7,
      title: 'Syncros Belcarra R 1.0 Channel',
      src: seven,
      price: 125
   },
   {
      id: 8,
      title: 'SDG Ti-Fly',
      src: eight,
      price: 80
   },
   {
      id: 9,
      title: 'Syncros Belcarra V 1.5 Cut-Out',
      src: nine,
      price: 50
   },
]

export class ApiService {
   getSaddles() {
      return new Promise((res, rej) => {
         setTimeout(() => {
            res(data)
         }, 1700)
      })
   }
}