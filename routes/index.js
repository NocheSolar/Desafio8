const { Router} = require ('express')
const fs = require('fs');
const router = Router()
const productos = []


class Contenedor {
    constructor(archivo) {
      this.archivo = archivo;
    }

    /*async save(object) {
        let products = await fs.promises.readFile(`./${this.archivo}`, 'utf-8')

        if(!products) {
            object.id = 1
            const array = [object]
            await fs.promises.writeFile(`./${this.archivo}`, JSON.stringify(array))
            return object.id
        } else {
            products = JSON.parse(products);
            object.id = products.length + 1
            products.push(object)
            await fs.promises.writeFile(`./${this.archivo}`, JSON.stringify(products))
            return object.id
        }
    }*/


    async getByid(id){
        const productoBuscado = await productos.find(i => i.id === id)
        const error = {error : "producto no encontrado"}
        if(!productoBuscado){
            return error
        }else{
            return productoBuscado
        }
    }

    async delete(id){
        const productoBorrado = await productos.filter(i => i.id != id)
        this.productos.push(productoBorrado)
    }


    /*async deleteAll(){
        try {
            await fs.promises.writeFile( this.archivo, '[]' )
            console.log('Se ha eliminado todo');
        } catch (error) {
            console.log(`Error4 ${error}`);
        }
    }*/

}
const bd = new Contenedor(productos);


router.get('/', (req, res) => {
    res.send('Home')
})

router.get ('/productos', (req,res) =>{
    res.json (productos)
})
router.post ('/productos', (req,res) =>{
    const { tittle, price, thumbnail} = req.body
    productos.push ({ tittle, price, thumbnail})
    res.sendStatus(201);
})

router.get("/:id", (req, res)=>{
    res.json(contenedorProductos.getById(Number(req.params.id)));
})

router.put("/:id", (req, res)=>{
   
})

router.delete("/:id", (req, res)=>{
    res.json(contenedorProductos.deleteById(Number(req.params.id)));
})

module.exports = router
