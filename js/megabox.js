      //review 슬라이드 up 함수
       function slideTop(){
          $(".a5 .a5_review ul").stop(true,true).animate({"margin-top":"-=45px"},1000,function(){
               $(".a5 .a5_review ul li:first-child").appendTo(".a5 .a5_review ul");
               $(this).css({"margin-top":"0"});
          });
     }

     //공지사항 슬라이드 up함수
       function slideBottom(){
          $(".a7 ul").stop(true,true).animate({"margin-top":"-=25px"},1000,function(){
               $(".a7 ul li:first-child").appendTo(".a7 ul");
               $(this).css({"margin-top":"0"});
          });
     }


$(document).ready(function(){
      
      $(".my_megabox").click(function(){
            alert("로그인 후 이용하실 수 있습니다.");
            
      })

       setInterval("slideTop()",5000); //리뷰 자동화
     
       setInterval("slideBottom()",6000);   //공지사항 자동화 함
     
    
      //메뉴 스크롤시 배경진하게
      $(window).scroll(function(){
          
            if($(this).scrollTop() > 200){
                  $("#logo_bar").css({"background":"#fff"});
            }else{
                  $("#logo_bar").css({"background":"rgba(255,255,255,0.4)"});
            }
      });

     /*메뉴/ 로그인  / 회원가입 */
     $(".menu_btn").click(function(){
          $(".nav_bg").fadeIn();
          $("#nav").stop(true,true).animate({right:"0"});
           $("#nav").css({"overflowY":"scroll"})
     });

     $(".cross").click(function(){
          $(".nav_bg").fadeOut();
          $("#nav, .login_bg, .singup_bg").stop(true,true).animate({right:"-100%"});
     });

       $("#nav .login").click(function(){
          $(".login_bg").stop(true,true).animate({right:"0"});
     });
      
      $("#nav .signup").click(function(){
          $(".singup_bg").stop(true,true).animate({right:"0"});
     });

      
     //영화 예 매 탭메뉴
     $(".a1 > .tab>li>a").click(function(){
             
          $(".a1> .tab>li>a").removeClass("selected");   
		  $(this).addClass("selected");    
		  $(".panel > li").hide();  
		  $($(this).attr("href")).css({"opacity":"1"}).fadeIn();  
		
		return false;  
	});
	
      //이벤트 탭메뉴
	$(".a4 > .tab > li >a").click(function(){
		$(".a4>.tab >  li > a").removeClass("selected1");   
		$(this).addClass("selected1");    
		$(".a4 > .panel2 > li").hide();  
		$($(this).attr("href")).css({"opacity":"1"}).fadeIn();
		
		return false; 
	});
	
     //탑버튼
     $(window).scroll(function(){
     
          if($(this).scrollTop() > 400){
               $(".top_btn").show();
          }else{
               $(".top_btn").hide();
          }
          
     })
     
     $(".top_btn").click(function(){
          $('body, html').animate({scrollTop:"0"},700);
     })
      
      
      /*영화관 선택  탭메뉴*/
      $(".movie1_tab li").click(function(){
              val = $(this).index();

              num=+40*val;

              $(".tab_highlight").animate({"top":num});
              $(".movie1_tab li> a").css({"color":"black","font-weight":"100"});    
              $(this).find(">a").css({"color":"#361f66","font-weight":"bold"}); 

              $(".movie1_panel>li").hide();   
              $($(this).find(">a").attr("href")).stop(true,true).fadeIn();
    });
    
      //서치 클릭시
      aa=true;
      $(".movie1 .search").click(function(){
            $(".search_input").slideToggle();
         
      });
      
      /*영화 선택 탭메뉴*/
     $(".movie2_tab li a").click(function(){
             
          $(".movie2_tab li a").removeClass("on");   
		  $(this).addClass("on");    
		  $(".movie2_panel > li").hide();  
		  $($(this).attr("href")).show();  
		
		return false;  
	});
	
      /*영화 탭메뉴*/
      $(".movie3_tab li a").click(function(){
             
          $(".movie3_tab li a").removeClass("on1");   
		  $(this).addClass("on1");    
		  $(".movie3_panel > li").hide();  
		  $($(this).attr("href")).show();  
		
		return false;  
	});
      
      
      //스토어 탭메뉴
      $(".movie4_tab li").click(function(){
              val = $(this).index();

              num=+40*val;

              $(".tab4_highlight").animate({"top":num});
              $(".movie4_tab li a").css({"color":"black","font-weight":"100"});    
              $(this).find(">a").css({"color":"#361f66","font-weight":"bold"}); 

              $(".movie4_panel>li").hide();   
              $($(this).find(">a").attr("href")).stop(true,true).fadeIn();
    });
    
      //공지사항 아코디언 메뉴
      
      $(".moive9_notice dl dt").click(function(){
            $(this).find("span").toggleClass("pluss")
            $(this).next("dd").slideToggle();     
      });

      
      //이벤트 탭메뉴
      $(".movie8_tab li a").click(function(){
             
          $(".movie8_tab li a").removeClass("on3");   
		  $(this).addClass("on3");    
		  $(".movie8_panel > li").hide();  
		  $($(this).attr("href")).show();  
		
            return false;  
	});

      //영화 예매 
      $(".movie10_theater dd:not(:first)").css("display","none");
      $(".movie10_theater dt:first").find("span").addClass("plusss");
      
      	$(".movie10_theater dl dt").click(function(){
		
		if($(this).find("+dd").css("display")=="none"){
              
			$("dd").slideUp("slow"); 
			$(".movie10_theater dl dt").find("span").removeClass("plusss");
			$(this).find("+dd").slideDown("slow");
            $(this).find("span").addClass("plusss")  
		}
              
	});
      
      $(".movie10_date ul li").click(function(){
            $(".movie10_date ul li").removeClass("active");
            $(this).addClass("active");
            
      })
      
      /* 현재 날짜*/
          var now=new Date();
          var month=now.getMonth()+1;
          var date=now.getDate() ;
          var full="2019년 "+ month +"월 " +date+"일";

       /*현재날짜*/
	  $(".movie10_date1").text(full);
      $(".movie10_date ul li:first-child span").text(date);
      $(".movie10_date ul li:nth-child(2) span").text(date+1);
      $(".movie10_date ul li:nth-child(3) span").text(date+2);
      $(".movie10_date ul li:nth-child(4) span").text(date+3);
      $(".movie10_date ul li:nth-child(5) span").text(date+4);
      $(".movie10_date ul li:nth-child(6) span").text(date+5);
      $(".movie10_date ul li:nth-child(7) span").text(date+6);
      
      
      
      
      
     
});




