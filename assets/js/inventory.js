fZONE.ready(function() {
  $.get("/common/include/count.php?type=new&lotid=TOYOTABERKELEY&version=3&make=Toyota", function(data) {
    $(".new-inv-btn").prepend("<span>" + data + "</span>");
  });
  $.get("/common/include/count.php?type=used&lotid=TOYOTABERKELEY&version=3", function(data) {
    $(".used-inv-btn").prepend("<span>" + data + "</span>");
  });
});