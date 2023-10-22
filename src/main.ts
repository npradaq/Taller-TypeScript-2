import { Serie } from "./Serie.js";
import { series } from "./Serie.js";

let seriesTable: HTMLElement = document.getElementById("tabla-series")!;

mostrarDatosSeries(series);
mostrarPromedioTemporadas(series);

function mostrarDatosSeries(seriesLocal: Serie[]): void {
    let seriesTBody: HTMLElement = document.createElement("tbody");
    for (let serie of seriesLocal) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.nombre}</td>
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