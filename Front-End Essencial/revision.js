const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = true
        if(false){
            resolve("Dados carregados com sucesso!")
        } else {
            reject(new Error("Falha ao carregar os dados."))
        }
    }, 3000)
})

minhaPromise.then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.error('Erro: ', error)
}).finally(() => { // Pega erro ou resultado
    console.log("Operação consluída.")
})