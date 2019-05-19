import {
  Component,
  OnInit
}

from '@angular/core';

@Component( {
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
  }

) export class CarComponent implements OnInit {

  model: string;
  speed: number;
  name: string;
  wheels: boolean;
  colors: Colors;
  options: string[];
  test: any;
  isEdit: boolean = false;

  constructor() {}

  ngOnInit() {
    this.name='Ferrari';
    this.speed=235;
    this.model='Enzo';

    this.colors= {
      car: ' Червоний',
        salon: ' Слонова кість',
        wheels: ' Золотистий'
    };
    this.options=['ABS',
    'CRUISE CONTROL',
    'TREK SYSTEM'
    ];
    // this.test = true;

  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

addOpt(option){
  this.options.unshift(option);
  return false;
}

deleteOpt(option) {
  for(let i = 0; i < this.options.length; i++) {
if(this.options[i] == option) {
this.options.splice(i, 1);
break;
  }
 }
}

  carSelect(carName) {
    if (carName=='tesla') {
      this.name='Tesla';
      this.speed=360;
      this.model='X';
      this.colors= {
        car: ' Чорний металлік',
          salon: ' Білий',
          wheels: ' Чорний металлік'
      };
      this.options=['ABS',
      'AUTOPILOTS',
      'AUTO PARKINGS'
      ];

    } else if (carName=='ferrari') {
      this.name='Ferrari';
      this.speed=235;
      this.model='Enzo';

      this.colors= {
        car: ' Червоний',
          salon: ' Слонова кість',
          wheels: ' Золотистий'
      };
      this.options=['ABS',
      'CRUISE CONTROL',
      'TREK SYSTEM'
      ];

    }  else  {
      this.name='Mercedes';
      this.speed=320;
      this.model='AMG';
      this.colors= {
        car: ' Білий',
          salon: ' Чорний',
          wheels: ' Срібний'
      };
      this.options=['ABS',
      'ABC'];
    }
  }
}

interface Colors {
  car: string,
    salon: string,
    wheels: string
}
