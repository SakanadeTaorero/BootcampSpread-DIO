function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Kaliel', 'Admin');
usuarios.set('Adryan', 'Admin');
usuarios.set('Couts', 'User');
usuarios.set('Helias', 'User');

console.log(getAdmins(usuarios));
