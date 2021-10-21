import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../model/user';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  @Input() user: User;
  @Output() event = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTemplate(value: string): void {
    this.event.emit(value);
  }
}
