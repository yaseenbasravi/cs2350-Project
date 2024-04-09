window.addEventListener("load", function() {
    // Event listener for changes to Kennel Size dropdown box
    document.getElementById("weight").addEventListener("input", function() {
        var weight = parseFloat(this.value);
        var size = "";

        if (isNaN(weight)) {
            size = "";
        } else if (weight <= 4) {
            size = "mini";
        } else if (weight <= 12) {
            size = "small";
        } else if (weight <= 50) {
            size = "medium";
        } else {
            size = "large";
        }

        document.getElementById("size").value = size;
    });

    // Event listener for changes to Days of Boarding text box
    document.getElementById("days").addEventListener("input", function() {
        var days = parseInt(this.value);

        if (isNaN(days)) {
            days = 0;
            document.getElementById("days").value = days;
            document.getElementById("boardingFee").value = "0.00";
        } else {
            var boardingFee = (19.99 * days).toFixed(2);
            document.getElementById("boardingFee").value = boardingFee;
        }

        updateTotalCost();
    });

    // Event listeners for checkboxes
    document.getElementById("sing").addEventListener("change", function() {
        var singAdd = document.getElementById("singAdd");
        singAdd.style.display = this.checked ? "block" : "none";
        updateTotalCost();
    });

    document.getElementById("cute").addEventListener("change", function() {
        var cuteAdd = document.getElementById("cuteAdd");
        cuteAdd.style.display = this.checked ? "block" : "none";
        updateTotalCost();
    });

    document.getElementById("trick").addEventListener("change", function() {
        var trickAdd = document.getElementById("trickAdd");
        trickAdd.style.display = this.checked ? "block" : "none";
        updateTotalCost();
    });
});

// Function to update total costs
function updateTotalCost() {
    var registrationCost = 0;
    var numberOfEvents = 0;
    var boardingCost = parseFloat(document.getElementById("boardingFee").value) || 0;

    if (document.getElementById("sing").checked) {
        numberOfEvents++;
    }
    if (document.getElementById("cute").checked) {
        numberOfEvents++;
    }
    if (document.getElementById("trick").checked) {
        numberOfEvents++;
    }

    registrationCost = 120 * numberOfEvents;

    var total = (boardingCost + registrationCost).toFixed(2);

    document.getElementById("boardingCost").value = boardingCost.toFixed(2);
    document.getElementById("registrationCost").value = registrationCost.toFixed(2);
    document.getElementById("totalCost").value = total;
}
