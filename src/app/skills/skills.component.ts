import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills:any[] = [
    {
      name:'Angular',
      level:'Intermidiate',
      rating:'80'
    },
    {
      name:'HTML,CSS',
      level:'Expert',
      rating:'85'
    },
    {
      name:'Javascript',
      level:'Expert',
      rating:'80'
    },
    {
      name:'TypeScript',
      level:'Expert',
      rating:'70'
    },
    {
      name:'JQuery',
      level:'Expert',
      rating:'70'
    },
    {
      name:'Node JS',
      level:'Average',
      rating:'60'
    },
    {
      name:'C',
      level:'Average',
      rating:'60'
    },
  ]

}
