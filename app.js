
$(function(){
var showResponse= {};


$("button").on("click", function(){
  //make ajax request and alter our page.



        $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').done(function(response){
          console.log(response);
          showResponse = response.data;
          $(".gif").append("<img src=" + showResponse.image_url+">");
        });

});
});
