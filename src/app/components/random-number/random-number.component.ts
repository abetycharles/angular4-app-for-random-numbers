import { Component, OnInit } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent implements OnInit {
  title = "10 Random numbers(duplicates allowed), between 5 and 50 sorted in ascending order."
  random_numbers:number[];

  constructor(private randService:RandomService) {  
  }
  ngOnInit() { 
    this.random_numbers = this.randService.getRandomNumbers();  
  }

}
