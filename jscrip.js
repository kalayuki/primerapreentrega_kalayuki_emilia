//Registro de usuario
let usuarioRegistrado= prompt ("Para ingresar debe estar registrado \nUsted se ha registrado?")

function usuarioregistrado (usuarioRegistrado){
    while (usuarioRegistrado.toUpperCase() =="SI"){
        let usuario= prompt ("Ingresar usuario");
        let password= prompt("Ingresar password")
        if (usuario != " "&& password !=" "){
            alert ("No se encuentra usuario y contraseña. \nDebe registrarse") 
        }
        usuarioRegistrado= prompt ("Para ingresar debe estar registrado \nUsted se ha registrado?")
    }  
    if (usuarioRegistrado.toUpperCase() == "NO"){
        let usuario= prompt ("Registrar usuario");
        let password= prompt("Registrar contraseña (solo numeros)")
        alert (`Bienvenido/a/e ${usuario}`)
    }
} usuarioregistrado(usuarioRegistrado.toUpperCase())

let ingreso = confirm ("Usted desea realizar una compra?")
//Constroctor de objetos Producto
class Producto {
    constructor (tipo,nombre,medida,precio){
      this.tipo=tipo;
      this.nombre= nombre;
      this.medida=medida;
      this.precio= precio;
    }
  }
//Array de objetos producto
const productos=[
    new Producto ("DESAYUNOS Y MERIENDAS","ALMOHADITAS","250g",190),
    new Producto ("DESAYUNOS Y MERIENDAS","QUINOA POP","100g",90),
    new Producto ("DESAYUNOS Y MERIENDAS","PASTA DE MANI","500g",90),
    new Producto ("FRUTOS SECOS","ALMENDRAS","1KG",1700),
    new Producto ("FRUTOS SECOS","NUEZ","100G",200),
    new Producto ("LECHES VEGETALES","LECHE DE ALMENDRAS","1L", 320),
    new Producto ("LECHES VEGETALES","LECHE DE COCO", "1L",350),
    new Producto ("LECHES VEGETALES","LECHE DE COCO","910ml",250 ),
    new Producto ("LECHES VEGETALES","LECHE DE ARROZ","1L",350 ),
    new Producto ("LEGUMBRES Y SEMILLAS","LENTEJAS","500g",160),
    new Producto ("LEGUMBRES Y SEMILLAS","GARBANZO","500g",160),
    new Producto ("LEGUMBRES Y SEMILLAS","POROTO ADUKI","500g",160),
    new Producto ("LEGUMBRES Y SEMILLAS","POROTO DE SOJA","500g",190),
    new Producto ("LEGUMBRES Y SEMILLAS","POROTO BLANCO","500g",190),
    new Producto ("ACEITES Y CONDIMENTOS","ACEITE DE COCO","360ml",450),
    new Producto ("ACEITES Y CONDIMENTOS","ACEITE DE OLIVA","500ml",850),
    new Producto ("ACEITES Y CONDIMENTOS","ACETO","250ml",350),
    new Producto ("ACEITES Y CONDIMENTOS","ACEITE DE COCO","360ml",450),
    new Producto ("MIX","MIX PREMIUM","500g",750),
    new Producto ("MIX","MIX NEMU","500g",850),
    new Producto ("MIX","MIX SALADO","500g",400),
    new Producto ("MIX","MIX BASICO","500g",400),
    new Producto ("MIX","MIX TROPICAL","500g",450),
  ]
//Presentacion en promp de productos
let nombr= " "
productos.forEach((nombre=>{

  nombr +=(`\nNOMBRE: ${nombre.nombre} x ${nombre.medida}   =   $${nombre.precio}`)
}))
let productoing = prompt(`Ingresar el nombre del producto que desea ${nombr}`)
let cantidad= Number(prompt("ingresrar cantidad"))
// carrito basio para array de la compra
let carrito = []
//Calcular precio por unidades compradas
function calcular (){
  
  let producto = productos.find(product => product.nombre === productoing.toUpperCase())
  producto.cantidad=cantidad
  producto.totalXunidad=producto.precio *cantidad
  alert(`${producto.nombre} x ${cantidad} und = $${producto.totalXunidad }`)
  carrito.push(producto)

}
// Ciclo para ingreso de compra
while ( productoing.toUpperCase() != 5){
    calcular(productoing,cantidad)
    productoing = prompt(`PARA FINALIZAR COMPRA INGRESE 5
    Para contuinuar ingrese nombre de producto que desea ${nombr} 
    `)
    cantidad= Number(prompt("ingresrar cantidad"))
    if(productoing==5){
      alert (`Usted ha ingresa 5 para finalizar.
      Se emitira extrato de la compra y el total a abonar`)
     }
    
    
 }
 // Finalizacion de la compra
let totalFinal=0;
let compraDesglo=""
carrito.forEach((totalFin)=>{
  totalFinal +=totalFin.totalXunidad;
  compraDesglo +=(`\n${totalFin.nombre} X ${totalFin.cantidad} Unid = $${totalFin.totalXunidad} `)
});
alert(`Usted ha realizado la siguiente compra ${compraDesglo} 
Total = $${totalFinal}`)
console.log(totalFinal)
