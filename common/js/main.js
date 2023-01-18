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
});