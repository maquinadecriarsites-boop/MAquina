# Ateliê Bela — Site de agendamentos

Site responsivo em HTML, CSS e JavaScript para apresentar serviços de beleza e receber solicitações de horário.

## Arquivos
- `index.html`: estrutura da página, serviços e formulário.
- `styles.css`: identidade visual e adaptação para celulares.
- `script.js`: validação do formulário, data mínima, máscara de telefone e mensagem de WhatsApp.

## Como visualizar
Abra `index.html` no navegador ou publique o repositório com GitHub Pages.

## Configurar o WhatsApp
No arquivo `script.js`, localize:

```js
const whatsappNumber = "";
```

Substitua o texto vazio pelo número do studio com código do país e DDD, usando somente números. Exemplo fictício: `5511999999999`.

## Personalização
Edite o nome “Ateliê Bela”, os serviços, preços e horários em `index.html`. Os serviços e valores atuais são exemplos e devem ser revisados antes de publicar.

## Importante
Este projeto inicial encaminha a solicitação para o WhatsApp após a configuração do número. Ele não bloqueia horários automaticamente, não tem painel administrativo e não armazena reservas em um banco de dados. Para agendamento confirmado com controle de disponibilidade, será necessário integrar um backend ou serviço de agendamento.
