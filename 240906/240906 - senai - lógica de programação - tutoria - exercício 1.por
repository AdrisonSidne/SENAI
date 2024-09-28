// 06/09/2024. 1� fase - Desenvolvimento Sistemas SENAI - Aluno: Jean Douglas Toledo Rodrigues Junior
// Crie um algoritmo que informa quantos dias tem determinado m�s (desconsiderando ano bissexto).
// Deve ser perguntado ao usu�rio o n�mero do m�s (1 a 12) e a resposta deve ser mostrar na tela:
// "O m�s possui x dias".
// Dica: Aproveite a mesma resposta para todos os casos que se enquadrarem.

programa {
  funcao inicio() {
    //declarar vari�veis
    inteiro mes, resto
    //coletar dados
    escreva("Qual o m�s deve-se informar a quantidade de dias?\n")
    leia(mes)
    //validar entrada
    enquanto (mes <=0 ou mes >=13){
        escreva("Digite um valor v�lido: \n")      
        leia(mes)
    }
    //analisar e responder
    se (mes == 2){
      escreva("O m�s possui 28 dias.\n")
    }
    senao se ((mes >= 1) e (mes <=7) e (mes != 2)){
      resto = mes % 2
      se (resto != 0){
        escreva("O m�s possui 31 dias.\n")
      } senao {
          escreva("O m�s possui 30 dias.\n")
        }
    }
    senao se ((mes >= 8) e (mes <=12) e (mes != 2)){
      resto = mes % 2
      se (resto != 0){
        escreva("O m�s possui 30 dias.\n")
      } senao {
          escreva("O m�s possui 31 dias.\n")
        }
    }
    senao se ((mes >= 4) e (mes <=11) e (mes != 2)){
      resto = mes % 2
      se (resto != 0){
        escreva("O m�s possui 31 dias.\n")
      } senao {
          escreva("O m�s possui 30 dias.\n")
        }
    }
  }
}