var notid = -1;

$(function () {
    $('#modal2').on('show.bs.modal', function (e) {

        var button = $(e.relatedTarget);
        notid = button.data("notid");

        $('#modal2_body').load("/Not/NotGoster/" + notid);

    });
});

//function yorumislem(btn, islem, yorumid, yorumtext) {
//    var button = $(btn);
//    var editmod = button.data("edit");

//    if (islem === "update") {
//        if (!editmod) {
//            button.data("edit", true);
//            button.removeClass("btn-warning");
//            button.addClass("btn-success");
//            var span = button.find("span");
//            span.removeClass("glyphicon-edit");
//            span.addClass("glyphicon-ok");

//            $(yorumtext).attr("contenteditable", true);
//            $(yorumtext).focus();
//        }
//        else {
//            button.data("edit", false);
//            button.addClass("btn-warning");
//            button.removeClass("btn-success");
//            var span = button.find("span");
//            span.addClass("glyphicon-edit");
//            span.removeClass("glyphicon-ok");

//            $(yorumtext).attr("contenteditable", false);

//            var yenitext = $(yorumtext).text();

//            $.ajax
//                ({
//                    method: "POST",
//                    url: "/Not/Edit/" + yorumid,
//                    data: { text: yenitext }
//                }).done(function (data) {
//                    if (data.sonuc) {
//                        //yorumlar yeniden yüklenir
//                        $('#modal1_body').load("/Not/NotGoster/" + notid);
//                    }
//                    else {
//                        alert("Yorum güncellenemdi");
//                    }
//                }).fail(function () {
//                    alert("Sunucu ile bağlantı kurulamadı");
//                });
//        }
//    }
//    else if (islem === "delete") {
//        console.log("deneme");
//        var mesaj = confirm("Yorum Silinsin mi?");
//        if (!mesaj) {
//            return false;
//        }
//        $.ajax
//            ({
//                method: "GET",
//                url: "/Not/Delete/" + yorumid
//            }).done(function (data) {
//                if (data.sonuc) {
//                    //yorumlar yeniden yüklenir
//                    $('#modal1_body').load("/Not/NotGoster/" + notid);
//                }
//                else {
//                    alert("Yorum güncellenemdi");
//                }
//            }).fail(function () {
//                alert("Sunucu ile bağlantı kurulamadı");
//            })
//    }
//    else if (islem === "create") {
//        var yorum = $("#yorum_text").val();

//        $.ajax
//            ({
//                method: "POST",
//                url: "/Yorum/Create",
//                data: { Text: yorum, notid: notid }
//            }).done(function (data) {
//                if (data.sonuc) {
//                    //yorumlar yeniden yüklenir
//                    $('#modal1_body').load("/Not/NotGoster/" + notid);
//                }
//                else {
//                    alert("Yorum eklenemedi");
//                }
//            }).fail(function () {
//                alert("Sunucu ile bağlantı kurulamadı");
//            });
//    }
//}