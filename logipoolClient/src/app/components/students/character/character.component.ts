import { Component, OnInit } from '@angular/core';

export default class Character {
  actor_name: String;
  character_name: String;
  gender: String;
  status: String;
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})

export class CharacterComponent implements OnInit {

  characters: Character[] = [
    {
      actor_name: 'Peter Dinklage',
      character_name: 'Tyrion Lannister',
      gender: 'Male',
      status: 'Alive'
    },
    {
      actor_name: 'Sean Bean',
      character_name: 'Ned Stark',
      gender: 'Male',
      status: 'Dead'
    },
    {
      actor_name: 'Emilia Clark',
      character_name: 'Khaleesi',
      gender: 'Female',
      status: 'Alive'
    },
    {
      actor_name: 'Catelyn Stark',
      character_name: 'Michelle Fairley',
      gender: 'Female',
      status: 'Dead'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
