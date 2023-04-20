
// let p1 = "1.- Monitor 24 pulgadas, 120 hz - precio: $290000"
// let p2 = "2.- Gabinete gamer - precio: $350000"
// let p3 = "3.- Procesador inter core i7 - precio: $500000"
// let p4 = "4.- Tarjeta gráfica Nvidia Gforce RTX 3070 - precio: $400000"
// let p5 = "5.- Teclado gamer - precio: $50000"
// let precioproducto1 = 290000
// let precioproducto2 = 350000
// let precioproducto3 = 500000
// let precioproducto4 = 400000
// let precioproducto5 = 50000

// alert("Productos disponbiles en venta: \n" +p1+ "\n" +p2+"\n"+p3+"\n"+p4+"\n"+p5 )

// let continuarcompra = prompt("Desea elegir algún producto? \n 1 = SI \n 2 = NO")

// let carritodecompras = 0
// let selectorproducto = 0
// let selectorcantidad = 0
// let confirmarcompra = 0

// if(continuarcompra==1){


//     do{
//     selectorproducto = prompt("Seleccione su producto indicando el número correspondiente: \n"+p1+ "\n" +p2+"\n"+p3+"\n"+p4+"\n"+p5)
//     selectorcantidad = prompt("Seleccione la cantidad de su producto: ")
//     switch(selectorproducto){
//         case "1":
//             carritodecompras = carritodecompras+ precioproducto1*selectorcantidad
//         break;
//         case "2":
//             carritodecompras = carritodecompras+ precioproducto2*selectorcantidad
//         break;
//         case "3":
//             carritodecompras = carritodecompras+ precioproducto3*selectorcantidad
//         break;
//         case "4":
//             carritodecompras = carritodecompras+ precioproducto4*selectorcantidad
//         break;
//         case "5":
//             carritodecompras = carritodecompras+ precioproducto5*selectorcantidad
//         break;
//     }
    
//     }while(confirm("Desea agregar otro artículo a su carrito de compras?"))
    
//     confirmarcompra = confirm("Desea confirmar su compra?")
//     if(confirmarcompra==true){
//        alert("Muchas gracias por su compra: el valor a pagar es: $"+carritodecompras)
//     }else{
//        alert("Su compra ha sido cancelada, vuelva pronto")
//     }


    
// }else if(continuarcompra==2){
//     alert("MUCHAS GRACIAS POR VISITAR NUESTRO SITIO, VUELVA PRONTO")
// }

const producto1 = {id_producto:1,nombre_producto:"Monitor 24 pulgadas 120 hz", precio_producto:290000}
const producto2 = {id_producto:2,nombre_producto: "Gabinete gamer",precio_producto:350000}
const producto3 = {id_producto:3,nombre_producto: "Procesador inter core i7", precio_producto: 500000}
const producto4 = {id_producto:4,nombre_producto: "Tarjeta gráfica Nvidia Gforce RTX 3070", precio_producto: 400000}
const producto5 = {id_producto:5,nombre_producto: "Teclado gamer",precio_producto: 50000}

const productos = []

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)
productos.push(producto5)


let padre = document.getElementsByClassName("main")


function mostrarproductos(){
    productos.forEach((info)=>{
        const 
    })
}


// alert("Productos disponbiles en venta: \n" +"id: "+producto1.id_producto+" - Nombre: "+producto1.nombre_producto+" - Precio: $"+producto1.precio_producto+"\n"+"id: "+producto2.id_producto+" - Nombre: "+producto2.nombre_producto+" - Precio: $"+producto2.precio_producto+"\n"+"id: "+producto3.id_producto+" - Nombre: "+producto3.nombre_producto+" - Precio: $"+producto3.precio_producto+"\n"+"id: "+producto4.id_producto+" - Nombre: "+producto4.nombre_producto+" - Precio: $"+producto4.precio_producto+"\n"+"id: "+producto5.id_producto+" - Nombre: "+producto5.nombre_producto+" - Precio: $"+producto5.precio_producto)

let continuarcompra = confirm("Desea elegir algún producto?")


let selectorproducto = 0
let selectorcantidad = 0
// let confirmarcompra = 0

const Carritodecompras = {id_prod:0,nombre_prod:"nombre producto",precio_prod:0,cantidad_prod:0,precio_pagar_prod:0}
const carrito_de_compras_con_productos =[]


if(continuarcompra){
    
    

    do{
    

     selectorproducto = Number(prompt("Seleccione su producto indicando el número correspondiente: \n"+"id: "+producto1.id_producto+" - Nombre: "+producto1.nombre_producto+" - Precio: $"+producto1.precio_producto+"\n"+"id: "+producto2.id_producto+" - Nombre: "+producto2.nombre_producto+" - Precio: $"+producto2.precio_producto+"\n"+"id: "+producto3.id_producto+" - Nombre: "+producto3.nombre_producto+" - Precio: $"+producto3.precio_producto+"\n"+"id: "+producto4.id_producto+" - Nombre: "+producto4.nombre_producto+" - Precio: $"+producto4.precio_producto+"\n"+"id: "+producto5.id_producto+" - Nombre: "+producto5.nombre_producto+" - Precio: $"+producto5.precio_producto))
    
    

    selectorcantidad = Number(prompt("Seleccione la cantidad de su producto: "))
    const producto_seleccionado = productos.find((producto_encontrado) => {
        return producto_encontrado.id_producto===selectorproducto})  
        
        const id_producto_carrito = producto_seleccionado.id_producto
        const nombre_unitario_producto = producto_seleccionado.nombre_producto
        const precio_unitario = producto_seleccionado.precio_producto
        const cantidad_productos = selectorcantidad
        const monto_total_carrito = precio_unitario*selectorcantidad

        console.log(monto_total_carrito)
        //hasta acá funciona bien

    function Productosencarrito(id_prod,nombre_prod,precio_prod,cantidad_prod,precio_pagar_prod){
        this.id_prod = id_prod;
        this.nombre_prod = nombre_prod;
        this.precio_prod = precio_prod;
        this.cantidad_prod = cantidad_prod;
        this.precio_pagar_prod = precio_pagar_prod

    }

    const producto_en_carrito = new Productosencarrito(id_producto_carrito,nombre_unitario_producto,precio_unitario,cantidad_productos,monto_total_carrito)

    carrito_de_compras_con_productos.push(producto_en_carrito)

    

    // function agregar_prod(){
    //     let id_producto_en_carrito = id_producto_carrito
    //     let producto_carrito = nombre_unitario_producto
    //     let precio_producto_carrito = precio_unitario
    //     let cantidad_productos_en_carrito = cantidad_productos
    //     let precio_a_pagar_carrito = monto_total_carrito
    //     let nuevo_producto = new Productosencarrito(id_producto_en_carrito,producto_carrito,precio_producto_carrito,cantidad_productos_en_carrito,precio_a_pagar_carrito)
    //     Carritodecompras.push(nuevo_producto)
        
    // }
    // console.log(Carritodecompras)
    
    
//     switch(selectorproducto){
//         case "1":
//             carritodecompras = carritodecompras+ precioproducto1*selectorcantidad
//         break;
//         case "2":
//             carritodecompras = carritodecompras+ precioproducto2*selectorcantidad
//         break;
//         case "3":
//             carritodecompras = carritodecompras+ precioproducto3*selectorcantidad
//         break;
//         case "4":
//             carritodecompras = carritodecompras+ precioproducto4*selectorcantidad
//         break;
//         case "5":
//             carritodecompras = carritodecompras+ precioproducto5*selectorcantidad
//         break;
//     }
        
  
   }while(confirm("Desea agregar otro artículo a su carrito de compras?"))

  

   selecctor_segundo_paso = prompt("Seleccione los siguientes pasos en su compra: \n"+"1.- Confirmar compra y ver resumen \n"+"2.- Borrar producto del carrito \n"+"3.- Cancelar compra")







   function borrarproductodesdeopcion1(){
    do{

        function borrarproducto(){
            let opcion = prompt("Seleccione el id del producto a borrar")
            let index = carrito_de_compras_con_productos.findIndex((indice)=>{return indice.id_prod===opcion})
            carrito_de_compras_con_productos.splice(index,1)
        }
        
        borrarproducto()

        }while(confirm("Desea borrar otro producto?"))
        


if(confirm("Desea confirmar compra y pagar: \n Aceptar para continuar \n Cancelar para cancelar la compra")){
    const carritofinaldecompras = carrito_de_compras_con_productos.reduce((acc,costo) => acc+costo.precio_pagar_prod, 0)
    console.log("Muchas gracias por su compra: a continuación tiene un detalle de los productos comprados:")
    console.log(carrito_de_compras_con_productos)
    console.log("El monto total pagado en su compra es el siguiente: $"+carritofinaldecompras)
   
    
}else{

    console.log("Lamentamos su decisión, vuelva pronto")
}
return
   }





   
             switch(selecctor_segundo_paso){
              case "1":
                console.log("Resumen de Carrito de compras: ")
                console.log(carrito_de_compras_con_productos)
                const carritofinaldecompras = carrito_de_compras_con_productos.reduce((acc,costo) => acc+costo.precio_pagar_prod, 0)
                console.log("El valor total de su carrito de compras es: $"+carritofinaldecompras)
                if(confirm("Desea pagar y finalizar la compra")){
                    const carritofinaldecompras = carrito_de_compras_con_productos.reduce((acc,costo) => acc+costo.precio_pagar_prod, 0)
                    console.log("Muchas gracias por su compra: a continuación tiene un detalle de los productos comprados:")
                    console.log(carrito_de_compras_con_productos)
                    console.log("El monto total pagado en su compra es el siguiente: $"+carritofinaldecompras)
                }else{
                    if(confirm("Desea borrar algún producto: \n Aceptar para Borrar un producto \n Cancelar para cancelar la compra")){
                    borrarproductodesdeopcion1()
                    }else{
                        console.log("Lamentamos su decisión, vuelva pronto")
                    }
                   
                }


              break;
              case "2":
                
             
            
                        do{

                        function borrarproducto(){
                            let opcion = prompt("Seleccione el id del producto a borrar")
                            let index = carrito_de_compras_con_productos.findIndex((indice)=>{return indice.id_prod===opcion})
                            carrito_de_compras_con_productos.splice(index,1)
                        }
                        
                        borrarproducto()

                        }while(confirm("Desea borrar otro producto?"))
                        

            
                if(confirm("Desea confirmar compra y pagar: \n Aceptar para continuar \n Cancelar para cancelar la compra")){
                    const carritofinaldecompras = carrito_de_compras_con_productos.reduce((acc,costo) => acc+costo.precio_pagar_prod, 0)
                    console.log("Muchas gracias por su compra: a continuación tiene un detalle de los productos comprados:")
                    console.log(carrito_de_compras_con_productos)
                    console.log("El monto total pagado en su compra es el siguiente: $"+carritofinaldecompras)
                   
                    
                }else{

                    console.log("Lamentamos su decisión, vuelva pronto")
                }

              break;
              case "3":
                alert("Lamentamos su decisión, vuelva pronto")
              break;
                    
             }
    
    



    
//     confirmarcompra = confirm("Desea confirmar su compra?")
//     if(confirmarcompra==true){
//        alert("Muchas gracias por su compra: el valor a pagar es: $"+carritodecompras)
//     }else{
//        alert("Su compra ha sido cancelada, vuelva pronto")
//     }

// const mostrar_por_pantalla = JSON.stringify(carrito_de_compras_con_productos,null,2);
// alert(mostrar_por_pantalla)

    
}else if(confirm){
     alert("MUCHAS GRACIAS POR VISITAR NUESTRO SITIO, VUELVA PRONTO")
     }


//no he borrado los scripts de la primera entrega con el fin de reutilizarlos y no perder la idea. Además de tener un respaldo lo que había hecho. De antemano, gracias por su comprensión :)

//PD: ALGUNOS PASOS LOS HICE CON ALERTS Y OTROS POR CONSOLA 