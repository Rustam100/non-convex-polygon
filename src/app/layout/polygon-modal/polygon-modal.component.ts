import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-polygon-modal',
  templateUrl: './polygon-modal.component.html',
  styleUrls: ['./polygon-modal.component.scss'],
})
export class PolygonModalComponent implements OnInit {
  @Input() name: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
