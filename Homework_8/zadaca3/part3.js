//Jas vaka e sfativ zadacata
$(document).ready(function() {

    $("input").click(function() {
        $('#myColor')
            .empty()
            .append('<option value"color" selected>Choose a color</option><option value="Blue">Blue </option>');
    })

    $("#myColor").change(function() {
        let str = "";
        $("select option:selected").each(function() {
            str += $(this).text() + " ";
        });
        $("#content").text(str);
    });

});