if(atm_getCookie('osatmsod')){ //Cookie que guarda le playerID de Onesignal
  $.ajax({
    type: "POST",
    url: 'https://push.app.attachmedia.com/index.php/App/fecha', //Sincroniza fecha real con el servidor
    success: function (res) {
      var fecl = new Date(res).getTime();
      playerID = atm_getCookie('osatmsod'); 
      var onarr = {
        /*producto 1*/
        "smc_id_1" : '257336-9',
        "smc_categoria_1" : 'aire libre',
        "smc_precio_1" : '39.90',
        "smc_cantidad_1" : '1',
        /*producto 2*/
        "smc_id_2" : '210558-6',
        "smc_categoria_2" : 'parrila a gas',
        "smc_precio_2" : '1489.90',
        "smc_cantidad_2" : '1',
        /*producto 3*/
        "smc_id_3" : '',
        "smc_categoria_3" : '',
        "smc_precio_3" : '',
        "smc_cantidad_3" : '',
        /*producto 4*/
        "smc_id_4" : '',
        "smc_categoria_4" : '',
        "smc_precio_4" : '',
        "smc_cantidad_4" : '',
        /*producto 5*/
        "smc_id_5" : '',
        "smc_categoria_5" : '',
        "smc_precio_5" : '',
        "smc_cantidad_5" : '',
        /*otra informacion*/
        "smc_fecha_operacion": fecl,
        "smc_add" : '1',
        "smc_checkout" : '2',
        "smc_purchase" : '0',
        "smc_device": /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|SymbianOS|Windows Phone/i.test(window.navigator.userAgent) ? "Mobile" : "Desktop"
      };
      if( navigator.appVersion.split("(")[1].split(";")[0].match("10") && (parseInt(navigator.appVersion.split("hrome")[1].split("/")[1].split(".")[0]) >= 68 ) ){
        onarr["smc_device"] = "Desktop W10";
      }
      $.ajax({
        type: "POST",
        url: 'https://push.app.attachmedia.com/index.php/App/savetag?atmtok=aeeace29747db2188e8aec1be356a3d3',//URL Api Sodimac, no modificar atmtok
        data: {'playerID': playerID,'data':JSON.stringify(onarr)},
        success: function (res) { console.log("Apppush update Tag sucess");},
        error: function(res) {console.log("Apppush update Tag error");}
      });
    }    
  });
}
