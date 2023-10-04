import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {

  myData:string[][] = [
    ['Name' , 'Darshan Gajipara'],
    ['Dob' , '26th Feb 2001'],
    ['Work Exp' , '1 year'],
    ['Education' , 'B.tech(CSE)'],
    ['interests', 'Cricket']
  ]
  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 1 year of experience in software industry.',
    'Worked as Jr.software devloper at Natrix Software,Surat',
  ];

  constructor(){}

  ngOnInit(){

  }

}
