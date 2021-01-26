$(document).ready(function() {
    let circle;
    $("#creat").click(function() {
        circle = {
            radius: $("#circle").val(),
            getArea: function() {
                return this.radius * this.radius * 3.14;
            },
            getPerimeter: function() {
                return 2 * this.radius * 3.14;
            }
        }
    })

    $("#area").click(function() {
        $("#perimetar").after(`<p>Area of the cirsle is ${circle.getArea()}<p>`);
    })
    $("#perimetar").click(function() {
        $("#perimetar").after(`<p>Perimetar of the cirsle is ${circle.getPerimeter()}<p>`);
    })
})