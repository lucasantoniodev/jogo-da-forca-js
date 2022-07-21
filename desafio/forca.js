class Forca {
  constructor (palavraSecreta = 'string') {
    this.palavraSecreta = palavraSecreta.toLowerCase()
    this.letrasCorretas = []
    this.letrasChutadas = []
    this.palavraCompleta = this.gerarLinhas()
    this.vidas = 6
    this.estado = 'aguardando chute'
  }

  chutar (letra = 'string') {
    // Verificar quantidade de vidas
    if (this.vidas <= 0) {
      console.log('Vidas insulficientes!')
      this.estado = 'perdeu'
      return
    }

    // Validando quantidade de letras
    if (letra.length > 1) {
      console.log('Você só pode digitar uma letra, tente novamente.\n')
      return
    }

    // Substituindo string vazia por espaço
    if (letra == '') {
      letra = ' '
    }

    // Transformando letra para minúsculo
    const letraLower = letra.toLowerCase()

    // Verificando se a letra inserida já foi solicitada antes
    if (this.letrasChutadas.includes(letraLower)) {
      console.log('Você já digitou essa letra antes, tente uma diferente.\n')
      return
    }

    // Adicionando letra na lista de letras chutadas
    this.letrasChutadas.push(letraLower)

    // Verificando se a letra inclui na palavra secreta, caso contrário perde uma vida
    if (this.palavraSecreta.includes(letraLower)) {
      this.letrasCorretas.push(letraLower) // Adicionando a letra na lista de letras Corretas
    } else {
      this.vidas--
      console.log(
        `Você errou, agora você tem um total de ${this.vidas} vidas.\n`
      )
    }

    // Substituindo letra correta no seu devido índice da lista
    for (let l in this.palavraCompleta) {
      if (this.palavraSecreta[l] === letraLower) {
        this.palavraCompleta[l] = letraLower
      }
    }

    // Montando palavra temporária até conferir se a palavra coincide com a palavra secreta
    let palavraTemporaria = ''
    for (let i in this.palavraCompleta) {
      palavraTemporaria += this.palavraCompleta[i]
      if (palavraTemporaria === this.palavraSecreta) {
        this.estado = 'ganhou'
      }
    }
  }

  // Gerando quantidade de linhas com base na palavra secreta
  gerarLinhas () {
    let linhas = []
    for (let i = 1; i <= this.palavraSecreta.length; i++) {
      linhas.push('_')
    }
    return linhas
  }

  buscarEstado () {
    return this.estado
  }

  buscarDadosDoJogo () {
    return {
      letrasChutadas: this.letrasChutadas,
      vidas: this.vidas,
      palavra: this.palavraCompleta,
      palavraCompleta: this.palavraCompleta.join('')
    }
  }
}

module.exports = Forca
