import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  @Input() text = '';
  @Input() link = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
