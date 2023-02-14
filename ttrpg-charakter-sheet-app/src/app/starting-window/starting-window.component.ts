import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-starting-window',
  templateUrl: './starting-window.component.html',
  styleUrls: ['./starting-window.component.scss'],
})
/*
  Was muss alles darauf:
    Stats, Health, Initiative, Prof Bonus, Speed, AC
    Saves, Passive (Perception,Stealth)
    Proficiencies and Languages 
    Skills
    Attacks, Spells, Inventory, Features & Traits, Descriptions, Notes, Extras
    Short and long Rest buttons
    Damage Heal Calculator
    Ressourcen Tracker
*/
export class StartingWindowComponent {
  tiles: Tile[] = [
    { text: 'Stats, Health, Initiative, Prof Bonus, Speed, AC', cols: 1, rows: 3, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 2, color: '#DDBDF1' },
  ];
}
