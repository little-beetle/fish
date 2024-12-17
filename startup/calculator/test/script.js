function updateForm() {
    let tankShape = document.getElementById("tankShape").value;

    // Hide all forms
    document.getElementById("rectangularForm").style.display = "none";
    document.getElementById("cubeForm").style.display = "none";
    document.getElementById("roundForm").style.display = "none";
    document.getElementById("ovalForm").style.display = "none";

    // Show the appropriate form based on tank shape
    if (tankShape === "rectangular") {
        document.getElementById("rectangularForm").style.display = "block";
    } else if (tankShape === "cube") {
        document.getElementById("cubeForm").style.display = "block";
    } else if (tankShape === "round") {
        document.getElementById("roundForm").style.display = "block";
    } else if (tankShape === "oval") {
        document.getElementById("ovalForm").style.display = "block";
    }
}

function calculateVolume() {
    let tankShape = document.getElementById("tankShape").value;
    let volumeInCm3, ukGallons, usGallons, litres;

    if (tankShape === "rectangular") {
        let width = document.getElementById("width").value;
        let length = document.getElementById("length").value;
        let height = document.getElementById("height").value;

        if (width && length && height) {
            volumeInCm3 = width * length * height;
            ukGallons = (volumeInCm3 / 277.42).toFixed(2);
            usGallons = (volumeInCm3 / 231).toFixed(2);
            litres = (volumeInCm3 / 1000).toFixed(2);
            document.getElementById("ukGallons").innerText = ukGallons;
            document.getElementById("usGallons").innerText = usGallons;
            document.getElementById("litres").innerText = litres + 'L';
        } else {
            alert("Please enter all dimensions!");
        }

    } else if (tankShape === "cube") {
        let width = document.getElementById("cubeWidth").value;
        let height = document.getElementById("cubeHeight").value;

        if (width && height) {
            volumeInCm3 = width * width * height;
            ukGallons = (volumeInCm3 / 277.42).toFixed(2);
            usGallons = (volumeInCm3 / 231).toFixed(2);
            litres = (volumeInCm3 / 1000).toFixed(2);
            document.getElementById("ukGallons").innerText = ukGallons;
            document.getElementById("usGallons").innerText = usGallons;
            document.getElementById("litres").innerText = litres + 'L';
        } else {
            alert("Please enter both dimensions!");
        }

    } else if (tankShape === "round") {
        let diameter = document.getElementById("diameter").value;
        let height = document.getElementById("roundHeight").value;

        if (diameter && height) {
            let radius = diameter / 2;
            volumeInCm3 = Math.PI * Math.pow(radius, 2) * height; // Cylinder volume formula
            ukGallons = (volumeInCm3 / 277.42).toFixed(2);
            usGallons = (volumeInCm3 / 231).toFixed(2);
            litres = (volumeInCm3 / 1000).toFixed(2);
            document.getElementById("ukGallons").innerText = ukGallons;
            document.getElementById("usGallons").innerText = usGallons;
            document.getElementById("litres").innerText = litres + 'L';
        } else {
            alert("Please enter both dimensions!");
        }

    } else if (tankShape === "oval") {
        let length = document.getElementById("ovalLength").value;
        let width = document.getElementById("ovalWidth").value;
        let height = document.getElementById("ovalHeight").value;

        if (length && width && height) {
            let radiusLength = length / 2;
            let radiusWidth = width / 2;
            volumeInCm3 = Math.PI * radiusLength * radiusWidth * height; // Oval tank volume formula
            ukGallons = (volumeInCm3 / 277.42).toFixed(2);
            usGallons = (volumeInCm3 / 231).toFixed(2);
            litres = (volumeInCm3 / 1000).toFixed(2);
            document.getElementById("ukGallons").innerText = ukGallons;
            document.getElementById("usGallons").innerText = usGallons;
            document.getElementById("litres").innerText = litres + 'L';
        } else {
            alert("Please enter all dimensions!");
        }
    }
}
