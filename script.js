class Alumno{
	#codigo;

	constructor(codigo){
		this.#codigo = codigo;
	}
	
	promedio(){
		return (nota1/2);
	}
	
	set setcodigo(codigo){
		this.#codigo = codigo;
	}
	get getcodigo(){
		return this.#codigo;
	}
}

const alum1 = new Alumno('159');
// alum1.codigo = 1563;
alum1.setcodigo= 50;
console.log(alum1.getcodigo);