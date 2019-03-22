$(function(){


  $("#piezas11AA").draggable({revert:"invalid"});
  $("#trans11AA").droppable({
    drop: function(event) {
     
        $("#piezas11AA").addClass("colocado");
        colocar(); 
        $("#piezas11AA").css({top:$("#trans11AA").css("top"),left:$("#trans11AA").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas11AA"

    });


  $("#piezas22AA").draggable({revert:"invalid"});
  $("#trans22AA").droppable({
    drop: function(event) {
     
        $("#piezas22AA").addClass("colocado");
        colocar(); 
        $("#piezas22AA").css({top:$("#trans22AA").css("top"),left:$("#trans22AA").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas22AA"
    });



  $("#piezas33AA").draggable({revert:"invalid"});
  $("#trans33AA").droppable({
    drop: function(event) {
     
        $("#piezas33AA").addClass("colocado");
        colocar(); 
        $("#piezas33AA").css({top:$("#trans33AA").css("top"),left:$("#trans33AA").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas33AA"
    });



  $("#piezas11BB").draggable({revert:"invalid"});
  $("#trans11BB").droppable({
    drop: function(event) {
    
        $("#piezas11BB").addClass("colocado");
        colocar(); 
        $("#piezas11BB").css({top:$("#trans11BB").css("top"),left:$("#trans11BB").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas11BB"
    });

  $("#piezas22BB").draggable({revert:"invalid"});
  $("#trans22BB").droppable({
    drop: function(event) {
     
        $("#piezas22BB").addClass("colocado");
        colocar(); 
        $("#piezas22BB").css({top:$("#trans22BB").css("top"),left:$("#trans22BB").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas22BB"
    });


  $("#piezas33BB").draggable({revert:"invalid"});
  $("#trans33BB").droppable({
    drop: function(event) {
 
        $("#piezas33BB").addClass("colocado");
        colocar(); 
        $("#piezas33BB").css({top:$("#trans33BB").css("top"),left:$("#trans33BB").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas33BB"
    });


  $("#piezas11CC").draggable({revert:"invalid"});
  $("#trans11CC").droppable({
    drop: function(event) {  
        $("#piezas11CC").addClass("colocado");
        colocar(); 
        $("#piezas11CC").css({top:$("#trans11CC").css("top"),left:$("#trans11CC").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas11CC"
    });


  $("#piezas22CC").draggable({revert:"invalid"});
  $("#trans22CC").droppable({
    drop: function(event) { 
    $("#piezas22CC").addClass("colocado");
    colocar();  
    $("#piezas22CC").css({top:$("#trans22CC").css("top"),left:$("#trans22CC").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas22CC"
    });


  $("#piezas33CC").draggable({revert:"invalid"});
  $("#trans33CC").droppable({
    drop: function(event) {
     
        $("#piezas33CC").addClass("colocado");
        colocar(); 
        $("#piezas33CC").css({top:$("#trans33CC").css("top"),left:$("#trans33CC").css("left")});
      },
     
      tolerance: "touch",
      accept: "#piezas33CC"
    

    });

  function colocar(){
    console.log($(".colocado").length)
    if($(".colocado").length >8){
      alert("VENGA UNO MAS, YA CASI LO TIENES!");
      $(".boton").show();
    }
  }

  $(".boton").click(function(){
      window.location.href=window.location.href.replace("index2.html","index3.html")
      
  });
    $(".reinicio").click(function(){
      location.reload();
  });

  });
