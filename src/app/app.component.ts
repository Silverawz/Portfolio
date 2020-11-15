import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Portfolio';
  projectsSelected = 1;

  ngOnInit() {

  }

  changeProjectText(projectNumber){
    if(projectNumber != null)
    this.projectsSelected = projectNumber;
  }

  section(sectionNumber){
    if(sectionNumber != null) {
      switch (sectionNumber) {
        case 0: document.getElementById("effect").style.left = "12.5%";
                break;
        case 1: document.getElementById("effect").style.left = "37.5%";
                break;
        case 2: document.getElementById("effect").style.left = "62.5%";
                break;
        case 3: document.getElementById("effect").style.left = "87.5%";
                break;
      }
    }
  }
}
