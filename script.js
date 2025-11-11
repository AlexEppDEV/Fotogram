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


function init() {
    let NewImages = document.getElementById('import-image');
    NewImages.innerHTML = ' ';
    
// problem das erste bold wird nicht angezeigt
    for (let index = 0; index < images.length; index++) {
       NewImages.innerHTML += `<img src="./img/${images[index]}" onclick="dialogOpen()" alt="Fotogram">`;
    }
    

}



    // Zugriff auf das Dialogelement mit seiner ID
    
    const dialogRef = document.getElementById('myDialog');
    // Funktion zum Öffnen des Dialogs
    function dialogOpen() {
        
        dialogRef.showModal();           // Öffnet das Dialogfenster modal (blockiert Hintergrund)
        dialogRef.classList.add('opened'); // Fügt die CSS-Klasse hinzu → löst Animation & Backdrop aus
    }

    // Funktion zum Schließen des Dialogs
    function dialogClose() {
        // const dialogRef = document.getElementById('myDialog');
        dialogRef.close();                // Schließt den Dialog
        dialogRef.classList.remove('opened'); // Entfernt die CSS-Klasse → Animation zurücksetzen
    }

