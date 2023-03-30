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
            precioTotal:0,
		}
	},

created(){
	this.pedirDatos()
    
},

mounted(){
    console.log(this.tienda)
    this.tienda = JSON.parse(localStorage.getItem('cart')) || []
    console.log(this.tienda)
    this.precioTotal = this.tienda.reduce((acc, item) => {return acc + item.price},0)

},
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
                if(document.getElementById("past")){
                    this.eventos = data.events.filter(event => event.date < this.fecha)
                    this.eventosAMostrar = this.eventos
                }else if(document.getElementById("upcoming")){
                    this.eventos = data.events.filter(event => event.date >= this.fecha)
                    this.eventosAMostrar = this.eventos
                }else if(document.getElementById("details")){
                    const locationURL = document.location.search
                    const param = new URLSearchParams(locationURL)
                    let idParam = param.get("id")
                    this.eventosAMostrar =data.events.find(event => event._id == idParam)
                }else{
                    this.eventos = data.events
                    this.eventosAMostrar = this.eventos
                }
                this.extraerCategorias(this.eventos)
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
        if(!this.tienda.find(eventoF => {eventoF._id == evento._id})){
            console.log(this.tienda.find(eventoF => {eventoF._id == evento._id}))
            this.tienda.push(evento)
            console.log(this.tienda)
            localStorage.setItem('cart',JSON.stringify(this.tienda))
            this.precioTotal = this.tienda.reduce((acc, item) => {return acc + item.price},0)
        }
    },
    eliminarShop(evento){
        console.log(this.tienda)
        this.tienda = this.tienda.filter(eventoF => eventoF.name != evento.name)
        localStorage.setItem('cart',JSON.stringify(this.tienda))
        this.precioTotal = this.tienda.reduce((acc, item )=> {return acc + item.price},0)
    },

    resetShop(){
        this.tienda = []
        localStorage.clear()
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
