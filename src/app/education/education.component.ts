import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationList:any[]=[
    {
      institute:'The Patel School,Moviya',
      course:'SSC',
      duration:'2017',
      score:'87%'
    },
    {
      institute:'Creative Science School,Rajkot',
      course:'HSC',
      duration:'2018-2019',
      score:'68%'
    },
    {
      institute:'Parul University,Vadodara',
      course:'B.tech(CSE)',
      duration:'2019-2023',
      score:'8.01 CGPA'
    },
  ]

}
