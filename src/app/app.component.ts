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
  color:String = "black";
  timer:number = 100;
  index:number = 0;

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
    this.typeWriter();
    particlesJS.load('particles-js', 'assets/data/particles.json');
    //, particlesJS.load('particles-js', 'assets/data/particles.json'function() { console.log('callback - particles.js config loaded'); });
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
      this.color = "black";
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
