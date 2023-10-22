import { series } from "./Serie.js";
var seriesTable = document.getElementById("tabla-series");
mostrarDatosSeries(series);
mostrarPromedioTemporadas(series);
actualizarTarjetaSerie(series[0]);
document.addEventListener("DOMContentLoaded", function () {
    var filasDeSeries = document.querySelectorAll("#tabla-series tbody tr");
    filasDeSeries.forEach(function (fila, index) {
        fila.addEventListener("click", function () {
            var serieSeleccionada = series[index];
            actualizarTarjetaSerie(serieSeleccionada);
        });
    });
});
function mostrarDatosSeries(seriesLocal) {
    var seriesTBody = document.createElement("tbody");
    for (var _i = 0, seriesLocal_1 = seriesLocal; _i < seriesLocal_1.length; _i++) {
        var serie = seriesLocal_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td style=\"color: blue; text-decoration: underline; cursor: pointer;\">").concat(serie.nombre, "</td>\n            <td>").concat(serie.canal, "</td>\n            <td>").concat(serie.temporadas, "</td>\n            ");
        seriesTBody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTBody);
}
function mostrarPromedioTemporadas(seriesLocal) {
    var sum = 0;
    var temporadasParrafo = document.getElementById("Promedio");
    for (var _i = 0, seriesLocal_2 = seriesLocal; _i < seriesLocal_2.length; _i++) {
        var serie = seriesLocal_2[_i];
        sum += serie.temporadas;
    }
    var promedio = sum / seriesLocal.length;
    temporadasParrafo.innerHTML = "El promedio de temporadas es: ".concat(promedio);
}
function actualizarTarjetaSerie(serie) {
    var tarjetaNombre = document.querySelector(".card-title");
    var tarjetaDescripcion = document.querySelector(".card-text");
    var tarjetaImagen = document.querySelector(".card-img-top");
    var tarjetaLink = document.querySelector(".btn-primary");
    tarjetaNombre.textContent = serie.nombre;
    tarjetaDescripcion.textContent = serie.descripcion;
    tarjetaImagen.src = serie.imagen;
    tarjetaLink.href = serie.url;
}
