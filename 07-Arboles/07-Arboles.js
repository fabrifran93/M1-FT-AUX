const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar 'no se encontró el valor'.
// Ejemplo      (10)          
//             /     \
//          (7)     (12)       
//         /  \      /  \
//      (2)  (9)  (11)  (15)   
BinarySearchTree.prototype.search= function(value){
    if(this.value === value) return this.value; //caso base
while(this.right || this.left){ //iteracion
        if(value > this.value){
        return this.right.search(value) //recursion
            }else{
        return this.left.search(value) //recursion
        }
    }
return "no se encontró el valor"
}


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0 ----> Canti
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)   (9)  (11)  (15)   ----> nivel 2


BinarySearchTree.prototype.height= function(){

// if(!this.left&&!this.right) return 0;
//   if(this.right && !this.left) return 0 + this.right.size()
//   if(!this.right && this.left) return 0 + this.left.size()
//   if(this.right.size()>this.left.size()) return this.right.height() + 1
//   if (this.right.size()<this.left.size())return this.left.height() + 1
//   else if (this.right.size() === this.left.size()) return this.right.height() + 1

// let aux = [];
// if(!this.left&&!this.right){
//     aux.push(this.value)
// }
// let contador = 0;x
// if(!this.left&&!this.right) return 0;
//   if(this.right && !this.left) return 0 + contador++;
//   if(!this.right && this.left) return 0 + contador++;

let height;
    if(!this.right && !this.left) {
        return 0;
    } else {
        let lftHeight = (!this.left) ? 0 : (this.left.height(0+this.left.size() ) +1);
        let rghHeight = (!this.right) ? 0 : (this.right.height(0+this.right.size()) +1);
        height = Math.max(lftHeight, rghHeight);
    }
    return height;

 }
 

 


module.exports={
    BinarySearchTree
}