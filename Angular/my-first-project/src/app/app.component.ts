import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0;
  nome = 'Claudio Montenegro';
  text = '';

  pessoas = [{
    firstName: '',
    lastName: '',
    age: ''
  }

  ];

  constructor (private peopleService: PeopleService) { 
    //injetando meu serviço (PeopleService) no constructor
    
  }


  ngOnInit() {
    this.getPeople();
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) {
        clearInterval(interval); 
      }
    }, 1000)
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }

  clicou(nome: string): void{
    console.log('Clicou em mim', nome)
  }
}
