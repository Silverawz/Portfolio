import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  title = 'Portfolio';
  menu:String = "Ouvrir";
  msg_introduction:String = "Bonjour, je m'appelle Nicolas Deroussen";
  color:String = "white";
  currentSection:number = 1;
  timer:number = 100;
  index:number = 0;

 
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
    this.typeWriter();
    particlesJS.load('particles-js', 'assets/data/particles.json');
    //, particlesJS.load('particles-js', 'assets/data/particles.json'function() { console.log('callback - particles.js config loaded'); });
    window.addEventListener('scroll', this.scroll2, true); //third parameter
  }

  scroll2 = (event): void => {
    this.backAllToInitialColor();
    if(window.scrollY >= 0 && window.scrollY < 1146){
      document.getElementById('menu_1').style.color = "green";
      if(this.currentSection != 1) this.currentSection = 1;
    }  else if(window.scrollY >= 1146 && window.scrollY < 2330){
      document.getElementById('menu_2').style.color = "green";
      if(this.currentSection != 2) this.currentSection = 2;
    } else if(window.scrollY >= 2330 && window.scrollY < 3381){
      document.getElementById('menu_3').style.color = "green";
      if(this.currentSection != 3) this.currentSection = 3;
    } else if(window.scrollY >= 3381){
      document.getElementById('menu_4').style.color = "green";
      if(this.currentSection != 4) this.currentSection = 4;
    }
  }




  typeWriter() {
    if (this.index < this.msg_introduction.length) {
      document.querySelector(".message").innerHTML += this.msg_introduction[this.index];
      this.index++;
      if(this.index == 8){
        setTimeout(this.typeWriter.bind(this), this.timer*5);
      } else{
        setTimeout(this.typeWriter.bind(this), this.timer);
      }
    }
  }

  over(category){
    document.getElementById('menu_'+category).style.color = "red";
  }

  out(category){
    document.getElementById('menu_'+category).style.color = this.backToInitialColor(category);
  }

  backToInitialColor(category){
    this.color = "white";
    if(this.currentSection == category){
      return "green";
    } 
    return "white";
  } 

  backAllToInitialColor(){
    let actualColor;
    if(this.color == "rgb(37, 189, 181)"){
      actualColor = "rgb(37, 189, 181)";
    } else {
      actualColor = "white";
    }
    document.getElementById('menu_1').style.color = actualColor;
    document.getElementById('menu_2').style.color = actualColor;
    document.getElementById('menu_3').style.color = actualColor;
    document.getElementById('menu_4').style.color = actualColor;
  }
  // ngOnDestroy() {
  //   window.removeEventListener('scroll', this.scroll, true);
  // }

 
  scroll = (event): void => {
    if(window.scrollY > 0 && document.getElementById('nav').className != 'scroll'){
      document.getElementById('nav').className = 'scroll';
    } 
    else if(window.scrollY == 0 && document.getElementById('nav').className == 'scroll'){
      document.getElementById('nav').className = '';
    }

  };  

  hamburger(){
    if(document.getElementById('nav-ul').className != 'true'){
      document.getElementById('nav-ul').className = 'true';
      this.menu = "Fermer";
    }   
    else{
      document.getElementById('nav-ul').className = 'false';
      this.menu = "Ouvrir";
    }
   
  }


  /*
  $(document).ready(function()
  {
      $(".hamburger").on("click", function(){
          $("nav ul").toggleClass("menu");
      });
  });
  
  
  
  
          $(window).on("scroll", function() {
              if($(window).scrollTop()){
                              $('nav').addClass('scroll');
                          }
                          else{
                          $('nav').removeClass('scroll');
                          }
          }) */

  moveToSection(sectionNumber){
    if(sectionNumber == 1) document.getElementById('home').scrollIntoView({behavior:"smooth"});
    else if(sectionNumber == 2) document.getElementById('skills').scrollIntoView({behavior:"smooth"});
    else if(sectionNumber == 3) document.getElementById('projects').scrollIntoView({behavior:"smooth"});
    else if(sectionNumber == 4) document.getElementById('contact').scrollIntoView({behavior:"smooth"});
    else document.getElementById('home').scrollIntoView({behavior:"smooth"});
  }
}
