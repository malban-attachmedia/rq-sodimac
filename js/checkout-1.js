if(atm_getCookie('osatmsod')){ //Cookie que guarda le playerID de Onesignal
  $.ajax({
    type: "POST",
    url: 'http://push.app.attachmedia.com/index.php/App/fecha', //Sincroniza fecha real con el servidor
    success: function (res) {
      var fecl = new Date(res).getTime();
      playerID = atm_getCookie('osatmsod'); 
      var onarr = {
        /*producto 1*/
        "smc_id_1" : '$id_producto_1',
        "smc_categoria_1" : '$categoria_producto_1',
        "smc_precio_1" : '$precio_1',
        "smc_cantidad_1" : '$cantidade_1',
        /*producto 2*/
        "smc_id_2" : '$id_producto_2',
        "smc_categoria_2" : '$categoria_producto_2',
        "smc_precio_2" : '$precio_2',
        "smc_cantidad_2" : '$cantidade_2',
        /*producto 3*/
        "smc_id_3" : '$id_producto_3',
        "smc_categoria_3" : '$categoria_producto_3',
        "smc_precio_3" : '$precio_3',
        "smc_cantidad_3" : '$cantidade_3',
        /*producto 4*/
        "smc_id_4" : '$id_producto_4',
        "smc_categoria_4" : '$categoria_producto_4',
        "smc_precio_4" : '$precio_4',
        "smc_cantidad_4" : '$cantidade_4',
        /*producto 5*/
        "smc_id_5" : '$id_producto_5',
        "smc_categoria_5" : '$categoria_producto_5',
        "smc_precio_5" : '$precio_5',
        "smc_cantidad_5" : '$cantidade_5',
        /*otra informacion*/
        "smc_add" : '1',
        "smc_checkout" : '1',
        "smc_purchase" : '0',
        "smc_device": /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|SymbianOS|Windows Phone/i.test(window.navigator.userAgent) ? "Mobile" : "Desktop"
      };
      if( navigator.appVersion.split("(")[1].split(";")[0].match("10") && (parseInt(navigator.appVersion.split("hrome")[1].split("/")[1].split(".")[0]) >= 68 ) ){
        onarr["smc_device"] = "Desktop W10";
      }
      $.ajax({
        type: "POST",
        url: 'http://push.app.attachmedia.com/index.php/App/savetag?atmtok=aeeace29747db2188e8aec1be356a3d3',//URL Api Sodimac, no modificar atmtok
        data: {'playerID': playerID,'data':JSON.stringify(onarr)},
        success: function (res) { console.log("Apppush update Tag sucess");},
        error: function(res) {console.log("Apppush update Tag error");}
      });
    }    
  });
}
