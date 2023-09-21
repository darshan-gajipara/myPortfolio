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
    ['Work Exp' , '6 Months'],
    ['Education' , 'B.tech(CSE)'],
    ['interests', 'Cricket']
  ]
  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 6 months of experience in software industry.',
    'Worked as Trainee at Natrix Software,Surat',
  ];

  constructor(){}

  ngOnInit(){

  }

}
