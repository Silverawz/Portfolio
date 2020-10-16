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
  content:String[] = new Array(" "," "," "," ");

  ngOnInit() {
    this.flag_path_img = "assets/img/france-flag-icon-32.png";
    this.currentSection = 1;
    this.content[0] = "Home page";
    this.content[1] = "Skills page";
    this.content[2] = "Projects page";
    this.content[3] = "Contact page";
    document.getElementById("mySidenav").style.width = "180px";
    document.getElementById("main").style.marginLeft = "180px";        
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
    let language_choosed;
    if(this.flag_path_img == "assets/img/france-flag-icon-32.png"){
      this.flag_path_img = "assets/img/united-kingdom-flag-icon-32.png";
      this.home = "Accueil";
      this.skills = "Compétences";
      this.projects = "Projets";
      language_choosed = 1;
    } else if (this.flag_path_img == "assets/img/united-kingdom-flag-icon-32.png"){
      this.flag_path_img = "assets/img/france-flag-icon-32.png";    
      this.home = "Home";
      this.skills = "Skills";
      this.projects = "Projects";
      language_choosed = 2;
    }
    this.changeContent(language_choosed);
  }

  changeContent(language_choosed){
    if(language_choosed == 1){
      this.content[0] = "Page d'accueil";
      this.content[1] = "Page de compétences";
      this.content[2] = "Page de projets";
      this.content[3] = "Page de contact";
    } else if (language_choosed == 2){
      this.content[0] = "Home page";
      this.content[1] = "Skills page";
      this.content[2] = "Projects page";
      this.content[3] = "Contact page";
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
