$(function(){


  $("#piezas111AAA").draggable({revert:"invalid"});
  $("#trans111AAA").droppable({
    drop: function(event) {
     
        $("#piezas111AAA").addClass("colocado");
        colocar(); 
        $("#piezas111AAA").css({top:$("#trans111AAA").css("top"),left:$("#trans111AAA").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas111AAA"

    });


  $("#piezas222AAA").draggable({revert:"invalid"});
  $("#trans222AAA").droppable({
    drop: function(event) {
     
        $("#piezas222AAA").addClass("colocado");
        colocar(); 
        $("#piezas222AAA").css({top:$("#trans222AAA").css("top"),left:$("#trans222AAA").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas222AAA"
    });



  $("#piezas333AAA").draggable({revert:"invalid"});
  $("#trans333AAA").droppable({
    drop: function(event) {
     
        $("#piezas333AAA").addClass("colocado");
        colocar(); 
        $("#piezas333AAA").css({top:$("#trans333AAA").css("top"),left:$("#trans333AAA").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas333AAA"
    });



  $("#piezas111BBB").draggable({revert:"invalid"});
  $("#trans111BBB").droppable({
    drop: function(event) {
    
        $("#piezas111BBB").addClass("colocado");
        colocar(); 
        $("#piezas111BBB").css({top:$("#trans111BBB").css("top"),left:$("#trans111BBB").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas111BBB"
    });

  $("#piezas222BBB").draggable({revert:"invalid"});
  $("#trans222BBB").droppable({
    drop: function(event) {
     
        $("#piezas222BBB").addClass("colocado");
        colocar(); 
        $("#piezas222BBB").css({top:$("#trans222BBB").css("top"),left:$("#trans222BBB").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas222BBB"
    });


  $("#piezas333BBB").draggable({revert:"invalid"});
  $("#trans333BBB").droppable({
    drop: function(event) {
 
        $("#piezas333BBB").addClass("colocado");
        colocar(); 
        $("#piezas333BBB").css({top:$("#trans333BBB").css("top"),left:$("#trans333BBB").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas333BBB"
    });


  $("#piezas111CCC").draggable({revert:"invalid"});
  $("#trans111CCC").droppable({
    drop: function(event) {  
        $("#piezas111CCC").addClass("colocado");
        colocar(); 
        $("#piezas111CCC").css({top:$("#trans111CCC").css("top"),left:$("#trans111CCC").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas111CCC"
    });


  $("#piezas222CCC").draggable({revert:"invalid"});
  $("#trans222CCC").droppable({
    drop: function(event) { 
    $("#piezas222CCC").addClass("colocado");
    colocar();  
    $("#piezas222CCC").css({top:$("#trans222CCC").css("top"),left:$("#trans222CCC").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas222CCC"
    });


  $("#piezas333CCC").draggable({revert:"invalid"});
  $("#trans333CCC").droppable({
    drop: function(event) {
     
        $("#piezas333CCC").addClass("colocado");
        colocar(); 
        $("#piezas333CCC").css({top:$("#trans333CCC").css("top"),left:$("#trans333CCC").css("left")});
      },
     
      tolerance: "touch",
      accept: "#piezas333CCC"
    

    });

  function colocar(){
    console.log($(".colocado").length)
    if($(".colocado").length >8){
      alert("ENHORABUENA!");
      $(".boton").show();
    }
  }

  $(".boton").click(function(){
      window.location.href=window.location.href.replace("index3.html","index.html")
      
  });
    $(".reinicio").click(function(){
      location.reload();
  });

  });
