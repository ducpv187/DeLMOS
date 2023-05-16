$(document).ready(function() {
  $(".js-showpopup").click(function() {
    $(this).parents().find(".modal__popup").addClass('block');
    $(this).parents().find(".modal__login .modal__content").addClass('show');
    $(this).parents().find(".modal__close").removeClass('show');
  });

  $(".modal__close").click(function() {
    $(this).parents().find(".modal__popup").removeClass('block');
    $(this).parents().find(".modal__login").removeClass('none');
    $(this).parents().find(".modal__forgot-pass").removeClass('block');
    $(this).parent(".modal__content").removeClass('show'); 
  });

  $(".modal__content").click(function(e) {
    e.stopPropagation(e);
  });
  
  $(".modal__popup").click(function() {
    $(this).removeClass('block');
    $(this).parents().find(".modal__content").removeClass('show');    
    $(this).parent().find(".modal__login").removeClass('none');   
    $(this).parent().find(".modal__forgot-pass").removeClass('block');   
  });

  //popup p-plan2(payment)
  $(".js-modalpaymentSucces").click(function() {  
    $(this).parents().find(".modal-sucess").addClass('active-modal');
    $(this).parents().find(".modal-sucess .modal-dialog").addClass('show');   
  });
  
  $(".js-modalpaymentError").click(function() {  
    $(this).parents().find(".modal-error").addClass('active-modal');
    $(this).parents().find(".modal-error .modal-dialog").addClass('show');   
  });

  $(".modal-payment").click(function() {    
    $(this).parents().find(".modal-payment").removeClass('active-modal');
    $(this).parents().find(".modal-payment .modal-dialog").removeClass('show');
   
  });

  $(".modal-payment .modal-close").click(function() {        
    $(this).parents().find(".modal-payment").removeClass('active-modal');   
    $(this).parents().find(".modal-payment .modal-dialog").removeClass('show');
  });

  $(".js-btnError").click(function() {      
    $(this).parents().find(".modal-payment").removeClass('active-modal');   
    $(this).parents().find(".modal-payment .modal-dialog").removeClass('show');
  });

  $(".modal-payment .modal-content").click(function(e) {    
    e.stopPropagation(e);
  });  
  //end popup p-plan2(payment)

  //modal alertDelete
  $(".js-modalAlertdelete").click(function() {  
    console.log("hihi");
    $(this).parents().find(".modal-alertdelete").addClass('active-modal');
    $(this).parents().find(".modal-alertdelete .modal-dialog").addClass('show');   
  });

  $(".modal-alertdelete").click(function() {    
    $(this).parents().find(".modal-alertdelete").removeClass('active-modal');
    $(this).parents().find(".modal-alertdelete .modal-dialog").removeClass('show');   
  });

  $(".modal-alertdelete .modal-close").click(function() {    
    $(this).parents().find(".modal-alertdelete").removeClass('active-modal');
    $(this).parents().find(".modal-alertdelete .modal-dialog").removeClass('show');   
  });

  //end modal alertDelete

  //modal popup modalLogin-forgot
  $(".js-modalLogin").click(function() {
    $(this).parents(".modal__popup").find(".modal__login .modal__content").removeClass('show');
    $(this).parents().find(".modal__login").addClass('none');
    $(this).parents(".modal__popup").find(".modal__forgot-pass").addClass('block');
    $(this).parents(".modal__popup").find(".modal__forgot-pass .modal__content").addClass('show');
  });

  $(".js-modalForgot").click(function() {
    $(this).parents().find(".modal__forgot-pass").removeClass('block');
    $(this).parents().find(".modal__login").removeClass('none');
    $(this).parents().find(".modal__login .modal__content").addClass('show');
  });
  //end popup modalLogin-forgot

  //add them for page form-expect(link het han)
  $(".forgot__password").click(function() {
    $(this).parents().find(".form__expired").addClass('d-none');
    $(this).parents().find(".modal__forgot-pass  ").addClass('d-block');
    $(this).parents().find(".modal__forgot-pass .modal__content").addClass('show_expired');
  });

  $(".modal__forgot-pass").click(function() {
    $(this).removeClass('d-block');
    $(this).parents().find(".form__expired").removeClass('d-none');
  });

  $(".modal__close").click(function() {
    $(this).parents().find(".form__expired ").removeClass('d-none');
    $(this).parents().find(".modal__forgot-pass").removeClass('d-block');
  });
  // end

  //page form register :show-hidden password
  $(".input__password .icon").click(function() { 
    let typePassword = $(this).parents().find(".input__password .input").attr("type");    
    if(typePassword == "password"){
      $(this).parents().find(".input__password .input").attr('type', 'text');       
    }
    else {
      $(this).parents().find(".input__password .input").attr('type', 'password');      
    }
  })
  
  //page form register : show-hidden icon  
  $(".input__password .icon .icon-hidden").click(function() {     
    $(this).addClass("d-none");
    $(this).siblings().addClass("d-block");
  })

  $(".input__password .icon .icon-show").click(function() { 
    $(this).removeClass("d-block");
    $(this).siblings().removeClass("d-none");
  })

  
  //page reset pass : show-hidden icon
  $(".form__reset .icon-show").click(function() {     
    $(this).addClass("d-none");
    $(this).siblings().addClass("d-block");
  })

  $(".form__reset .icon-hidden").click(function() {     
    $(this).removeClass("d-block");
    $(this).siblings().removeClass("d-none");
  })

 //page forgot password : show-hidden: icon->password

  $(".modal__edit .icon").click(function() {  
    let editPassInput = $(this).parent().find(".js-inputpass");
    console.log(editPassInput);
    if( editPassInput.attr('type') == "password" ){
      editPassInput.attr('type', 'text');       
    }
    else {
      editPassInput.attr('type', 'password');      
    }
  })

  // $(".js__newpass .icon").click(function() { 
  //   let typeNewPassword = $(this).parents().find(".js__newpass .input").attr("type");    
    
  //   if(typeNewPassword == "password"){
  //     $(this).parents().find(".js__newpass .input").attr('type', 'text');       
  //   }
  //   else {
  //     $(this).parents().find(".js__newpass .input").attr('type', 'password');      
  //   }
  // })

  // $(".js__resetpass .icon").click(function() { 
  //   let typeRePassword = $(this).parents().find(".js__resetpass .input").attr("type");    
 
  //   if(typeRePassword == "password"){
  //     $(this).parents().find(".js__resetpass .input").attr('type', 'text');       
  //   }
  //   else {
  //     $(this).parents().find(".js__resetpass .input").attr('type', 'password');      
  //   }
  // })

  //page list archive category
  $("input[type=radio]").click(function() {  
    let val = $(this).val();
    $('.cate-items').removeClass('dis-flex');
    $('#'+val).addClass('dis-flex');
    // console.log('#'+val);
    // if($(this).val() == "SQUARE,LANDSCAPE"){
    //   $(this).parents(".tab__content").siblings(".js-second").show();
    //   $(this).parents(".tab__content").siblings(".js-first").hide();     
    //   $(this).parents(".tab__content").siblings(".js-first").removeClass("show"); 
    // }
    // else if($(this).val() == "PORTRAIT") {
    //   $(this).parents(".tab__content").siblings(".js-first").show();
    //   $(this).parents(".tab__content").siblings(".js-second").hide();
    // }

  })

  //current time video
  $(".video_play").each(function(){
    let idVideo = $(this).attr('id');      
    document.getElementById(idVideo).currentTime = 0.1;
  });

  //hover autoplay video
  $(".video--items").mousemove(function(){
    let idVideo = $(this).find(".js-hoverVideo").attr('id');
    // console.log(idVideo);
    let video = document.getElementById(idVideo);
    $(this).find(".js-hoverVideo").addClass("active-video");
    video.play();
      // $(this).parent().find(".video_play").controls = false;    
      // document.getElementsByTagName("video").controls = false;    
    }
  );
  $(".video--items").mouseout(function(){
    let idVideo = $(this).find(".js-hoverVideo").attr('id');
    let video = document.getElementById(idVideo);    
    $(this).find(".js-hoverVideo").removeClass("active-video");   
    video.pause();     
    //reload video  when hover
    // document.getElementById("video").load();
  });

  $( ".video_play" ).each(function( index ) {    
    document.getElementById($(this).attr("id")).controls = false; 
  });

  //cach viet khac cach tren jquery
  // $.each( $( ".video_play" ), function( index ) {
  //   document.getElementById($(this).attr("id")).controls = false; 
  // });

  //c2
  // let x = document.getElementsByClassName("video_play");
  // console.log(x);
  // $.each(x, function( index, value ) {
  //   // console.log(value);
  //   let id = $(value).attr("id")
  //   // console.log(id);
  //       document.getElementById(id).controls = false; 
  // });


  // var video = $("video"); 
  //c1   
  // var video = document.getElementById("detail1");
  //c2
  // var videoQuery = document.querySelectorAll(".js-hoverVideo");
  // console.log(typeof video);  a
  // console.log(typeof videoQuery);  
  // Check if video is ready to play
  // $(video).on('canplay', function () {
  //   $(video).mouseenter(function () {
  //       $(this).get(0).play();
  //   }).mouseleave(function () {
  //       $(this).get(0).pause();
  //   })
  // }); 
 

  //c2
  // $(".video").hover(
  //   function () {
  //     $(this).parent().find(".video_play").addClass("active-video");
  //     document.getElementById("video").controls = false;    
  //   }, 
  //   function () {
  //     $(this).parent().find(".video_play").removeClass("active-video");
  //   }    
  // );


  // let urlClick  = '.link__nav' ;
  // $(urlClick).click(function(){
  //   let clickGetId = $(this).attr('id');
  //   console.log("click",clickGetId);  
  //   // console.log("value",value);
  //   let nextTab = $('#tabs-nav li');    
  //   let arrId = [];
  //   $.each(nextTab, function( index, value ) {
  //     arrId.push($(value).find('a').attr('href'));
  //     return arrId; 
  //   });
  //   console.log(arrId);  
  
  //   arrId.map((value,index) => {
  //     console.log("value",value);
  //     console.log("clickGetId",clickGetId);

  //     if(clickGetId === value){      
  //       $(clickGetId).parent('.tab--items').addClass('active');          
  //     }
  //     else if(clickGetId !== value) {
  //       $(clickGetId).parent('.tab--items').siblings().removeClass('active');
  //     }
  //   })
  // }); 
  

    
  // get url
  // let url = window.location.href;
  // let a = url;
  // console.log(url.split('#')[1]);

  //page__my--page 
  //function tab next

  // Show the first tab and hide the rest
  $('#tabs-nav li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first').show();

  // Click function
  $('#tabs-nav li').click(function(){
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    // console.log(activeTab);
    $(activeTab).fadeIn();
    return false;
  });

  //function edit value
      $(".js-showEdit").click(function() {    
        $(this).parents().find(".modal__edit").addClass('d-block');
      });

      $(".btn-cancel").click(function() {    
        $(this).parents().find(".modal__edit").removeClass('d-block');
      });

      $(".modal__confirmation").click(function(e) {
        e.stopPropagation(e);
      });

      $(".modal__edit").click(function() {
        $(this).removeClass('d-block');
      });

    //page mypage : show-hidden icon
    $(".modal__edit .icon-show").click(function() {     
      $(this).addClass("d-none");
      $(this).siblings().addClass("d-block");
    })
  
    $(".modal__edit .icon-hidden").click(function() {     
      $(this).removeClass("d-block");
      $(this).siblings().removeClass("d-none");
    })
    
  //end func page__my--page 


  //page-form-register
  $(".js-checkradio .input-radio .type-radio").click(function() {     
    let valueRadio =  $(this).val();  
     console.log( valueRadio);
     if(valueRadio == "0"){
      $(this).parents().find(".row-user").addClass("d-block");
      $(this).parents().find(".row-company").removeClass("d-block");
     }
     else if(valueRadio == "1"){
      $(this).parents().find(".row-user").addClass("d-none");
      $(this).parents().find(".row-user").removeClass("d-block");
      $(this).parents().find(".row-company").addClass("d-block");

     }
  })


  //check disable button
  $('.js-check-disabled button').prop('disabled',true) ;
  $('.js-check-disabled input').keyup(function() {     
    let checkedValue = true;
    $(this).parents('form').find('input').each(function(){
      if (!$(this).val()){
        return checkedValue  = false;
      }
      // console.log($(this).attr('name'));
   } )
   if(checkedValue) {
    $(this).parents('form').find('button').prop('disabled',false) ;
   }
   else {
    $(this).parents('form').find('button').prop('disabled',true) ;
   }
  })

  //show menu-sp
  $(".header-nav_toggle").click(function() {     
    $(this).parents('.header').toggleClass('on_nav');   
    $('body').toggleClass('active'); 
  })

  //validate check input katana
  jQuery.validator.addMethod(
    'katakana',
    function (value, element) {
      return this.optional(element) || /^([ァ-ヶー]+)$/.test(value);
    },
    
    '<br/>全角カタカナを入力してください'
  );
  

  //Validate form
  $('#my__form').validate({    
    rules: {
      email: "required",
      password: "required",
      number: "required",
      accountType: "required",
      staffNameLastName: "required",      
      staffNameFirstName: "required",
      staffNameLastNameKana: 
      {
        required: true,
        katakana : true,
      },
      staffNameFirstNameKana: {
        required: true,
        katakana : true,
      },
      acceptPolicy: "required",
    },
    messages: {
      email: "メールアドレスを入力してください。",
      password: "メールアドレスを入力してください。", 
      number: "メールアドレスを入力してください。", 
      accountType: "メールアドレスを入力してください。", 
      staffNameLastName: "「セイ」を入力してください。",      
      staffNameFirstName: "「姓」を入力してください。", 
      staffNameLastNameKana: 
      {
        required:"「姓」を入力してください。", 
        katakana: '「カタカナ」で入力してください。', 
      },      
      staffNameFirstNameKana: {
        required:"「姓」を入力してください。", 
        katakana: '「カタカナ」で入力してください。', 
      },    
      acceptPolicy: "利用規約とプライバシーポリシーに同意の上チェックを入れてください。", 
    },
    errorPlacement: function(error, element) 
    {
      if ( element.is(":radio") ) 
      {
        error.appendTo( element.parents('.row-radio') );
      }
      else if ( element.is(":checkbox") ) {
        error.appendTo( element.parents('.input__checkbox') );
      }
      else 
      { 
        error.insertAfter( element );
      }
     },     
  });

  $('#form__reset').validate({
    rules: {
      pass: "required",
      repass: "required",    
    },
    messages: {
      pass: "errror",
      repass: "errror", 
    },
  });

  $('#popup-edit').validate({
    rules: {
      password: "required",
      firstname: "required",
      lastname: "required", 
      firstnamekata: "required", 
      lastnamekata: "required", 
    },
    messages: { 
      password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      firstname: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      lastname: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 
      firstnamekata: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 
      lastnamekata: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 
    },
  });
});
