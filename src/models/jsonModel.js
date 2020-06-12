const fs = require ('fs');
const path = require ('path');

module.exports = (archivo) => {

    const funciones = {
        path: path.join (__dirname, '..', 'data', archivo + '.json'), 
        leerJson: function (){
            const dataJson = fs.readFileSync(path.join(__dirname, '..', 'data', this.path), 'utf-8');
            const data = JSON.parse(dataJson);

            return data;
        },
        escribirJson: function (data) {
            data = JSON.stringify (data, null, ' ')
            fs.writeFileSync(data, this.path)
        },
        guardarUno: function (newData) {
            let allData = this.leerJson();
            allData = [...allData, newData];
            this.escribirJson(allData)
        },
        findById: function (id){
            const data = this.leerJson();
            const obj = data.find (function (elemento){
                return elemento.id == id;
            })
            return obj;
        },
        filterBySomething: function (loQueSea){
            const data = this.leerJson();
            const dataFiltrada = data.filter (loQueSea);
            return dataFiltrada;
        }, 
        findBySomething: function (loQueSea){
            const data = this.leerJson();
            const dataFiltrada = data.find (loQueSea);
            return dataFiltrada;
        },
        edit: function(newData, id){
            let data = this.leerJson();

            let newProduct = {
                id: id,
                ...newData
            }

            data = data.map(product => {
                if(product.id == id){
                    nreProduct = {
                        ...newProduct,
                        image: product.image
                    }
                    return newProduct; 
                }
                return product
            })

            this.escribirJson (data);
        }
    }
    
    return funciones;
}