import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1-fundamentals',
  templateUrl: './test1-fundamentals.component.html',
  styleUrls: ['./test1-fundamentals.component.css']
})
export class Test1FundamentalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
  }

  compute(number:number){
    if (number < 0)
      return 0;
  
    return number + 1;
  }

  getCurrencies() { 
    return ['USD', 'AUD', 'EUR'];
  }

  greet(name:string) { 
    return 'Welcome ' + name; 
  }

}


