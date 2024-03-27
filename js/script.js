$(document).ready(function () {
  $(document).on("click", function (event) {
    // Проверяем, был ли клик совершен вне элемента ".pfll__dropdown"
    if (!$(event.target).closest(".preview-footer-left__lang").length) {
      // Удаляем класс "active" у ".pfll__main" и ".pfll__dropdown"
      $(".pfll__main, .pfll__dropdown").removeClass("active");
    }
  });

  $(".pfll__main").click(function () {
    // При клике на ".pfll__main" также переключаем класс "active" для ".pfll__dropdown"
    $(this).toggleClass("active");
    $(".pfll__dropdown").toggleClass("active");
  });
});
