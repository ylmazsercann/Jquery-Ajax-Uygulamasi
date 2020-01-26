var datam = JSON.parse(localStorage.getItem("service_data"));

if(datam == undefined) {
    location.href="index.html";
} else {
    localStorage.removeItem("service_data");
    //$(".veri-tutma span").text(datam.xtra.order_id);

    $.each(datam.xtra.items, function (index, items) {

        var opt = "";

        for (i = 1; i <= items.quantity; i++) {
            var active = "";
            if(items.quantity === i) {
                active= "selected";
            } else {
                active = "";
            }
            opt += "<option value='"+ i +"' "+ active +">"+ i + " ADET" +"</option>";
        }

        $(".urun-tutma tbody").append(
            "<tr>" +
            "<td class='check-wd'><input class='roles' name='roles' type='checkbox' value='" +  items.product_id + "' /></td>" +
            "<td class='th-lft'><div class='urunler'><div class='resim'><img class='img-detail' src='" + items.image +
             "'></div><div class='yazi'>" + items.full_name + "<br /><br />₺ " + items.sale_price + "<br /><br />Durumu: " + items.status +
             
             
             
             "</div></div></td>" +
            "<td><select class='strong quality-style'>"+ opt +"</select></td>" +
            "<td><select class='strong quality-style-iade selected'><option class='select'>" +  
            "İADE NEDENİ SEÇİN"+ "</option>" +
            "<option>" + "Yanlış Ürün"+ "</option>" +
            "<option>" + "Düşündüğüm gibi değil"+ "</option>" +
            "<option>" + "Başka nedenler"
            + "</option></select></td>" +
            "</tr>"
        );


    
    });
    
    
    
}

$(document).on("click" , ".btn-secondary" , function(){
    var checked = ($(".roles:checked").is(':checked')).length > 0;
    var onecheck = $('.checkbox-bottom').is(':checked');
    if (checked === true || ($(".selected").val() === 'Select') || (!(onecheck === true)))
        {
            console.log("İade Şartları Onaylanmalı, En az 1 ürün seçilmeli ve İade nedeni Seçilmeli !!");
        }
        else{
            console.log("İade Talebiniz Alınmıştır!");
        } 
            return false;  
});

