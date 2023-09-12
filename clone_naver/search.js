/*// 변수 선언
// gnd
const $ico_arr = $(".ico_arr");  //제이쿼리 변수를 위해 $표시
// ly_service
const isLyService = $(".ly_service");
// btn_more
const $btn_open = $(".search_detail.btn_open");

  // ly_open클래스로 더보기 영역 제어
  // gnb toggle class ly_open
  $ico_arr.toggleClass("btn_open");
*/

$(".ico_arr").click(async function () {
  $('#search_detail').toggle();
})
