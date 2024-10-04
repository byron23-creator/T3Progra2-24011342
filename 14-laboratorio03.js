/***********  Laboratorio 3  ************
 * 
 * En este laboratorio deberás crear el objeto images y lo utilizarás
 * para almacenar imágenes.  El objeto "images" debe contener una propiedad
 * "list", que será una matriz de objetos de imagen y métodos:
 * 
 *    1.  contains -- toma como argumento el título de la imagen y retorna
 *                    true si la imagen ya está colocada en la lista 
 *                    (de lo contrario retorna false).
 *    2.  add      -- toma tres argumentos (title, artist, y date) y crea
 *                    un nuevo objeto basado en ellos y lo agrega a la lista
 *                    (si aún no se ha agregado).
 *    3.  show     -- que muestra todas las imágenes de la lista.
 *    4.  clear    -- que elimina todos los objetos de la lista.
 * 
 * Al crear el objeto, utilice el constructor Image preparado en la tarea
 * anterior//** */


// Constructor de Image
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Objeto images
let images = {
    list: [], 
    
    contains: function(title) {
        return this.list.some(image => image.title === title);
    },
 
// Add    
    add: function(title, artist, date) {
        if (!this.contains(title)) {
            let newImage = new Image(title, artist, date);
            this.list.push(newImage);
            console.log(`Imagen "${title}" agregada a la lista.`);
        } else {
            console.log(`La imagen "${title}" ya está en la lista.`);
        }
    },

// Show    
    show: function() {
        if (this.list.length === 0) {
            console.log("La lista de imágenes está vacía.");
        } else {
            this.list.forEach(image => {
                console.log(`Título: ${image.title}, Artista: ${image.artist}, Año: ${image.date}`);
            });
        }
    },
    
//  Clear    
    clear: function() {
        this.list = [];
        console.log("La lista de imágenes ha sido vaciada.");
    }
};

// Prueba
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("La última cena", "Leonardo da Vinci", 1495);
images.add("La noche estrellada", "Vincent van Gogh", 1889);
images.add("El grito", "Edvard Munch", 1893);
images.add("El Guernica", "Pablo Picasso", 1937);

// Agregar una imagen ya existente
images.add("Mona Lisa", "Leonardo da Vinci", 1503);

// Mostrar todas las imágenes
images.show();

// Limpiar la lista
images.clear();

// Mostrar después de vaciar la lista
images.show();
