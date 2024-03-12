import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects:any[] = [
    {
      title:'FastMech.Com',
      technology:'HTML,CSS,Javascript,Angular,NodeJS',
      discription:[
        'Worked as a frount-End Devloper in this project',
        'Worked as a Team Leader'
      ]
    },
    {
      title:'Employee Demo',
      technology:'HTML,CSS,Angular',
      discription:[
        'Worked as a frount-End Devloper in this project',
        'Worked as a Team Leader'
      ]
    },
    {
      title:'FlipCart Demo',
      technology:'HTML,CSS,Angular',
      discription:[
        'Worked as a frount-End Devloper in this project',
        'Worked as a Team Leader'
      ]
    },
    {
      title:'NatflixClone',
      technology:'HTML,CSS,Angular',
      discription:[
        'Worked as a frount-End Devloper in this project',
        'Worked as a Team Leader'
      ]
    },
    {
      title:'MEAN-stak-Demo',
      technology:'HTML,CSS,Angular,NodeJS,MongoDB',
      discription:[
        'Worked as a full-stake Devloper in this project',
        'Worked as a Team Leader'
      ]
    },
    {
      title:'DPRS',
      technology:'HTML,CSS,Angular,.NET,SQL',
      discription:[
        'Worked as a frount-End Devloper in this project',
        'Worked as a Team Leader'
      ]
    },
    {
      title:'ZeraReports',
      technology:'HTML,CSS,Angular,.NET,SQL',
      discription:[
        'Worked as a frount-End Devloper in this project',
        'Worked as a Team Leader'
      ]
    },
  ]

}
