function crearSectionEmpleados(empleados){
	var sectionItem = document.getElementById('listaemp');
	for(var i = 0; i < empleados.length; i++){
		var empleado = empleados[i];

		var imgFoto = document.createElement('img');
		imgFoto.setAttribute('src', empleado.foto);
		imgFoto.setAttribute('class', 'empleado-foto');

		var pNombre = document.createElement('p');
		pNombre.innerHTML = empleado.nombre + " " + empleado.apellido;
		pNombre.setAttribute('class', 'empleado-nombre');

		var pPuesto = document.createElement('p');
		pPuesto.innerHTML = empleado.puesto;
		pPuesto.setAttribute('class', 'empleado-puesto');

		var divCont = document.createElement('div');
		divCont.setAttribute('class', 'empleado');
		divCont.append(imgFoto);
		divCont.append(pNombre);
		divCont.append(pPuesto);

		sectionItem.append(divCont);
	}
}

function fetchNosotrosXml(url, cb){
	fetch("../xml/nosotros.xml")
	.then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => cb(data))
	.catch(function(err){
		console.log(err);
		throw 'No se leyo los empleados';
	});
}

function leerNosotrosXML(){
	var url = '../xml/nosotros.xml';
	var trabajadores = [];

	fetchNosotrosXml(url, function(xmlLeido){
		var empleados = xmlLeido.getElementsByTagName('empleado');

		for(var i = 0; i < empleados.length; i++){
			var children = empleados[i].children;
			var empleado = {};

			empleado.nombre = empleados[i].getAttribute('nombre');
			empleado.apellido = empleados[i].getAttribute('apellido');

			for(var j = 0; j < empleados[i].childElementCount; j++){
				var child = children[j];

				switch(child.tagName){
					case 'foto':
						empleado.foto = child.getAttribute('ruta');
						break;
					case 'puesto':
						empleado.puesto = child.innerHTML;
						break;

				}
			}
			trabajadores.push(empleado);
		}
		console.log(trabajadores);
		return crearSectionEmpleados(trabajadores);
	});
}

window.addEventListener('load', leerNosotrosXML);
