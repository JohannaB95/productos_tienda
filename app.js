require('colors');
const fs = require('fs');

const datosArchivo = require('./datos.json');

const main = async ( ) => {

    console.clear( );

    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.blue);
    console.log(`♦     `.blue+ `Proyecto Clases`.bgBlue + `     ♦`.blue);
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.blue);
    class Producto {
        #codigoProducto;
        #nombreProducto;
        #inventarioProducto;
        #precioProducto;

        constructor( ) {
            this.#codigoProducto = ' ';
            this.#nombreProducto = ' ';
            this.#inventarioProducto = 0;
            this.#precioProducto = 0;
        }

        set setCodigoProducto(value){
            this.#codigoProducto = value;
        }

        get getCodigoProducto( ){
            return this.#codigoProducto;
        }

        set setNombreProducto(value){
            this.#nombreProducto = value;
        }

        get getNombreProducto( ){
            return this.#nombreProducto;
        }

        set setInventarioProducto(value){
            this.#inventarioProducto = value;
        }

        get getInventarioProducto( ){
            return this.#inventarioProducto;
        }

        set setPrecioProducto(value){
            this.#precioProducto = value;
        }

        get getPrecioProducto( ){
            return this.#precioProducto;
        }
    }

    class ProductosTienda {
        #listaProductos;

        constructor( ) {
            this.#listaProductos = [ ];
        }

        get getListaProductos( ) {
            return this.#listaProductos;
        }

        cargarArchivoProductos( ){

            let contador = 0;
            if(datosArchivo.length > 0){
                datosArchivo.forEach(objeto =>{
                    contador++;
                    let producto = new Producto;
                    producto.setCodigoProducto = objeto.codigoProducto;
                    producto.setNombreProducto = objeto.nombreProducto;
                    producto.setInventarioProducto = objeto.inventarioProducto;
                    producto.setPrecioProducto = objeto.precioProducto;
                    this.#listaProductos.push(producto);
                });
            } else{
                console.log(`Error, el archivo datos.json no contiene datos\n`.bgYellow);
            }
            console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
            console.log(`♦ `.red + `Total de productos cargados ==> `.bgRed + ` ${contador}`.bgRed + ` ♦`.red);
            console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.red);
        }

        grabaArchivoProductos( ){

            const instanciaClaseAObjetos = this.getListaProductos.map(producto => {
                return {
                    codigoProducto: producto.getCodigoProducto,
                    nombreProducto: producto.getNombreProducto,
                    inventarioProducto: producto.getInventarioProducto,
                    precioProducto: producto.getPrecioProducto
                };
            });

            const cadenaJson = JSON.stringify(instanciaClaseAObjetos, null, 2);

            const nombreArchivo = 'datos.json';

            fs.writeFileSync(nombreArchivo, cadenaJson, 'UTF-8');

            console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
            console.log(`♦   `.cyan + `Datos guardados en ${nombreArchivo}`.bgCyan + `   ♦`.cyan);
            console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
        }

        mostrarProductos( ){
            this.getListaProductos.forEach(producto => {
                console.log(`­♦    `.yellow +  producto.getCodigoProducto + `     ­♦   `.yellow
                +  producto.getNombreProducto + `      ­♦   `.yellow +
                +  producto.getInventarioProducto + `      ­♦   `.yellow +
                +  producto.getInventarioProducto + `       ­♦   `.yellow +
                +  producto.getPrecioProducto + `     ­♦   `.yellow);
            })
        }
    }  
    
    let productosTienda = new ProductosTienda;

    productosTienda.cargarArchivoProductos( );

    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.green);
    console.log(`♦  `.green + `Datos Apertura Tienda`.bgGreen + `  ♦`.green);
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.green);

    productosTienda.mostrarProductos( );

    productosTienda.getListaProductos.forEach(producto =>{
        producto.setInventarioProducto = Math.floor(Math.random( ) * (20 - 1) +1);
    });

    console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.magenta);
    console.log(`♦  `.magenta + `Datos Cierre Tienda`.bgMagenta + `  ♦`.magenta);
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.magenta);
    productosTienda.mostrarProductos( );

    productosTienda.grabaArchivoProductos( );

}

main( );
    