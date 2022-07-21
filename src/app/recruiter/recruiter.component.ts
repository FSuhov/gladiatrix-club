import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  @Output() attackerAdded = new EventEmitter<{name: string, description: string}>();
  @Output() defenderAdded = new EventEmitter<{name: string, description: string}>();

  //name = '';
  //description = '';
  @ViewChild('girlDescriptionInput', {static: true}) girlDescriptionInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddAttacker(nameInput: HTMLInputElement){
    
    this.attackerAdded.emit({name: nameInput.value, description: this.girlDescriptionInput.nativeElement.value});
  }

  onAddDefender(nameInput: HTMLInputElement){
    this.defenderAdded.emit({name: nameInput.value, description: this.girlDescriptionInput.nativeElement.value});
  }
  
}
