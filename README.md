# Backend-TTP-Seidor
Backend Teste Prático Seidor


1- Baixar projeto para máquina
2- Iniciar no vs code
3- No terminal digitar o comando yarn para instalar os pacotes
4 yarn dev para iniciar a aplicação

5 - CRUD Automovel
5.1 - Para criar um automovel no postman utilize a URL http://localhost:3333/automovel/
    - Selecione a opção raw e a opção JSON e coloque 
    
    {
    "marca": "VELOSTER",
    "placa": "FFF-2525",
    "cor": "cinza"
    }
    
5.2 - Para buscar automovel existem 4 opções
      
      Buscar todos => http://localhost:3333/automovel/
      Buscar pelo ID => http://localhost:3333/automovel/Id
      Buscar pela cor => http://localhost:3333/automovel/pesquisaCor/cor
      Buscar pela marca => http://localhost:3333/automovel/pesquisaMarca/marca

5.4 - Para atualizar automovel é somente possivel atualizar marca e cor
      URL http://localhost:3333/automovel/FFF-2525
        {
        "marca": "RENAULT",
        "cor": "vermelho"
        }
        
5.5 - Para deletar automovel é somente pela Placa
      URL http://localhost:3333/automovel/
      {
        "placa": "FFF-2525"
      }
      
6 CRUD motorista
6.1 - Para criar motorista utiliza URL http://localhost:3333/motorista
      {
        "nome": "Joao",
        "cpf": "1457879988"
      } 
6.2 Buscar motorista
        Buscar todos motoristas => http://localhost:3333/motorista
        Buscar pelo ID => http://localhost:3333/motorista/Id
        Buscar pelo CPF => http://localhost:3333/motorista/pesquisaCpf/1457879988
        
6.3 Para atualizar motorista é somente possivel atualizar o nome
    URL http://localhost:3333/motorista/cpf
    {
      "nome": "Joao Teixeira"
    }
    
6.4 Para deletar motorista é pelo CPF
    URL http://localhost:3333/motorista/cpf
    
    
7.0 CRUD Aluguel
7.1 Para criar registro de utilizacao do automovel URL http://localhost:3333/aluguel/
    {
      "placa": "FFF-2525",
      "cpf": "1457879988",
      "motivo": "viagem em familia"
    }
    
7.2 Para buscar registro
    Buscar todos http://localhost:3333/aluguel/
    Buscar pelo CPF do motorista http://localhost:3333/aluguel/pesquisaCpfMotorista/1457879988
    
7.3 O metodo PUT será utilizado para finalizar o registro  e irá utilizar o CPF do motorista
    URL http://localhost:3333/aluguel/
    {
      "cpf": "1457879988"
    }
    
    Com isso irá colocar a data do término
    
 7.4 Para deletar registro é pelo CPF do motorista
     URL http://localhost:3333/aluguel/pesquisaCpfMotorista/1457879988
    
    
