const { createApp } = Vue

const app = createApp({
    data(){
        return {
            //apiUrl: '',
            personajesAMostrar: [],
            personajes: [],
            texto: '',
            casas: [],
            casasSeleccionadas: [],
            favoritos: [],
        }
    },
    created(){
        this.pedirDatos()
        this.favoritos = JSON.parse(localStorage.getItem('favs')) || []
    },
    mounted(){

    },
    methods:{
        pedirDatos(){
            fetch(this.apiUrl)
                .then(response => response.json())
                .then(datosApi =>{
                    this.personajes = datosApi
                    this.personajesAMostrar = this.personajes
                    this.extraerCasas(datosApi)
                })
                .catch(error => console.log(error.message))
        },
        extraerCasas(array){
            array.forEach(elemento =>{
                if(!this.casas.includes(elemento.house) && elemento.house){
                    this.casas.push(elemento.house)
                }
            })
        },
        agregarFavorito(personaje){
            if(!this.favoritos.includes(personaje)){
                this.favoritos.push(personaje)
                localStorage.setItem('favs',JSON.stringify(this.favoritos))
            }
        },
        eliminarFavorito(personaje){
            this.favoritos = this.favoritos.filter(personajeF => personajeF.name != personaje.name)
            localStorage.setItem('favs',JSON.stringify(this.favoritos))
        }
        /* filtrarPorTexto(){ */
            /* texto = document.querySelector('input').value
            this.personajesAMostrar = this.personajes.filter(personaje => personaje.name.toLowerCase().includes(texto.toLowerCase())) */
            /* this.personajesAMostrar = this.personajes.filter(personaje => personaje.name.toLowerCase().includes(this.texto.toLowerCase()))
        } */
    },
    computed:{
        /* filtrarPorTexto(){
            this.personajesAMostrar = this.personajes.filter(personaje => personaje.name.toLowerCase().includes(this.texto.toLowerCase()))
        }, */
        /* filtroPorCasa(){
            if(!this.casasSeleccionadas.length){
                this.personajesAMostrar = this.personajes
            } else {
                this.personajesAMostrar = this.personajes.filter(personaje => this.casasSeleccionadas.includes(personaje.house))
            }
        } */
        superFiltro(){
            let primerFiltro = this.personajes.filter(personaje => personaje.name.toLowerCase().includes(this.texto.toLowerCase()))
            if(!this.casasSeleccionadas.length){
                this.personajesAMostrar = primerFiltro
            } else {
                this.personajesAMostrar = primerFiltro.filter(personaje => this.casasSeleccionadas.includes(personaje.house))
            }
        }
    }
}).mount('#app')