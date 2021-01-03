function Enviar() {

   var nome = document.getElementById("nomeid");
   var email = document.getElementById("emailid");
   var cpf = document.getElementById("cpfid");
   var tel = document.getElementById("telid");
   var cep = document.getElementById("cepid");
   var end = document.getElementById("endid");
   var num = document.getElementById("numid");
   var bairro = document.getElementById("bairroid");
   var cidade = document.getElementById("cidadeid");
   var estado = document.getElementById("estadoid");

       alert('Obrigado! ' + nome.value + ' os seus dados foram encaminhados com sucesso');
       alert(`Seus dados foram: 
                                 Email: ${email.value}
                                 CPF: ${cpf.value} 
                                 Telefone: ${tel.value}
                                 CEP: ${cep.value} 
                                 Endereço: ${end.value},${num.value}
                                 Bairro: ${bairro.value}
                                 Localização: ${cidade.value} - ${estado.value}`);


}

/* 
Você deverá enviar um link do seu github com:

* Formulário de Cadastro de clientes contendo
- Nome
- E-mail
- CPF ou CNPJ
- Telefone
- CEP
- Logradouro
- Número
- Bairro
- Cidade
- Estado

* Listagem destes dados
* Exclusão de algum item da lista

Deverá ser feito em qualquer linguagem de programação, mas se você fizer isto em JavaScript, será considerado um diferencial.

*/