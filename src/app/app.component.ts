import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  currentSection : Number;
  home:String = "Home";
  skills:String = "Skills";
  projects:String = "Projects";
  contact:String = "Contact";
  flag_path_img:String;

  ngOnInit() {
    this.flag_path_img = "assets/img/united-kingdom-flag-icon-32.png";
    this.currentSection = 1;
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";  
  }

  changeSection(selected){
    if(selected != null){
      if(selected == 1 || selected == 2 || selected == 3 || selected == 4){
        this.currentSection = selected;
      } else{
        this.currentSection = 1;
      }
    } else{
      this.currentSection = 1;
    }
  }

  changeLanguage(){
    if(this.flag_path_img == "assets/img/united-kingdom-flag-icon-32.png"){
      this.flag_path_img = "assets/img/france-flag-icon-32.png";
      this.home = "Accueil";
      this.skills = "Compétences";
      this.projects = "Projets";
    } else{
      this.flag_path_img = "assets/img/united-kingdom-flag-icon-32.png";
      this.home = "Home";
      this.skills = "Skills";
      this.projects = "Projects";
    }
  }
  /*
  openNav() {
    console.log("aaa");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    console.log("bbb");
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } */
}
