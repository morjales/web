/*
var img = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'];
// src="images/rotator/ is path to your files contained in above array
$('<img src="images/rotator/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#imageContainer');
//  https://gist.github.com/25thhour/282714 use this for random images
*/
$(document).ready(function(){

  $("#rollatt").click(function(){
    var a = Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1);
    var b = Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1);
    var c = Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1);
    var d = Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1);
    var e = Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1);
    var f = Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1)+ Math.floor((Math.random() * 6) + 1);
    $("#a1").val(a);
    $("#a2").val(b);
    $("#a3").val(c);
    $("#a4").val(d);
    $("#a5").val(e);
    $("#a6").val(f);
  });

  $("select[name*='alignment']").change(function(){
    $(".hidden").hide();
    $("select option:selected").each(function() {
      var alid = $(this).text();
      $("[id='"+alid+"d']").show();
    });
  });

  $("select[name*='rolldesc']").change(function(){
    $(".hidden2").hide();
    $("select option:selected").each(function() {
      var stad = $(this).text();
      $("[id='"+stad+"a']").show();
    });
  });

  $("select[name*='race']").change(function(){
    $(".hidden1").hide();
    $("select option:selected").each(function() {
      var raced = $(this).text();
      $("#"+raced+"d").show();
      $("#"+raced+"i").show();
    });
  });

  $("select[name*='class']").change(function(){
    $(".hidden3").hide();
    $("select option:selected").each(function() {
      var clad = $(this).text();
      $("[id='"+clad+"d']").show();
      $("[id='"+clad+"i']").show();
    });
  });
  
});
