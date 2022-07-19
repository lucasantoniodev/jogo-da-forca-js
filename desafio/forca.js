class Forca {
  constructor (palavraSecreta) {
    this.palavraSecreta = palavraSecreta
    this.palavra = []
    this.letrasChutadas = []
    this.palavraCompleta = this.gerarLinhas()
    this.vidas = 6
    this.estado = 'aguardando chute'
  }

  chutar (letra = '') {

    if (this.vidas <= 0) {
      console.log('Vidas insulficientes!')
      this.estado = 'perdeu'
      return
    }

    if (letra.length > 1) {
      console.log('Digite apenas uma letra.\n')
      return
    }

    const letraLower = letra.toLowerCase()

    if (this.letrasChutadas.includes(letraLower)) {
      console.log('Você já digitou essa letra antes, tente uma diferente.\n')
      return
    }

    if (this.palavraSecreta.includes(letraLower)) {
      this.letrasChutadas.push(letraLower)

      for (let l in this.palavraSecreta) {
        if (letraLower === this.palavraSecreta[l]) {
          this.palavra.push(letraLower)
        }
      }
    } else {
      this.letrasChutadas.push(letraLower)
      this.vidas--
      console.log(
        `Você errou, agora você tem um total de ${this.vidas} vidas.\n`
      )
    }

    for (let l in this.palavraCompleta) {
      if (this.palavraSecreta[l] === letraLower) {
        this.palavraCompleta[l] = letraLower
      }
    }

    let palavraTemporaria = ''
    for (let i in this.palavraCompleta) {
      palavraTemporaria += this.palavraCompleta[i]
      if (palavraTemporaria === this.palavraSecreta) {
        this.estado = 'ganhou'
      }
    }
    console.log(palavraTemporaria)
  }

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
      palavra: this.palavraCompleta 
    }
  }
}

module.exports = Forca
