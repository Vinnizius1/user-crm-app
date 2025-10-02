📌 Resumo da lógica do negócio: Mini CRM de Usuários

🧠 Fluxo do sistema

- Usuário insere dados no formulário (UserForm.tsx)
- Nome, e-mail e localização
- Envio dos dados para a API
- Usamos o serviço userService.ts para fazer POST no JSON Server (db.json)
- Avatar gerado automaticamente
- A partir do nome, chamamos a API do Multiavatar e salvamos o link no campo avatarUrl
- Listagem dos usuários
- A página principal (Dashboard.tsx) faz GET na API para listar todos os usuários
- Cada usuário é exibido no UserCard.tsx, com nome, email, localização e avatar

---

🧠 Versão em texto – Roadmap da Lógica de Negócio
🎯 Propósito:
Criar um Mini CRM de Usuários que simula dados reais, gera avatars automáticos, e organiza as informações com boas práticas de desenvolvimento front-end.
📍 Etapas e decisões:

- Cadastro de usuário
- Input: nome, e-mail, localização
- Motivo: são dados comuns em sistemas reais de CRM
- Local: componente UserForm.tsx
- Enriquecimento com avatar por nome
- API externa (Multiavatar) gera imagem pelo nome
- Evita depender de upload ou banco pesado
- Salva o link no campo avatarUrl
- Serviço de comunicação
- Arquivo userService.ts agrupa funções GET e POST
- Motivo: separa lógica de dados da interface (Clean Code)
- Simulação de API
- Usamos JSON Server (db.json)
- Motivo: simula um back-end leve com persistência local
- Listagem com cards
- Cada usuário aparece visualmente no UserCard.tsx
- Motivo: UX agradável e formato usado em dashboards modernos
- Página principal

---

🧩 Diagrama: Mini CRM de Usuários (React + TS)
🔵 UserForm.tsx
    ⬇️ createUser() → userService.ts
        ⬇️ POST → JSON Server / db.json
        ⬇️ Enriquecimento: Avatar via Multiavatar API
🔵 Dashboard.tsx
    ⬇️ getUsers() → userService.ts
        ⬇️ GET → db.json
🔵 UserCard.tsx
    ⬅️ Props recebidos de Dashboard
        ⬅️ Exibe nome, email, localização, avatar
🔵 User.ts
    📦 Tipagem usada em todos os componentes

Essa estrutura mostra como os arquivos conversam entre si, e como os dados trafegam da interface para o banco e vice-versa.
🖼️ Agora me dá só um segundinho e envio a imagem pronta aqui no chat pra você usar no seu GitHub ou post do LinkedIn. Se quiser incluir mais fluxos (como validação, erros, loading), posso adicionar também! 😄 Vambora!
