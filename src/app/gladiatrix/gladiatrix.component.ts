import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gladiatrix',
  templateUrl: './gladiatrix.component.html',
  styleUrls: ['./gladiatrix.component.css']
})
export class GladiatrixComponent implements OnInit {
  @Input('girlInstance') gladiatrix: { name: string, description: string, type: string }

  constructor() { }

  ngOnInit(): void {
  }

}
