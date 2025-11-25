const images = [
"ai-generated-7790616_1280.jpg",
"aliens-7774364_1280.jpg",
"astronaut-5906015_1280.jpg",
"astronomy-3105876_1280.jpg",
"earth-11015_1280.jpg",
"earth-7377061_1280.jpg",
"neptune-5550216_1280.jpg",
"planet-11613_1280.jpg",
"saturn-341379_1280.jpg",
"spaceship-5570682_1280.jpg",
"spaceship-7839420_1280.jpg",
"star-trek-8658148_1280.jpg"
];

let indexNumber = null;
let nextIndex = null;
let imageFile = './img/';


function init() {
    let NewImages = document.getElementById('import-image');
    NewImages.innerHTML = ' ';
    for (let index = 0; index < images.length; index++) {
       NewImages.innerHTML += `<img src="./img/${images[index]}" onclick="dialogOpen(); dialogImgImport(this);" class="mainImg" alt="Images">`;
    }
}


// function - value lesen bei anclicken und übertragen in dialog zu scr 
function dialogImgImport(clickedImage) {

    // Holt den kompletten src-Wert des angeklickten Bildes (z. B. "./img/pic01.jpg")
    let srcValue = clickedImage.getAttribute("src");
    console.log(srcValue); // Nur zur Kontrolle in der Konsole

    // Extrahiert den Dateinamen aus dem Pfad, indem am "/" getrennt und nur das letzte Element genutzt wird
    let imageName = srcValue.split('/').pop();

    // Sucht im globalen Array "images" an welcher Position sich dieses Bild befindet
    indexNumber = images.indexOf(imageName);

    // Aktualisiert die Bildnummer im Dialog, z. B. "3 / 10"
    document.getElementById("imageNumber").innerText = `${indexNumber + 1} / ${images.length} `;

    // Findet das Bild im Dialogfenster und setzt dessen "src" auf das angeklickte Bild
    let dialogImg = document.getElementById("dialogImportImage");
    dialogImg.src = srcValue;
}

function imageBefore () {
    if ( indexNumber >= images.length - 1) {
        indexNumber = -1;
        }
    
    indexNumber = indexNumber + 1;
    // Sucht im globalen Array "images" an welcher Position sich dieses Bild befindet
    let nextImage = images[indexNumber];
    // console.log(nextImage)

    let nextDialogImg = document.getElementById("dialogImportImage");
    nextDialogImg.src = imageFile + nextImage;

    // // Aktualisiert die Bildnummer im Dialog, z. B. "3 / 10"
    document.getElementById("imageNumber").innerText = `${indexNumber + 1} / ${images.length} `; 
}


function imageBack () {

    if ( indexNumber <= 0) {
        indexNumber = images.length;
        }

        indexNumber = indexNumber - 1; 
        // Sucht im globalen Array "images" an welcher Position sich dieses Bild befindet
        let nextImage = images[indexNumber];
        console.log(nextImage)

        let nextDialogImg = document.getElementById("dialogImportImage");
        nextDialogImg.src = imageFile + nextImage;

        // // Aktualisiert die Bildnummer im Dialog, z. B. "3 / 10"
        document.getElementById("imageNumber").innerText = `${indexNumber + 1} / ${images.length} `;   
}


    // Zugriff auf das Dialogelement mit seiner ID
    
    let dialogRef = document.getElementById('imgDialog');
    // Funktion zum Öffnen des Dialogs
    function dialogOpen() {
        
        dialogRef.showModal();           // Öffnet das Dialogfenster modal (blockiert Hintergrund)
        dialogRef.classList.add('opened'); // Fügt die CSS-Klasse hinzu → löst Animation & Backdrop aus
    }

    // Funktion zum Schließen des Dialogs
    function dialogClose() {
        dialogRef.close();                // Schließt den Dialog
        dialogRef.classList.remove('opened'); // Entfernt die CSS-Klasse → Animation zurücksetzen
    }



let dialog = document.getElementById("imgDialog");
let hero = dialog.querySelector(".heroDialog");

// 1. Klick AUF den Inhalt
hero.addEventListener("click", function(event) {
    // verhindert, dass der Klick zum <dialog> hochwandert
    event.stopPropagation();
});

// 2. Klick AUF das Backdrop (also den Dialog selbst)
dialog.addEventListener("click", function(event) {
    console.log("Backdrop wurde geklickt → Dialog schließen");
    dialog.close();
});
