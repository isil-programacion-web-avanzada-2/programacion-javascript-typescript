const usuario = {
    nombre : "Roberto",
    edad: 18,
    correo: "roberto@gmail.com"
};

const tarjeta = '<div> <h2>' + usuario.nombre +'</h2>' +
'<p>Edad es: '+ usuario.edad+ '</p>' + 
'<p> Correo es: '+ usuario.correo+ '</p>'
'</div>';


const tarjetaDinamica = `
    <div>
        <h2> ${usuario.nombre}</h2>
        <p>Edad es: ${usuario.edad}</p>
        <p>Correo es: ${usuario.correo}</p>
    </div>
`;



console.log(tarjeta);


console.log(tarjetaDinamica);