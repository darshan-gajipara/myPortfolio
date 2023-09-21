import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experiance',
  templateUrl: './work-experiance.component.html',
  styleUrls: ['./work-experiance.component.css']
})
export class WorkExperianceComponent {


  workExpList:any[] = [
    {
      role:'Trainee',
      company:'NQOX,Surat',
      duration:'6 Months',
      description:[
        'Worked On HTML,CSS,JAVASCRIPT'
      ]
    },
    {
      role:'Jr.Software Devloper',
      company:'Natrix Software,Surat',
      duration:'jan 2023 - Running',
      description:[
        'Working On HTML,CSS,JAVASCRIPT',
        'Working On javascript Freamwork Angular'
      ]
    }
  ]

}
