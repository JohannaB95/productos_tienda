//Se carga la librería colors para permitir el uso de estilos de colores en la terminal.
require('colors');

//Se incluye el módulo fs que permite gestionar el sistema de archivos.
const fs = require('fs');

/*Se cargan los datos del archivo datos.json en la variable datosArchivo. Esto es posible debido al uso de require,
 que puede cargar archivos JSON en Node.js.*/
const datosArchivo = require('./datos.json');

//Se declara una función flecha llamada main y que es asíncrona
const main = async () => {

    // Limpia la consola antes de imprimir el menú principal
    console.clear();

    //Se imprime un encabezado en la consola, que sea de color azul, se añade diseño.
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.blue);
    console.log(`♦     `.blue + `Productos tienda`.bgBlue + `    ♦`.blue);
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.blue);

    //Se define la clase Producto
    class Producto {

        // Se declaran los atributos de la clase y que serán privados y son el código, nombre, inventario y precio del producto
        #codigoProducto;
        #nombreProducto;
        #inventarioProducto;
        #precioProducto;

        // Se llama al constructor que inicializa los atributos de la clase, se ejecuta al crear una nueva instancia de Producto
        constructor() {
            // Se inicializa el código del producto como un string vacio
            this.#codigoProducto = ' ';
            // Se inicializa el nombre del producto como un string vacio
            this.#nombreProducto = ' ';
            // Se inicializa la cantidad del inventario del producto como 0
            this.#inventarioProducto = 0;
            //Se inicializa el precio del producto como 0
            this.#precioProducto = 0;
        }

        //Se crea un método setter para establecer el valor del atributo #codigoProducto
        set setCodigoProducto(value) {
            this.#codigoProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #codigoProducto
        get getCodigoProducto() {
            return this.#codigoProducto;
        }

        //Se crea un método setter para establecer el valor del atributo #nombreProducto
        set setNombreProducto(value) {
            this.#nombreProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #nombreProducto
        get getNombreProducto() {
            return this.#nombreProducto;
        }

        //Se crea un método setter para establecer el valor del atributo #inventarioProducto
        set setInventarioProducto(value) {
            this.#inventarioProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #inventarioProducto
        get getInventarioProducto() {
            return this.#inventarioProducto;
        }

        //Se crea un método setter para establecer el valor del atributo #precioProducto
        set setPrecioProducto(value) {
            this.#precioProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #precioProducto
        get getPrecioProducto() {
            return this.#precioProducto;
        }
    }


    //Se define la clase ProductosTienda
    class ProductosTienda {

        // Se declara un atributo privado llamado listaProductos
        #listaProductos;

        // Constructor que inicializa el atributo #listaProductos como un arreglo vacío
        constructor() {
            this.#listaProductos = [];
        }

        // Se crea un método getter para obtener la lista de productos de #listaProductos
        get getListaProductos() {
            return this.#listaProductos;
        }

        /*Leer los datos del archivo Json
    Serializar para trabajar los datos como un arreglo de objetos de clase Producto*/
        //Se crea un método llamado cargarArchivoProductos sin parámetros
        cargarArchivoProductos() {

            //Se crea una variable llamada contador que se inicia en 0
            let contador = 0;

            //Se utiliza un if para verificar si existe algún dato en el archivo datosArchivo
            if (datosArchivo.length > 0) {
                // Se utiliza un forEach para iterar cada elemento que se encuentre en el archivo
                /*El parámetro objeto dentro de la función flecha en el forEach representa cada elemento individual 
                en el arreglo datosArchivo a medida que se itera.*/
                datosArchivo.forEach(objeto => {
                    //El contador aumentara cada vez +1
                    contador++;

                    // Se crea una nueva instancia de la clase Producto
                    let producto = new Producto;

                    // Se asignan los valores del objeto a cada uno de los atributos 

                    /*Se llama al método setCodigoProducto del objeto producto y se le asigna el valor de la propiedad 
                    codigoProducto del objeto objeto*/
                    producto.setCodigoProducto = objeto.codigoProducto;
                    /*Se llama al método setNombreProducto del objeto producto y se le asigna el valor de la propiedad
                    nombreProducto del objeto objeto*/
                    producto.setNombreProducto = objeto.nombreProducto;
                    /*Se llama al método setInventarioProducto del objeto producto y se le asigna el valor de la propiedad 
                    inventarioProducto del objeto objeto*/
                    producto.setInventarioProducto = objeto.inventarioProducto;
                    /*Se llama al método setPrecioProducto del objeto producto y se le asigna el valor de la propiedad 
                    precioProducto del objeto objeto*/
                    producto.setPrecioProducto = objeto.precioProducto;

                    // Agrega el producto a la lista de productos en la clase ProductosTienda
                    this.#listaProductos.push(producto);
                });

                //Se imprime en la consola el número de productos cargados y se añade diseño a la interfaz
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                console.log(`♦ `.red + `Total de productos cargados ==> `.bgRed + ` ${contador}`.bgRed + ` ♦`.red);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
            } else {
                //En caso de que el archivo este vacio se imprime en la consola el siguiente mensaje
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                console.log(`♦ `.red + `Error, el archivo datos.json no contiene datos`.bgRed + ` ♦`.red);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
            }
        }

        //Se crea un método llamado grabaArchivoProductos sin parámetros
        grabaArchivoProductos() {

            // Convierte objetos de clase a objetos de JavaScript
            //Se crea un nuevo arreglo
            /*Es una función de flecha que toma un argumento producto. La función devuelve un objeto que se 
            asigna a la variable instanciaClaseAObjetos. El objeto devuelto contiene una propiedad con el nombre 
            de la clave producto. */
            const instanciaClaseAObjetos = this.getListaProductos.map(producto => {
                return {
                    /*Asigna el valor de la propiedad codigoProducto del objeto producto a la clave codigoProducto 
                   en el objeto devuelto*/
                    codigoProducto: producto.getCodigoProducto,
                    /*Asigna el valor de la propiedad nombreProducto del objeto producto a la clave nombreProducto
                    en el objeto devuelto*/
                    nombreProducto: producto.getNombreProducto,
                    /*Asigna el valor de la propiedad inventarioProducto del objeto producto a la clave inventarioProducto
                    en el objeto devuelto*/
                    inventarioProducto: producto.getInventarioProducto,
                    /*Asigna el valor de la propiedad precioProducto del objeto producto a la clave precioProducto
                    en el objeto devuelto*/
                    precioProducto: producto.getPrecioProducto
                };
            });

            // Se utiliza JSON.stringify para convertir los objetos de JavaScript en una cadena de texto JSON
            const cadenaJson = JSON.stringify(instanciaClaseAObjetos, null, 2);
            //Se declara una variable que va a almacenar el archivo en el que se va a guardar la información
            const nombreArchivo = 'datos.json';

            /*Se utiliza para escribir datos en un archivo de manera sincrónica. El nombre del archivo en el que 
        se escribirán los datos. La cadena de texto JSON que se va a escribir en el archivo. La codificación 
        de caracteres que se utilizará al escribir el archivo.*/
            fs.writeFileSync(nombreArchivo, cadenaJson, 'UTF-8');

            //Se imprime un mensaje en la consola indicando que los datos se han guardado en el archivo datos.json
            console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
            console.log(`♦   `.cyan + `Datos guardados en ${nombreArchivo}`.bgCyan + `   ♦`.cyan);
            console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
        }

        //Se crea un método llamado mostrarProductos sin parámetros
        mostrarProductos() {

            /*Itera sobre cada producto en la lista y se obtienen los valores de cada uno de los atributos, luego se imprime 
             la información en la consola siguiendo el orden en el que se están especificando*/
            this.getListaProductos.forEach(producto => {
                console.log(`­♦    `.yellow + producto.getCodigoProducto + `     ­♦   `.yellow
                    + producto.getNombreProducto + `      ­♦   `.yellow +
                    +  producto.getInventarioProducto + `      ­♦   `.yellow +
                    +  producto.getPrecioProducto + `     ­♦   `.yellow);
            })
        }
    }

    // Se crea una nueva instancia de la clase ProductosTienda
    let productosTienda = new ProductosTienda;

    //Se llama a la función cargarArchivoProductos de la clase productosTienda para cargar los datos de productos desde un archivo. 
    productosTienda.cargarArchivoProductos();

    //Se imprime en la consola un mensaje con interfaz y colores
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.green);
    console.log(`♦  `.green + `Datos Apertura Tienda`.bgGreen + `  ♦`.green);
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.green);

    //Se llama a la función mostrarProductos de la clase productosTienda para mostrar en la consola la lista de productos junto con sus detalles.
    productosTienda.mostrarProductos();

    /*Se itera sobre la lista de productos usando productosTienda.getListaProductos.forEach(...).
    Para cada producto, se utiliza Math.floor(Math.random( ) * (20 - 1) + 1) para generar un número aleatorio
    entre 1 y 20 (inclusive) y se asigna como el nuevo inventario del producto. Esto simula un ajuste aleatorio 
    en el inventario de cada producto. */
    productosTienda.getListaProductos.forEach(producto => {
        producto.setInventarioProducto = Math.floor(Math.random() * (20 - 1) + 1);
    });

    //Se imprime en la consola un mensaje con interfaz y colores
    console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.magenta);
    console.log(`♦  `.magenta + `Datos Cierre Tienda`.bgMagenta + `  ♦`.magenta);
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.magenta);

    //Se llama a la función mostrarProductos de la clase productosTienda para mostrar en la consola la lista de productos junto con sus detalles.
    productosTienda.mostrarProductos();

    //Se llama a la función grabaArchivoProductos de la clase productosTienda para guardar los datos actualizados de productos en un archivo.
    productosTienda.grabaArchivoProductos();
}

//Fin de la función main
main();
