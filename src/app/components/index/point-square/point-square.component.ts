import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-point-square',
  templateUrl: './point-square.component.html',
  styleUrls: ['./point-square.component.scss']
})
export class PointSquareComponent implements OnInit {

  @Input() public header : string;
  @Input() public link : string;
  @Input() public color : string;
  @Input() public subheader : string;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  handleClick() {
    this.router.navigate([this.link])
  }
}
