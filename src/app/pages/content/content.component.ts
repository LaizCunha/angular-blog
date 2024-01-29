import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbEpKqS1wETSZ-pOjjrv3le98VK6md09Z3g&usqp=CAU';
  contentTitle: string = 'MINHA NOTÍCIA';
  contentDescription: string = 'Olá Mundo!';

  constructor() { }

  ngOnInit(): void {
  }

}
