import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Portfolio';
  currentSection : Number; //0 home, 1 skills, 2 projets, 3 contact
  language_choosed : Number; //1 french, 2 english
  title_section:String;
  navbar:String[] = new Array("Home","Skills","Projects","Contact");
  flag_path_img:String;

  ngOnInit() {
    this.initializeContent();
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";   
  }

  changeSection(selected){
    if(this.language_choosed == 1){
      this.resetDefaultValuesSelectedFrench();
    } else if (this.language_choosed == 2){
      this.resetDefaultValuesSelectedEnglish();
    }
    if(selected != null){
      if(selected == 0 || selected == 1 || selected == 2 || selected == 3){
        this.currentSection = selected;
        this.navbar[selected] = this.navbar[selected] + " ←"; 
        if(selected == 2){
          document.getElementById("main").style.height = "1400px";
        } else{
          document.getElementById("main").style.height = "800px";
        }
      } else{     
        this.currentSection = 1;
        this.navbar[0] = this.navbar[0] + " ←";        
      }
    } else{
      this.currentSection = 1;
      this.navbar[0] = this.navbar[0] + " ←"; 
    }
    this.title_section = this.navbar[this.currentSection.valueOf()];
    this.title_section = this.title_section.substring(0, this.title_section.length - 1);
    this.changeBackgroundImg();
  }

  changeBackgroundImg(){
    if(this.currentSection == 0){
      document.getElementById("container_top").style.backgroundColor = "rgb(0, 122, 131)";
      document.getElementById("title_container").style.backgroundColor = "rgb(130, 213, 219);";
      document.getElementById("main").style.backgroundImage = "url('assets/img/background1.png')";
    } else if(this.currentSection == 1){
      document.getElementById("container_top").style.backgroundColor = "rgb(32, 0, 30)";
      document.getElementById("title_container").style.backgroundColor = "rgb(219, 218, 218)";
      document.getElementById("main").style.backgroundImage = "url('assets/img/background2.jpg')";
    } else if(this.currentSection == 2){
      document.getElementById("container_top").style.backgroundColor = "rgb(0, 122, 131)";
      document.getElementById("title_container").style.backgroundColor = "rgb(130, 213, 219);";
      document.getElementById("main").style.backgroundImage = "url('assets/img/background3.png')";
    } else if(this.currentSection == 3){
      document.getElementById("container_top").style.backgroundColor = "rgb(0, 122, 131)";
      document.getElementById("title_container").style.backgroundColor = "rgb(130, 213, 219);";
      document.getElementById("main").style.backgroundImage = "url('assets/img/fantasy.jpg')";
    } else{
      document.getElementById("container_top").style.backgroundColor = "rgb(0, 122, 131)";
      document.getElementById("title_container").style.backgroundColor = "rgb(130, 213, 219);";
      document.getElementById("main").style.backgroundImage = "url('assets/img/background.png')";
    }
  }

  changeLanguage(){
    if(this.flag_path_img == "assets/img/france-flag-icon-32.png"){
      this.flag_path_img = "assets/img/united-kingdom-flag-icon-32.png"; 
      this.language_choosed = 1;
      this.resetDefaultValuesSelectedFrench();
      this.addSelectedSection(this.currentSection);
    } else if (this.flag_path_img == "assets/img/united-kingdom-flag-icon-32.png"){
      this.flag_path_img = "assets/img/france-flag-icon-32.png";    
      this.language_choosed = 2;
      this.resetDefaultValuesSelectedEnglish();
      this.addSelectedSection(this.currentSection);
    }
    this.title_section = this.navbar[this.currentSection.valueOf()];
    this.title_section = this.title_section.substring(0, this.title_section.length - 1);
  }

  addSelectedSection(selected){
    if(selected == 0){
      this.navbar[0] = this.navbar[0] + " ←"; 
    } else if (selected == 1){
      this.navbar[1] = this.navbar[1] + " ←"; 
    } else if (selected == 2){
      this.navbar[2] = this.navbar[2] + " ←"; 
    } else if (selected == 3){
      this.navbar[3] = this.navbar[3] + " ←"; 
    } else {
      this.navbar[0] = this.navbar[0] + " ←"; 
    }
  }

  resetDefaultValuesSelectedFrench(){
      this.navbar[0] = "Accueil";
      this.navbar[1] = "Compétences";
      this.navbar[2] = "Projets";
      this.navbar[3] = "Contact";
  }

  resetDefaultValuesSelectedEnglish(){
      this.navbar[0] = "Home";
      this.navbar[1] = "Skills";
      this.navbar[2] = "Projects";
      this.navbar[3] = "Contact";
  }

  openNav() {
    if(document.body.contains(document.getElementById("mySidenav")))
    document.getElementById("mySidenav").style.width = "250px";
    if(document.body.contains(document.getElementById("main")))
    document.getElementById("main").style.marginLeft = "250px";
    if(document.body.contains(document.getElementById("btn-navbar")))
    document.getElementById("btn-navbar").style.visibility = "hidden";
    if(document.body.contains(document.getElementById("title_container")))
    document.getElementById("title_container").style.marginLeft = "20%";
    if(document.body.contains(document.getElementById("projects_section"))){
      document.getElementById("projects_section").style.marginRight = "10%";
      document.getElementById("projects_section").style.borderColor = "rgb(238, 233, 164)";
    }

  }

  closeNav() {
    if(document.body.contains(document.getElementById("mySidenav")))
    document.getElementById("mySidenav").style.width = "0";
    if(document.body.contains(document.getElementById("main")))
    document.getElementById("main").style.marginLeft = "0";
    if(document.body.contains(document.getElementById("btn-navbar")))
    document.getElementById("btn-navbar").style.visibility = "visible";
    if(document.body.contains(document.getElementById("title_container")))
    document.getElementById("title_container").style.marginLeft = "10%";
    if(document.body.contains(document.getElementById("projects_section"))){
      document.getElementById("projects_section").style.marginRight = "20%";
      document.getElementById("projects_section").style.borderColor = "rgb(255, 255, 255)";
    }
  } 

  initializeContent(){
    this.flag_path_img = "assets/img/france-flag-icon-32.png";
    this.currentSection = 0;
    this.language_choosed = 2;
    this.title_section = "Home";
    this.navbar[0] = this.navbar[0] + " ←";
  }

}
