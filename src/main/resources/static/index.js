
    function innRegistrering() {
        const personnummer = $("#eiersPersonnummer");
        const navn = $("#eiersNavn");
        const adresse = $("#eiersAdresse");
        const kjennetegn = $("#kjennetegn");
        const bilmerke = $("#bilmerke");
        const biltype = $("#biltype");

        const motorvogn = {
            personnummer: personnummer.val(),
            navn: navn.val(),
            adresse: adresse.val(),
            kjennetegn: kjennetegn.val(),
            bilmerke: bilmerke.val(),
            biltype: biltype.val()

        }

        $.post("/lagre", motorvogn, function () {
            hentAlle();
        });
//
        $("#eiersPersonnummer").val("");
        $("#eiersNavn").val("");
        $("#eiersAdresse").val("");
        $("#kjennetegn").val("");
        $("#bilmerke").val("");
        $("#biltype").val("");

}
    function hentAlle() {
        $.get("/hentAlle", function (biler) {
            formaterData(biler);
            })
    }
        function formaterData (biler) {
            let ut = "<table class='table table-striped'> <tr><th>PersonNr</th><th>Navn</th><th>Adresse</th>" +
                "<th>Kjennetegn</th><th>Merke</th><th>Type</th><th>Type</th></tr>";
            for (const bil of biler) {
                ut += "<tr><td>" + bil.personnummer + "</td><td>" + bil.navn + "</td><td>"
                    + bil.adresse + "</td><td>" + bil.kjennetegn + "</td>" +
                    "<td>" + bil.bilmerke + "</td><td>" + bil.biltype + "</td></tr>";
            }
            ut += "</table>";
            $("#bilregister").html(ut);
        }

        function slettAlle() {

            
        }
