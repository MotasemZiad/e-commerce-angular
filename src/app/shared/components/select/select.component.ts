import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() title: string = '';
  @Input() options: any[] = [];
  @Output('selectedValue') selectedValue = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  detectChanges(event: any) {
    this.selectedValue.emit(event);
  }
}
