// event pada saat link di klik
$(".page-scroll").on("click", function (e) {
  //ambil isi href
  var tujuan = $(this).attr("href");
  //tangkap element
  var elementtujuan = $(tujuan);

  //pindahkan scroll
  $("body").scrollTop("100");

  e.preventDefault();
});
