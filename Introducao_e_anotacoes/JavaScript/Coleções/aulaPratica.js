function getAdmins(map) {
    let admins = []
    for ([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }

    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Claudio', 'Admin');
usuarios.set('Amanda', 'Dev');
usuarios.set('Amalia', 'Admin');
usuarios.set('Lucas', 'Logistic');


console.log(getAdmins(usuarios));


const myElements = ['Electro', 'Pyro', 'Pyro', 'Dendro', 'Dendro', 'Anemo', 'Anemo', 'Hydro']

function visoesUnicas(arr){
    const mySet = new Set(arr);

    return [...mySet]; // argumento
}

console.log(visoesUnicas(myElements));