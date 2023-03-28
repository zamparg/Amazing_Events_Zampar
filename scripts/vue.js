const { createApp} = Vue

const app = createApp({
	data(){
		return{
			fecha:'',
			url:'https://mindhub-xj03.onrender.com/api/amazing',
            eventosAMostrar: [],
            eventos: [],
            textoFilter: '',
            categorias: [],
            categoriasSeleccionadas: [],
            tienda: [],
		}
	},	
//funciones que se inicializan al principio. "created" en Vue.js se refiere a un ciclo de vida del componente que se ejecuta una vez que el componente ha sido creado, pero antes de que se haya montado en el DOM. Es similar al "constructor" de una clase en programación orientada a objetos. 
created(){
	this.pedirDatos()
    this.tienda = JSON.parse(localStorage.getItem('shop')) || []
},
mounted(){},
// funciones
methods:{
	pedirDatos(){
        fetch(this.url)
            .then(response => response.json())
            .catch(error => {
                return fetch('../scripts/amazing.json')
                    .then(response=>response.json())
            })
        
        .then(data =>{
                this.fecha = data.currentDate
                this.eventos = data.events
                this.eventosAMostrar = this.eventos
                this.extraerCategorias(data.events)
  
            })
    },
    extraerCategorias(array){
        array.forEach(elemento =>{
            if(!this.categorias.includes(elemento.category) && elemento.category){
                this.categorias.push(elemento.category)
            }
        })
    },
    agregarShop(evento){
        if(!this.tienda.includes(evento)){
            this.tienda.push(evento)
            localStorage.setItem('favs',JSON.stringify(this.tienda))
        }
    },
    eliminarShop(evento){
        this.tienda = this.tienda.filter(eventoF => eventoF.name != evento.name)
        localStorage.setItem('favs',JSON.stringify(this.tienda))
    }
},
computed:{
    superFiltro(){
        let primerFiltro = this.eventos.filter(evento => evento.name.toLowerCase().includes(this.textoFilter.toLowerCase()))
        if(!this.categoriasSeleccionadas.length){
            this.eventosAMostrar = primerFiltro
        } else {
            this.eventosAMostrar = primerFiltro.filter(evento => this.categoriasSeleccionadas.includes(evento.category))
        }
    }
}
	


}).mount('#app')

// en HTML, podemos usar v-for o v-if
// directiva para atributos :src="persona.img || sino tiene, url"
