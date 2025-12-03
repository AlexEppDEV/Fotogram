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
       NewImages.innerHTML += `<img src="./img/${images[index]}" onclick="dialogOpen(); dialogImgImport(this);" tabindex="0" class="mainImg" alt="Images">`;
    }
}


// function - value lesen bei anclicken und übertragen in dialog zu scr 
function dialogImgImport(clickedImage) {
    let srcValue = clickedImage.getAttribute("src");
    let imageName = srcValue.split('/').pop();
    indexNumber = images.indexOf(imageName);
    document.getElementById("imageNumber").innerText = `${indexNumber + 1} / ${images.length} `;
    let dialogImg = document.getElementById("dialogImportImage");
    dialogImg.src = srcValue;
}
// Function zum vor blättern
function imageBefore () {
    if ( indexNumber >= images.length - 1) {
        indexNumber = -1;
        }
    indexNumber = indexNumber + 1;
    let nextImage = images[indexNumber];
    let nextDialogImg = document.getElementById("dialogImportImage");
    nextDialogImg.src = imageFile + nextImage;
    document.getElementById("imageNumber").innerText = `${indexNumber + 1} / ${images.length} `; 
}

// Function zum zurück blättern
function imageBack () {

    if ( indexNumber <= 0) {
        indexNumber = images.length;
        }
        indexNumber = indexNumber - 1; 
        let nextImage = images[indexNumber];
        let nextDialogImg = document.getElementById("dialogImportImage");
        nextDialogImg.src = imageFile + nextImage;
        document.getElementById("imageNumber").innerText = `${indexNumber + 1} / ${images.length} `;   
}
 
    let dialogRef = document.getElementById('imgDialog');
    // Funktion zum Öffnen des Dialogs
    function dialogOpen() {
        dialogRef.showModal();        
        dialogRef.classList.add('opened');
    }

    // Funktion zum Schließen des Dialogs
    function dialogClose() {
        dialogRef.close();                
        dialogRef.classList.remove('opened'); 
    }



let dialog = document.getElementById("imgDialog");
let hero = dialog.querySelector(".heroDialog");

// verhindert, dass der Klick zum <dialog> hochwandert
hero.addEventListener("click", function(event) {
    event.stopPropagation();
});

// Klick AUF das Backdrop (also den Dialog selbst)
dialog.addEventListener("click", function(event) {
    dialog.close();
});


//  Function für Dialog - tasten abfrage
document.addEventListener("keydown", dialogHandleKeys)

function dialogHandleKeys (event) {

    if (dialogOpen === false)  {
        return;
    }
        if (event.key === "Escape") {
            dialogClose()
        }
        if (event.key === "ArrowRight") {
            imageBefore ()
            
        }

        if (event.key === "ArrowLeft") {
            imageBack ()
        }
}

