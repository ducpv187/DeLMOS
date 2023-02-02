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

  //cpn : show-hidden password
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

  //validate form
  $('#my__form').validate({
      rules: {
        email: "required",
        password: "required",
        number: "required",
        staffNameLastName: "required",
        staffNameFirstName: "required",
        staffNameLastNameKana: "required",
        staffNameFirstNameKana: "required",
        // acceptPolicy: "required",
      },
      messages: {
        email: "メールアドレスを入力してください。",
        password: "メールアドレスを入力してください。", 
        number: "メールアドレスを入力してください。", 
        staffNameLastName: "「姓」を入力してください。", 
        staffNameFirstName: "「姓」を入力してください。", 
        staffNameLastNameKana: "「セイ」を入力してください。", 
        staffNameFirstNameKana: "「セイ」を入力してください。", 
        // acceptPolicy: "利用規約とプライバシーポリシーに同意の上チェックを入れてください。", 
      },
    });
});
