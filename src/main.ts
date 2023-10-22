
import { Serie } from "./Serie.js";
import { series } from "./Serie.js";

let seriesTable: HTMLElement = document.getElementById("tabla-series")!;

mostrarDatosSeries(series);
mostrarPromedioTemporadas(series);
actualizarTarjetaSerie(series[0]);

document.addEventListener("DOMContentLoaded", () => {
    const filasDeSeries: NodeListOf<HTMLTableRowElement> = document.querySelectorAll("#tabla-series tbody tr");

    filasDeSeries.forEach((fila, index) => {
        fila.addEventListener("click", () => {
            const serieSeleccionada = series[index];
            actualizarTarjetaSerie(serieSeleccionada);
        });
    });
});

function mostrarDatosSeries(seriesLocal: Serie[]): void {
    let seriesTBody: HTMLElement = document.createElement("tbody");
    for (let serie of seriesLocal) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td style="color: blue; text-decoration: underline; cursor: pointer;">${serie.nombre}</td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>
            `;
        seriesTBody.appendChild(trElement);
        }
    seriesTable.appendChild(seriesTBody);

}

function mostrarPromedioTemporadas(seriesLocal: Serie[]): void {
    let sum: number = 0;
    let temporadasParrafo: HTMLElement = document.getElementById("Promedio")!;

    for (let serie of seriesLocal) {
        sum += serie.temporadas;
    }

    let promedio: number = sum / seriesLocal.length;

    temporadasParrafo.innerHTML = `El promedio de temporadas es: ${promedio}`;
}

function actualizarTarjetaSerie(serie: Serie) {
    const tarjetaNombre: HTMLElement = document.querySelector(".card-title")!;
    const tarjetaDescripcion: HTMLElement = document.querySelector(".card-text")!;
    const tarjetaImagen: HTMLImageElement = document.querySelector(".card-img-top")!;
    const tarjetaLink: HTMLAnchorElement = document.querySelector(".btn-primary")!;

    tarjetaNombre.textContent = serie.nombre;
    tarjetaDescripcion.textContent = serie.descripcion;
    tarjetaImagen.src = serie.imagen;
    tarjetaLink.href = serie.url;
}