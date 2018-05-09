import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'app';
  showModal = false;

  ngOnInit(){
  }

  goToProject(project){
    let win = null;
    switch(project){
      case 'acalmar':
        win = window.open('https://goo.gl/uahYKQ', '_blank');
        break;
      case 'iot':
        win = window.open('https://goo.gl/zsXcE9', '_blank');
        break;
      case 'splitwise':
        win = window.open('https://goo.gl/7UMZJV', '_blank');
        break;
      case 'xclarity' :
        win = window.open('https://goo.gl/zbVr9j', '_blank');
        break;
    }
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    }
  }

}
