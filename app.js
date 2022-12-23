new Vue({
    el: '#app',
    data: {
        tamanho: 10,
        pintar: [],
        não_pintar: [],
        tabuleiro: false,

    },
    methods: {
        change_class(elemento){
            console.log(elemento)
            var elem = document.getElementById(`${elemento}`)
            if (elem.classList.contains("naocelula") && !this.tabuleiro){
                elem.classList.remove("naocelula")
                elem.classList.add("celula")
            } else if (elem.classList.contains("celula") && !this.tabuleiro){
                elem.classList.remove("celula")
                elem.classList.add("naocelula")
            }
                
        },
        loo(){
            this.tabuleiro = true
            setInterval(this.passagem, 1000)
        },
        passagem(){
            this.pintar = []
            this.não_pintar = []
            for (linha=1; linha<11; linha++){
                for (coluna=1; coluna<11; coluna++){
                    this.contador_de_vizinhos(linha, coluna)
                }
            }
            console.log("Pintei")
            this.pinta()
            },
         pinta(){
            for (var elemento of this.pintar) {
                var elem = document.getElementById(`${elemento}`)
                if (elem.classList.contains("naocelula")){
                    elem.classList.remove("naocelula")
                }
                elem.classList.add("celula")
            }
            for (var elemento of this.não_pintar) {
                var elem = document.getElementById(`${elemento}`)
                if (elem.classList.contains("celula")){
                    elem.classList.remove("celula")
                }
                elem.classList.add("naocelula")
            }
        },
        contador_de_vizinhos(linha,coluna){
            vizinhos = []
            if(linha == 1 && coluna == 1){
                var elem = document.getElementById(`l${linha}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha+1}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha+1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                // pronto
            } else if (linha == this.tamanho && coluna == 1) {
                var elem = document.getElementById(`l${linha}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha-1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha-1}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                // pronto
            } else if (linha == this.tamanho && coluna == this.tamanho){
                var elem = document.getElementById(`l${linha-1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha-1}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                // pronto
            } else if (linha == 1 && coluna == this.tamanho){
                var elem = document.getElementById(`l${linha+1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha+1}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                // Pronto

            } else if (linha == 1){
                var elem = document.getElementById(`l${linha+1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha+1}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha+1}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                // pronto
            } else if (linha == this.tamanho) {
                var elem = document.getElementById(`l${linha-1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha-1}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha-1}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                // pronto 
            } else if (coluna == 1) {
                var elem = document.getElementById(`l${linha-1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha+1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha-1}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha+1}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                // pronto
            } else if (coluna == this.tamanho) {
                var elem = document.getElementById(`l${linha-1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha+1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha-1}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha+1}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                // pronto
            } else{
                var elem = document.getElementById(`l${linha}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha-1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha+1}c${coluna}`)
                vizinhos.push(elem.classList.contains("celula"))
                //
                var elem = document.getElementById(`l${linha-1}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                // 
                var elem = document.getElementById(`l${linha+1}c${coluna-1}`)
                vizinhos.push(elem.classList.contains("celula"))
                // 
                var elem = document.getElementById(`l${linha-1}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                // 
                var elem = document.getElementById(`l${linha+1}c${coluna+1}`)
                vizinhos.push(elem.classList.contains("celula"))
                // 
            }
            elemento = document.getElementById(`l${linha}c${coluna}`)
            var quantidade_de_vizinhos_vivos = vizinhos.filter(x => x === true).length
            if (elemento.classList.contains("celula") == false && quantidade_de_vizinhos_vivos == 3){
                this.pintar.push(`l${linha}c${coluna}`)
            } else if(elemento.classList.contains("celula") == true && quantidade_de_vizinhos_vivos == 2 || elemento.classList.contains("celula") == true && quantidade_de_vizinhos_vivos == 3 ){
                this.pintar.push(`l${linha}c${coluna}`)
            } else{
                this.não_pintar.push(`l${linha}c${coluna}`)
            }
        }
    }
})