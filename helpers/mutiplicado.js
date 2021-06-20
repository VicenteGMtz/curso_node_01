
var colors = require('colors');
const fs = require('fs');
const crearTabla = async (tabla = 5, listar = false, numeroMaximo = 10) => {


    try {

        let salida = '';
        let consola = '';

        for (let i = 0; i <= numeroMaximo; i++) {
            salida += `${i} ${'x'} ${tabla} =  ${i * tabla} \n`;
            consola += `${colors.cyan(i)} ${'x'.yellow} ${colors.blue(tabla)} =  ${colors.red(i * tabla)} \n`;
        }

        if (listar) {
            console.log("===================".green)
            console.log(`tabla del ${colors.green(tabla)}`);
            console.log("===================".green);


            console.log("salida \n", consola);
        }

        fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);
        return `tabla-${tabla}.txt`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearTabla
}