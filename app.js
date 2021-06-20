const argv = require('./config/yargs')

const { crearTabla } = require('./helpers/mutiplicado');
crearTabla(argv.b, argv.l, argv.n)
    .then((archivo) => console.log(archivo, 'creado'))
    .catch((err) => console.log(err))


