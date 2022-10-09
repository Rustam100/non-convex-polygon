import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from 'src/app/interfaces/menu.interface';
import { MenuService } from 'src/app/services/menu.service';
import { PolygonModalComponent } from '../polygon-modal/polygon-modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [NgbModalConfig, NgbModal],
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
        {
          name: 'Copy',
          description: null,
          subMenu: [
            { name: 'Copy 1', description: null, subMenu: null },
            {
              name: 'Copy 2',
              description: null,
              subMenu: [
                { name: 'Copy 21', description: null, subMenu: null },
                { name: 'Copy 22', description: null, subMenu: null },
                { name: 'Copy 23', description: null, subMenu: null },
              ],
            },
            { name: 'Copy 3', description: null, subMenu: null },
          ],
        },
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

  constructor(
    private elementRef: ElementRef,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private menuService: MenuService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.getMenu();
  }

  getMenu() {
    this.menuService.getMenu().subscribe((data: MenuItem[]) => {
      console.log(data);
      // this.menuJSON = data;

      this.addListByJSON(
        this.menuJSON,
        this.menuContainer.nativeElement,
        'root-ul'
      );

      this.elementRef.nativeElement
        .querySelector('.root-ul')
        .addEventListener('click', this.onClick.bind(this));
    });
  }

  onClick(event: any) {
    if (event.target.nodeName !== 'SPAN') return;

    this.closeAllSubMenu(event.target.nextElementSibling);

    event.target?.classList?.toggle('sub-menu-active-span');
    event.target.nextElementSibling?.classList?.toggle('sub-menu-active');
  }

  closeAllSubMenu(current: any = null) {
    let parents: Element[] = [];
    if (current) {
      let currentParent = current.parentNode;

      while (currentParent) {
        if (currentParent.classList.contains('root-ul')) break;

        if (currentParent.nodeName === 'UL') parents.push(currentParent);

        currentParent = currentParent.parentNode;
      }
    }

    const subMenu = document.querySelectorAll('.root-ul ul');

    Array.from(subMenu).forEach((item: Element) => {
      if (item !== current && !parents.includes(item)) {
        item.classList.remove('sub-menu-active');

        if (item.previousElementSibling?.nodeName === 'SPAN') {
          item.previousElementSibling.classList.remove('sub-menu-active-span');
        }
      }
    });
  }

  addListByJSON(
    menuJSON: MenuItem[],
    menuContainer: HTMLElement,
    className: string
  ) {
    if (menuJSON.length) {
      const ul = document.createElement('ul');
      ul.className = className;

      menuJSON.forEach((item: MenuItem) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = item.name;

        const div = document.createElement('div');
        const i = document.createElement('i');
        i.className = 'arrow-right';
        div.appendChild(i);

        if (item.subMenu?.length) {
          span.appendChild(div);
          li.appendChild(span);
          ul.appendChild(li);

          this.addListByJSON(item.subMenu, li, '');
        } else {
          li.appendChild(span);
          ul.appendChild(li);
        }
      });

      menuContainer.appendChild(ul);
    }
  }

  open() {
    const modalRef = this.modalService.open(PolygonModalComponent);
    modalRef.componentInstance.name = 'World';
  }
}
