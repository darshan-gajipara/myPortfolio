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
  ]

}
