import { Component, OnInit, HostListener} from '@angular/core';

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
  color:String = "rgb(37, 189, 181)";
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
    if(window.scrollY >= 246 && window.scrollY < 1146){
      document.getElementById('menu_1').style.color = "green";
    } else if(window.scrollY >= 1146 && window.scrollY < 2388){
      document.getElementById('menu_2').style.color = "green";
    } else if(window.scrollY >= 2388 && window.scrollY < 4266){
      document.getElementById('menu_3').style.color = "green";
    }else if(window.scrollY >= 4266){
      document.getElementById('menu_4').style.color = "green";
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
    document.getElementById('menu_'+category).style.color = this.backToInitialColor();
  }

  backToInitialColor(){
    let actualColor;
    if(this.color == "rgb(37, 189, 181)"){
      actualColor = "rgb(37, 189, 181)";
    } else {
      actualColor = "white";
    }
    return actualColor;
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
      this.color = "white";
    } 
    else if(window.scrollY == 0 && document.getElementById('nav').className == 'scroll'){
      document.getElementById('nav').className = '';
      this.color = "rgb(37, 189, 181)";
    }
    
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
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

}
