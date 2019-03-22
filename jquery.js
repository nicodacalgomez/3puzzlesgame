$(function(){


  $("#piezas1A").draggable({revert:"invalid"});
  $("#trans1A").droppable({
    drop: function(event) {
     
        $("#piezas1A").addClass("colocado");
        colocar(); 
        $("#piezas1A").css({top:$("#trans1A").css("top"),left:$("#trans1A").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas1A"

    });


  $("#piezas2A").draggable({revert:"invalid"});
  $("#trans2A").droppable({
    drop: function(event) {
     
        $("#piezas2A").addClass("colocado");
        colocar(); 
        $("#piezas2A").css({top:$("#trans2A").css("top"),left:$("#trans2A").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas2A"
    });



  $("#piezas3A").draggable({revert:"invalid"});
  $("#trans3A").droppable({
    drop: function(event) {
     
        $("#piezas3A").addClass("colocado");
        colocar(); 
        $("#piezas3A").css({top:$("#trans3A").css("top"),left:$("#trans3A").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas3A"
    });



  $("#piezas1B").draggable({revert:"invalid"});
  $("#trans1B").droppable({
    drop: function(event) {
    
        $("#piezas1B").addClass("colocado");
        colocar(); 
        $("#piezas1B").css({top:$("#trans1B").css("top"),left:$("#trans1B").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas1B"
    });

  $("#piezas2B").draggable({revert:"invalid"});
  $("#trans2B").droppable({
    drop: function(event) {
     
        $("#piezas2B").addClass("colocado");
        colocar(); 
        $("#piezas2B").css({top:$("#trans2B").css("top"),left:$("#trans2B").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas2B"
    });


  $("#piezas3B").draggable({revert:"invalid"});
  $("#trans3B").droppable({
    drop: function(event) {
 
        $("#piezas3B").addClass("colocado");
        colocar(); 
        $("#piezas3B").css({top:$("#trans3B").css("top"),left:$("#trans3B").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas3B"
    });


  $("#piezas1C").draggable({revert:"invalid"});
  $("#trans1C").droppable({
    drop: function(event) {  
        $("#piezas1C").addClass("colocado");
        colocar(); 
        $("#piezas1C").css({top:$("#trans1C").css("top"),left:$("#trans1C").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas1C"
    });


  $("#piezas2C").draggable({revert:"invalid"});
  $("#trans2C").droppable({
    drop: function(event) { 
    $("#piezas2C").addClass("colocado");
    colocar();  
    $("#piezas2C").css({top:$("#trans2C").css("top"),left:$("#trans2C").css("left")});
      },
      tolerance: "touch",
      accept: "#piezas2C"
    });


  $("#piezas3C").draggable({revert:"invalid"});
  $("#trans3C").droppable({
    drop: function(event) {
     
        $("#piezas3C").addClass("colocado");
        colocar(); 
        $("#piezas3C").css({top:$("#trans3C").css("top"),left:$("#trans3C").css("left")});
      },
     
      tolerance: "touch",
      accept: "#piezas3C"
    

    });

  function colocar(){
    console.log($(".colocado").length)
    if($(".colocado").length >8){
      alert("MUY BIEN, A POR LA SIGUIENTE!");
      $(".boton").show();
    }
  }

  $(".boton").click(function(){
      window.location.href=window.location.href.replace("index.html","index2.html")
      
  });
    $(".reinicio").click(function(){
      location.reload();
  });

  });
