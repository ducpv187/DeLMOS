$(document).ready(function() {
  $(".btn-blue").click(function() {
    $(this).parents().find(".modal__popup").addClass('block');
    $(this).parents().find(".modal__content").addClass('show');
    $(this).parents().find(".modal__close").removeClass('show');
  });
  $(".modal_close").click(function() {
    $(this).parents().find(".modal__popup").removeClass('block');
    $(this).parent(".modal__content").removeClass('show'); 
  });
  $(".modal__content").click(function(e) {
    e.stopPropagation(e);
  });
  $(".modal__popup").click(function() {
    $(this).removeClass('block');
    $(this).parents().find(".modal__content").removeClass('show');      
  });
  // click account drop
  $(".account__btn").click(function() {
    $(this).parents().find(".account__drop").toggleClass('active_drop');

  });
  $(".main").click(function() {    
    $(this).parents().find(".account__drop").removeClass('active_drop');   
  })

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

  
  //page forgot password : show-hidden icon
  $(".form__reset .icon-show").click(function() {     
    $(this).addClass("d-none");
    $(this).siblings().addClass("d-block");
  })

  $(".form__reset .icon-hidden").click(function() {     
    $(this).removeClass("d-block");
    $(this).siblings().removeClass("d-none");
  })

 //page forgot password : show-hidden password

 
  $(".form__reset .icon").click(function() {  
    let typeInput = $(this).parent().find(".input");
    if( typeInput.attr('type') == "password" ){
      typeInput.attr('type', 'text');       
    }
    else {
      typeInput.attr('type', 'password');      
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

  //hover autoplay video
  $(".video").mousemove(function(){
    $(this).parent().find(".video_play").addClass("active-video");

      // $(this).parent().find(".video_play").controls = false;    
      // document.getElementsByTagName("video").controls = false;    
    }
  );
  $(".video").mouseout(function(){
    $(this).parent().find(".video_play").removeClass("active-video");    
    //reload video  when hover
    // document.getElementById("video").load();

  });
  $( ".video_play" ).each(function( index ) {
    // console.log(this);
    document.getElementById($(this).attr("id")).controls = false; 
  });
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
  var video = document.getElementsByClassName("js-hoverVideo");
  // console.log(video);
  // Check if video is ready to play
  $(video).on('canplay', function () {
    $(video).mouseenter(function () {
        $(this).get(0).play();
    }).mouseleave(function () {
        $(this).get(0).pause();
    })
  });

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
  jQuery.validator.addMethod("katakana", function(value, element) {
    return this.optional(element) || /^([ァ-ヶー]+)$/.test(value);
    }, "<br/>全角カタカナを入力してください"
   );


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
});
