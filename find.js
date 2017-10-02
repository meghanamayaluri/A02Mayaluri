
              function myFunction(){
                  var str=document.getElementById("id");
                  var a="ASCII Value is   ";
              document.getElementById("demo").innerHTML=a+str.value.charCodeAt(0);
              };
              
              
              function myFunction1(){
                  var s1=[$("#id1").val(),$("#id2").val(),$("#id3").val()];
                  //var s2=document.getElementById("id2").value;
                  //var s3=document.getElementById("id3").value;
s1.sort();
$("#sel").html(s1);
              };
       
  //var varDate=$("#datepicker").val();

  