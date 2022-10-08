import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild('menuContainer') menuContainer!: ElementRef;
  menuJSON: MenuItem[] = [
    {
      name: 'File',
      description: null,
      subMenu: [
        { name: 'New', description: null, subMenu: null },
        { name: 'Open', description: null, subMenu: null },
        { name: 'Save', description: null, subMenu: null },
      ],
    },
    {
      name: 'Edit',
      description: null,
      subMenu: [
        { name: 'Cut', description: null, subMenu: null },
        { name: 'Copy', description: null, subMenu: null },
        { name: 'Paste', description: null, subMenu: null },
        { name: 'Paste', description: null, subMenu: null },
        { name: 'Find', description: null, subMenu: null },
        { name: 'Replace', description: null, subMenu: null },
      ],
    },
    {
      name: 'View',
      description: null,
      subMenu: [
        { name: 'Cats', description: null, subMenu: null },
        { name: 'Porn', description: null, subMenu: null },
        { name: 'Movie', description: null, subMenu: null },
      ],
    },
    { name: 'Help', description: null, subMenu: null },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.addListByJSON(
      this.menuJSON,
      this.menuContainer.nativeElement,
      'root-ul'
    );
  }

  addListByJSON(menuJSON: any, menuContainer: any, className: string) {
    if (menuJSON.length) {
      const ul = document.createElement('ul');
      ul.className = className;

      menuJSON.forEach((item: MenuItem) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = item.name;

        li.appendChild(span);
        ul.appendChild(li);

        if (item.subMenu?.length) {
          this.addListByJSON(item.subMenu, li, '');
        }
      });

      menuContainer.appendChild(ul);
    }
  }
}
