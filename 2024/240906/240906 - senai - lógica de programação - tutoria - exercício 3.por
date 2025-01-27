// 06/09/2024. 1� fase - Desenvolvimento Sistemas SENAI - Aluno: Jean Douglas Toledo Rodrigues Junior
// Leia um n�mero e exiba o resultado do fatorial deste n�mero.
// Exemplo:
// N�mero: 5
// Resultado: 5 * 4 * 3 * 2 * 1 = 120
programa {
  funcao inicio() {
    //declarar vari�veis
    inteiro fatorial, numero
    //coletando dados
    escreva("Digite o n�mero para descobrir seu fatorial:\n")
    leia(numero)
    //validando dados
    enquanto(numero <= 0){
      escreva("Digite um n�mero v�lido (inteiro e maior que zero).")
      leia(numero)
    }
    //analisando e escrevendo resultado
    escreva("Resultado: ", numero)
    fatorial = numero
    enquanto(numero>1){
      fatorial = fatorial * (numero-1)
      numero--
    escreva(" * ", numero)
    }
    escreva(" = ")
    escreva(fatorial)
  }
}