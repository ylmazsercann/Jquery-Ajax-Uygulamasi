$(function(){
    
    $(".register-form").validate({
        rules: {
            email: {
                required: true,
                email : true,
            },
            order_id: {
                required: true,
                nowhitespace: true,
                digits: true,
                maxlength: 8,
                minlength: 8,
            }
        },
        messages: {
            email: {
                required: "Lütfen mail adresini gir.",
                email: "Lütfen <strong>geçerli</strong> bir mail adresi gir."
            },
            order_id: {
                required: "Lütfen üye numaranızı giriniz.",
                nowhitespace: "Üye numarası girerken <strong><u>boşluk</u></strong> bırakamazsınız",
                digits: "Sadece rakam yazabilirsiniz.",
                maxlength: "Sadece 8 karakter girebilirsiniz.",
                minlength: "Sadece 8 karakter girebilirsiniz."
            }
        }
    })

    $(document).on("click" , ".btn-primary" , function(){
        if ($(".register-form").valid()) {

            var dataPost = {
                email: $('input[name=email]').val(),
                order_id: $('input[name=order_id]').val()
            }

           $.ajax({ 
                type: "POST",
                dataType: "json",
                url: "https://alltank.test.alegra.io/plugin/alegra/rma-form",
                data: dataPost,
                success: function(data) {
                    if (data.success) {
                    $(".error-note").text(data.message);
                    localStorage.setItem("service_data",JSON.stringify(data));
                    setTimeout(() => {
                        window.location.href="product-page.html";
                    }, 2000);
                } else {
                    $(".error-note").text("Emailinizi ya da üye numaranızı hatalı girdiniz.");
                }
                    
                }
            })

        }
        return false;

    });
})