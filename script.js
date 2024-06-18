class Alumno{
	codigo;
	nombre;
	nota1;
	nota2;
	nota3;
	nota4;


	constructor(codigo,nombre,nota1,nota2,nota3,nota4){
		this.codigo = codigo;
		this.nombre = nombre;
		this.nota1 = parseFloat(nota1);
        this.nota2 = parseFloat(nota2);
        this.nota3 = parseFloat(nota3);
        this.nota4 = parseFloat(nota4);
	}

	promedio(){
		let promedio = (this.nota1*0.15)+(this.nota2*0.20)+(this.nota3*0.25)+(this.nota4*0.40);
		return promedio;
	
	}
	condicion (){
		if (this.promedio() >= 12){
			return "Aprobado";
		}else{
			return "Desaprobado";
		}
	}

	obsequio(){
		if (this.promedio() > 17){
			return "se le regala una mochila"
		}else{
			return "no se le regala la mochila"
		}
	}
}
// const alum = new Alumno(123, "Fabian", 12, 20, 0, 0);
// console.log(alum);
// console.log(alum.promedio());
// console.log(alum.condicion());
// console.log(alum.obsequio());

// $(document).ready(function() {
// 	$('#miFormulario').submit(function(e) {
// 		e.preventDefault();

// 		const alumno = new Alumno(
// 			$('#codigo').val(),
// 			$('#nombre').val(),
// 			$('#nota1').val(),
// 			$('#nota2').val(),
// 			$('#nota3').val(),
// 			$('#nota4').val(),
// 			);

// 		const promedio = alumno.promedio();
// 		const condicion = alumno.condicion();
// 		const obsequio = alumno.obsequio();

// 		alert(`El alumno ${alumno.nombre} con código ${alumno.codigo} a ${condicion} con una nota de ${promedio.toFixed(2)} y ${obsequio}`);
// 	});
// });


$(document).ready(function() {
	$('#miFormulario').submit(function(e) {
		e.preventDefault();

		const codigo = $('#codigo').val();
		const nombre = $('#nombre').val();
		const nota1 = $('#nota1').val();
		const nota2 = $('#nota2').val();
		const nota3 = $('#nota3').val();
		const nota4 = $('#nota4').val();

		const alumno = new Alumno(codigo, nombre, nota1, nota2, nota3, nota4);

		const promedio = alumno.promedio();
		const condicion = alumno.condicion();
		const obsequio = alumno.obsequio();

		alert(`El alumno ${alumno.nombre} con código ${alumno.codigo} a ${condicion} con una nota de ${promedio.toFixed(2)} y ${obsequio}`);
	});
});