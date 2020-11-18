import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Portfolio';
  projectsSelected = 1;
  imgProjectUrl = "../assets/img/1.jpg";

  ngOnInit() {
    
  }

  secret(){
    console.log("TO DO");
  }

  changeProjectText(projectNumber){
    if(projectNumber != null){
      this.projectsSelected = projectNumber;
      this.resetBorderColor();
      switch (projectNumber) {
        case 1: document.getElementById("project_1").style.borderColor = "red";
                this.imgProjectUrl = "../assets/img/1.jpg";
                break;
        case 2: document.getElementById("project_2").style.borderColor = "red";
                this.imgProjectUrl = "../assets/img/2.jpg";
                break;
        case 3: document.getElementById("project_3").style.borderColor = "red";
                this.imgProjectUrl = "../assets/img/3.png";
                break;
        case 4: document.getElementById("project_4").style.borderColor = "red";
                this.imgProjectUrl = "../assets/img/4.jpg";
                break;
      }
    }
  }

  resetBorderColor(){
    document.getElementById("project_1").style.borderColor = "black";
    document.getElementById("project_2").style.borderColor = "black";
    document.getElementById("project_3").style.borderColor = "black";
    document.getElementById("project_4").style.borderColor = "black";
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
