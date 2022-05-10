$("#enviar").click(function(){
    $.get("https://apis.digital.gob.cl/dpa/regiones",
        function(data) {
            $.each(data.regiones, function(i, item){
                $("#regiones").append("<option>"+nombre);                            
            });
        });
  });