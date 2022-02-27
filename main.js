function cadastrar() {
  let data = new Date()
  let ano = data.getFullYear()
  let nascT1 = document.querySelector('#ano_nascTxt')
  let nascT = nascT1.value
  let idade = ano - nascT
  let texto = document.querySelector('#resultadoTxt')
  if (nascT == 0 || nascT > ano) {
    alert('ERRO! Verifique os dados e tente novamente')
  } else {
    let sexo = document.getElementsByName('genero')
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexo[0].checked) {
      genero = 'Homem'
      if (idade <= 3) {
        img.setAttribute('src', 'foto-homem-bebe.jpg') //bebe
      } else if (idade >= 4 && idade <= 13) {
        img.setAttribute('src', 'foto-homem-crianca.jpg') //crianca
      } else if (idade >= 14 && idade <= 17) {
        img.setAttribute('src', 'foto-homem-adolescente.jpg') //adolescente
      } else if (idade >= 18 && idade <= 49) {
        img.setAttribute('src', 'foto-homem-adulto.jpg') //adulto
      } else if (idade >= 50) {
        img.setAttribute('src', 'foto-homem-velho.jpg') //idoso
      }
    } else if (sexo[1].checked) {
      genero = 'Mulher'
      if (idade <= 3) {
        img.setAttribute('src', 'foto-bebe-mulher.jpg') //bebe
      } else if (idade >= 4 && idade <= 13) {
        img.setAttribute('src', 'foto-mulher-crianca.jpg') //crianca
      } else if (idade >= 14 && idade <= 17) {
        img.setAttribute('src', 'foto-mulher-adolescente.jpg') //adolescente
      } else if (idade >= 18 && idade <= 49) {
        img.setAttribute('src', 'foto-mulher-adulta.jpg') //adulto
      } else if (idade > 50) {
        img.setAttribute('src', 'foto-mulher-velha.jpg') //idoso
      }
    }
    texto.style.textAlign = 'center'
    texto.innerHTML = `Detectamos ${genero} com ${idade} anos`
    texto.appendChild(img)
  }
}
