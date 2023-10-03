//PREMISSAS
//1 - LISTA DE COMPRAS DE ALIMENTOS NO MERCADO/FEIRA.
//2 - PERGUNTA SE USUARIO QUER COMPRAR ALIMENTO.
//3 - 3.1 - SE SIM, DIGITAR O ALIMENTO. 3.2 -SE NÃO, FECHAR E IMPRIMIR A LISTA.
//3.1.1 - DEPOIS DIGITAR QUAL A CATEGORIA DO ALIMENTO.
//4 - E REINICIAR PROCESSO, ATÉ OBTER RESPOSTA NÃO, E ENTÃO EXECUTA 3.2.
//5 - USAR ARRAYS PARA CONSTRUÇÃO DAS LISTAS DE ALIMENTOS, SEPARADAS POR CATEGORIAS.

//2ª Parte
//1 - adicionar rotina para perguntar ao usuario se deseja excluir algum item.
//2 - se sim, perguntar qual item.
//3 - localizar o item existe e então excluir da lista.
//4 - se item não estiver na lista, dar mensagem de erro e refazer a pergunta.
//5 - se não, continuar rotina de anterior.

//ERROS
//quando exclui o unico elemento da lista, app para de rodar, ao inves de rodar a rotina de inclusão ou saída do app

let cereaisEpaesEtuberculos = [] //(1)
let hortalicas = [] //(2)
let frutas = [] //(3)
let leguminosas = [] //(4)
let carnesEovos = [] //(5)
let leiteEderivados = [] //(6)
let oleosEgorduras = [] //(7)
let acucares = [] //(8)

let comprar = null
let alimento = null
let categoria = null
let posicao = null
let alimentoExiste = false
let tamanhoLista = 0


mercado()
console.log(tamanhoLista)


function mercado() {

    while(comprar == null) {             
        if(tamanhoLista == 0){
            compraInicio()            
        }
        else if(tamanhoLista > 0 ) {
            compraEtira()            
        }        
    }
}

function compraInicio() {
    comprar = prompt('Deseja adicionar algum alimento a sua lista de compras? \n Digite (1) para SIM e (2) para NÃO:' )
             
        if(comprar == 1) {
            alimento = prompt('Qual alimento gostaria de adicionar? digite abaixo:')
            categoria = prompt('Digite o numero correspondente a categoria desse alimento: (1) Cereais, Pães e Tuberculos, (2) Hortaliças, (3) Frutas, (4) Leguminosas, (5) Carnes e Ovos, (6) Leite e Derivados, (7) Óleos e Gorduras, (8) Açúcares')

            
            categorizar()   
            categoria.push(alimento)
            comprar = null

        }
        else if(comprar == 2) {
            alert(`Essa é sua lista de compras:\nCereais, Pães e Tuberculos: ${cereaisEpaesEtuberculos};\n Hortaliças: ${hortalicas};\n Frutas: ${frutas};\n Leguminosas: ${leguminosas};\n Carnes e Ovos: ${carnesEovos};\n Leite e Derivados: ${leiteEderivados};\n Óleos e Gorduras: ${oleosEgorduras};\n Açúcares: ${acucares};`)
        
        }
        else {
            alert('Opção inválida. Por favor, tente novamente!!')
            comprar = null
        }
        listaVazia()
        return
        
}

function compraEtira() {
    comprar = prompt('Deseja adicionar algum alimento a sua lista de compras? \n Digite (1) para SIM e (2) para NÃO ou se deseja excluir, digite (3):' )                
            if(comprar == 1) {
                alimento = prompt('Qual alimento gostaria de adicionar? digite abaixo:')
                categoria = prompt('Digite o numero correspondente a categoria desse alimento: (1) Cereais, Pães e Tuberculos, (2) Hortaliças, (3) Frutas, (4) Leguminosas, (5) Carnes e Ovos, (6) Leite e Derivados, (7) Óleos e Gorduras, (8) Açúcares')                
                
                categorizar()   
                categoria.push(alimento)
                comprar = null
            }
            else if(comprar == 2) {
                alert(`Essa é sua lista de compras:\nCereais, Pães e Tuberculos: ${cereaisEpaesEtuberculos};\n Hortaliças: ${hortalicas};\n Frutas: ${frutas};\n Leguminosas: ${leguminosas};\n Carnes e Ovos: ${carnesEovos};\n Leite e Derivados: ${leiteEderivados};\n Óleos e Gorduras: ${oleosEgorduras};\n Açúcares: ${acucares};`)            
            }
            else if(comprar == 3) {
                alimento = prompt(`Essa é sua lista de compras:\n Cereais, Pães e Tuberculos: ${cereaisEpaesEtuberculos};\n Hortaliças: ${hortalicas};\n Frutas: ${frutas};\n Leguminosas: ${leguminosas};\n Carnes e Ovos: ${carnesEovos};\n Leite e Derivados: ${leiteEderivados};\n Óleos e Gorduras: ${oleosEgorduras};\n Açúcares: ${acucares}; \n \n Digite abaixo qual alimento gostaria de remover da lista:`)                
                procurar()
                comprar = null
                //if(tamanhoLista)
                return               
            }
            else {
                alert('Opção inválida. Por favor, tente novamente!!')
                comprar = null
                return
            }
            listaVazia()
            return            
}

function categorizar () {
    if(categoria == 1) {
        categoria = cereaisEpaesEtuberculos
    }
    else if(categoria == 2) {
        categoria = hortalicas
    }
    else if(categoria == 3) {
        categoria = frutas
    }
    else if(categoria == 4) {
        categoria = leguminosas
    }
    else if(categoria == 5) {
        categoria = carnesEovos
    }
    else if(categoria == 6) {
        categoria = leiteEderivados
    }
    else if(categoria == 7) {
        categoria = oleosEgorduras 
    }
    else if(categoria == 8) {
        categoria = acucares
    }
}

function procurar () {
    for(categoria = 1; categoria < 9; categoria++) {
        categorizar()
        posicao = categoria.indexOf(alimento)
        alimentoExiste = categoria.includes(alimento)
        
        

        if(posicao !== -1 && alimentoExiste == true){
            categoria.splice(posicao, 1)
            alert(`O ${alimento} foi removido da lista de compras!!`)
            posicao = null
            alimentoExiste = false
            listaVazia()
            console.log(tamanhoLista)
            return
            
        }
        else if(posicao == -1 && alimentoExiste == false) {
            alert('Não foi possível encontrar o item dentro da lista!')
            return
        }
    }
    
}

function listaVazia () {
    for(categoria = 1; categoria < 9; categoria++) {
        categorizar()
        if(categoria.length > 0) {
            tamanhoLista = categoria.length           
        }    
    }   
}
