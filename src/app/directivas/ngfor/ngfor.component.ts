import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  equipos:any[] = [
    {nombre: "Antigua", logo: "https://ligagt.org/ft/wp-content/uploads/2017/03/antigua.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 25, diferencia: 20, puntos: 40},
    {nombre: "Comunicaciones", logo: "https://ligagt.org/ft/wp-content/uploads/2017/03/comunicaciones.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 7, diferencia: 20, puntos: 36},
    {nombre: "Cobán Imperial", logo: "https://ligagt.org/ft/wp-content/uploads/2017/03/coban.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 25, diferencia: 6, puntos: 36},
    {nombre: "Malacateco", logo: "https://ligagt.org/ft/wp-content/uploads/2017/03/malacateco.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 25, diferencia: 5, puntos: 34},
    {nombre: "Municipal", logo: "https://ligagt.org/ft/wp-content/uploads/2017/03/municipal.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 25, diferencia: 8, puntos: 30},
    {nombre: "Guastatoya", logo: "https://ligagt.org/ft/wp-content/uploads/2017/03/guastatoya.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 25, diferencia: 2, puntos: 29},
    {nombre: "Xelajú", logo: "https://ligagt.org/ft/wp-content/uploads/2017/03/xelaju.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 25, diferencia: 7, puntos: 28},
    {nombre: "Achuapa", logo: "https://ligagt.org/ft/wp-content/uploads/2020/08/Achuapa22-128x128.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 25, diferencia: 10, puntos: 27},
    {nombre: "Iztapa", logo: "https://ligagt.org/ft/wp-content/uploads/2018/07/Iztapa.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 25, diferencia: 4, puntos: 26},
    {nombre: "Xinabajul", logo: "https://ligagt.org/ft/wp-content/uploads/2022/06/xinabajul-128x128.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 25, diferencia: 5, puntos: 26},
    {nombre: "Santa Lucía Cotz.", logo: "https://ligagt.org/ft/wp-content/uploads/2021/06/Santalucia2021-128x128.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 25, diferencia: 18, puntos: 15},
    {nombre: "Deportivo Mixco", logo: "https://ligagt.org/ft/wp-content/uploads/2017/03/mixco2019.png", juegos: 21, ganados: 12, empates: 4, perdidos: 5, golesfavor: 45, golescontra: 25, diferencia: 18, puntos: 15},
  ]
}
