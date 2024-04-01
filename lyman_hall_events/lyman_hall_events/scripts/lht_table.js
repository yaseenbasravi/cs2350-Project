"use strict";

/*

   Author: Yaseen
   Date:   25 march, 2024

	
*/


document.addEventListener("DOMContentLoaded", function () {
    createEventTable(eventDates, eventDescriptions, eventPrices);
});

function createEventTable(eventDates, eventDescriptions, eventPrices) {
    var table = document.createElement('table');
    table.id = 'eventTable'; // Adding ID as per the stylesheet

    // Create table caption
    var caption = document.createElement('caption');
    caption.textContent = 'Upcoming Events at the Lyman Hall Theater';
    table.appendChild(caption);

    // Create table header
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var headers = ['Date', 'Event', 'Price'];
    headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    var tbody = document.createElement('tbody');
    for (var i = 0; i < eventDates.length; i++) {
        var row = document.createElement('tr');

        var dateCell = document.createElement('td');
        dateCell.textContent = new Date(eventDates[i]).toLocaleDateString();
        row.appendChild(dateCell);

        var descriptionCell = document.createElement('td');
        descriptionCell.innerHTML = eventDescriptions[i];
        row.appendChild(descriptionCell);

        var priceCell = document.createElement('td');
        priceCell.textContent = eventPrices[i];
        row.appendChild(priceCell);

        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    // Append the table to the event div
    document.getElementById('event').appendChild(table);
}
