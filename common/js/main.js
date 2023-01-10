$(document).ready(function() {
  $(".btn-blue").click(function() {
    $(this).parents().find(".modal__popup").addClass('block');
    $(this).parents().find(".modal__content").addClass('show');
    $(this).parents().find(".modal__close").removeClass('show');
  });
  $(".modal_close").click(function() {
    $(this).parents().find(".modal__popup").removeClass('block');
  });
  $(".modal__content ").click(function(e) {
    e.stopPropagation(e);
  });
  $(".modal__popup").click(function() {
    $(this).removeClass('block');
    $(this).parents().find(".modal__content").removeClass('show');      
  });
});