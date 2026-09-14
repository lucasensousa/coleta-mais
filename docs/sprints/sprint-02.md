# Sprint 2 — Requisitos e escopo validável da solução

- **Data de entrega:** 14/09/2026
- **Pontuação:** 2,5 pontos
- **Tag obrigatória:** (https://github.com/lucasensousa/coleta-mais/releases/tag/sprint-02)
- **Responsável por conferir este arquivo:** @lucasensousa

## 1. Pergunta que esta sprint deve responder

**O que o sistema deverá fazer e quais condições verificáveis deverá atender?**

## 2. Objetivo e resultado da sprint

**Objetivo planejado:** Especificar os requisitos funcionais e não funcionais do Coleta+, definir as regras de negócio, os critérios de aceitação e o escopo da aplicação, relacionando os requisitos às histórias de usuário e às Issues do Product Backlog.

**Resultado efetivamente alcançado:** Foram especificados os requisitos funcionais RF-01 a RF-12, os requisitos não funcionais RNF-01 a RNF-06, as regras de negócio RN-01 a RN-05, as histórias de usuário e seus critérios de aceitação. O Product Backlog também foi refinado com a relação entre as histórias de usuário e os requisitos definidos.

## 3. Checklist do artefato central — 0,75 ponto

**Entrega esperada:** docs/requisitos/requisitos.md, histórias/casos, critérios de aceitação, escopo excluído e backlog refinado.

- [x] Atores/perfis identificados.
- [x] Requisitos funcionais com IDs e prioridade.
- [x] Requisitos não funcionais verificáveis.
- [x] Histórias/casos vinculados aos requisitos.
- [x] Critérios de aceitação nas Issues ou em links diretos.

### Links dos artefatos

| Artefato criado/atualizado | Link na tag da sprint | O que mudou |
|---|---|---|
| docs/requisitos/requisitos.md | https://github.com/lucasensousa/coleta-mais/releases/tag/sprint-02| Foram especificados os requisitos funcionais, requisitos não funcionais, regras de negócio, histórias de usuário, critérios de aceitação e itens fora do escopo. |
| docs/backlog-produto.md | https://github.com/lucasensousa/coleta-mais/releases/tag/sprint-02 | As histórias de usuário foram relacionadas aos requisitos e o backlog foi refinado com as novas funcionalidades administrativas e requisitos não funcionais. |

## 4. Incremento da aplicação web — 0,75 ponto

**Incremento mínimo esperado:** Implementação de pelo menos um fluxo prioritário ou protótipo navegável ligado a requisitos e critérios de aceitação.

### O que foi implementado ou evoluído

Foi desenvolvido um protótipo navegável do fluxo de consulta de pontos de coleta. A página inicial do Coleta+ apresenta uma opção para o usuário encontrar pontos de coleta, direcionando-o para uma página com informações sobre locais, materiais aceitos e horários de funcionamento.
O incremento está relacionado à história de usuário US-01 e ao requisito funcional RF-01, permitindo demonstrar o fluxo principal de consulta de pontos de coleta.

### Como executar e verificar

Abrir o arquivo src/index.html em um navegador.

| Requisito/Issue | Código ou protótipo | Evidência de execução |
|---|---|---|
| RF-01 / #1 | src/index.html  src/pontos.html | https://github.com/lucasensousa/coleta-mais/commit/4034ab8bcd0f3e36a099d5d5bbfce68ac990db1a |

## 5. Scrum e gestão do trabalho — 0,50 ponto

### Sprint Backlog

| Issue | Descrição | Responsável | Critério de aceitação/conclusão | Situação |
|---|---|---|---|---|
| #1 | US-01 — Consultar pontos de coleta de lixo eletrônico em Lavras | @lucasensousa | O usuário deve conseguir consultar os pontos de coleta disponíveis. | Pendente |
| #2 | US-02 — Consultar materiais aceitos em cada ponto de coleta | @lucasensousa | O usuário deve conseguir visualizar os materiais aceitos em cada ponto. | Pendente |
| #3 | US-03 — Consultar horário de funcionamento dos pontos de coleta | @lucasensousa | O usuário deve conseguir consultar os dias e horários de funcionamento. | Pendente |
| #4 | US-04 — Consultar condições de entrega dos materiais | @lucasensousa | O usuário deve conseguir consultar as condições de entrega. | Pendente |
| #5 | US-05 — Visualizar localização dos pontos de coleta | @AnthonyJSilva03| O usuário deve conseguir visualizar a localização dos pontos de coleta. | Pendente |
| #16 | US-06 — Realizar login administrativo | @AnthonyJSilva03 | O administrador deve conseguir acessar a área administrativa utilizando credenciais válidas. | Pendente |
| #17 | US-07 — Cadastrar ponto de coleta | @LuizPauloFelizali | O administrador deve conseguir cadastrar um novo ponto de coleta com os dados obrigatórios. | Pendente |
| #18 | US-08 — Editar ponto de coleta | @LuizPauloFelizali | O administrador deve conseguir alterar os dados de um ponto de coleta cadastrado. | Pendente |
| #19 | US-09 — Desativar ponto de coleta | @ThawanVCSantos | O administrador deve conseguir desativar um ponto de coleta. | Pendente |
| #20 | US-10 — Gerenciar materiais aceitos | @ThawanVCSantos | O administrador deve conseguir cadastrar, editar e remover materiais associados aos pontos. | Pendente |
| #21 | US-11 — Gerenciar horários | @lucasensousa | O administrador deve conseguir cadastrar, editar e remover horários dos pontos. | Pendente |
| #22 |`US-12 — Gerenciar condições de entrega | @ThawanVCSantos | O administrador deve conseguir cadastrar, editar e remover condições de entrega. | Pendente |
| #23 | RNF-01 — Usabilidade | @LuizPauloFelizali | O usuário deve conseguir consultar as informações de um ponto em até 3 interações a partir da página inicial. | Pendente |
| #24 | RNF-02 — Responsividade | @LuizPauloFelizali | As funcionalidades principais devem permanecer acessíveis em dispositivos desktop e móveis. | Pendente |
| #25 | RNF-03 — Segurança | @AnthonyJSilva03 | O acesso à área administrativa sem autenticação deve ser impedido. | Pendente |
| #26 | RNF-04 — Compatibilidade | @ThawanVCSantos | As funcionalidades prioritárias devem funcionar em pelo menos dois navegadores. | Pendente |
| #27 | RNF-05 — Integridade dos dados | @ThawanVCSantos | O sistema deve impedir o cadastro ou alteração com dados obrigatórios inválidos ou ausentes. | Pendente |
| #28 | RNF-06 — Disponibilidade | @AnthonyJSilva03 | A aplicação deve estar acessível durante a demonstração e permitir a execução dos principais fluxos. | Pendente |

### Acompanhamento

- **GitHub Project:** https://github.com/users/lucasensousa/projects/2
- **Reuniões/decisões:** (https://meet.google.com/jgm-djwy-xhw?pli=1)
- **Impedimentos:** Nenhum.
- **Mudanças de escopo:** Foi incluída a área administrativa para permitir o gerenciamento dos pontos de coleta e suas informações.

## 6. GitHub, documentação e rastreabilidade — 0,50 ponto

| Tipo de evidência | Link | O que comprova |
|---|---|---|
| Issue | https://github.com/lucasensousa/coleta-mais/issues | Registra as histórias de usuário e os requisitos relacionados ao trabalho da Sprint 2. |
| Pull Request | https://github.com/lucasensousa/coleta-mais/pull/29 | Revisão e integração das alterações realizadas pela equipe. |
| Commit | https://github.com/lucasensousa/coleta-mais/commit/c31df5af3ce6ea7c2be7d60e9e0ce8937359d50b | Comprova a especificação dos requisitos da Sprint 2 no arquivo docs/requisitos/requisitos.md. |
| Código/arquivo | https://github.com/lucasensousa/coleta-mais/commit/4034ab8bcd0f3e36a099d5d5bbfce68ac990db1a | Comprova a implementação do protótipo navegável do fluxo de consulta de pontos de coleta. |
| Teste/captura/relatório | Ainda não aplicável|  O incremento foi validado por meio da execução local e navegação entre as páginas do protótipo. |

### Rastreabilidade resumida

| Requisito | Issue | Artefato/modelo/decisão | Código | Teste/evidência |
|---|---|---|---|---|
| RF-01 | #1 | docs/requisitos/requisitos.md — US-01 | src/index.html e src/pontos.html | `https://github.com/lucasensousa/coleta-mais/commit/4034ab8bcd0f3e36a099d5d5bbfce68ac990db1a |
| RF-02 | #2 | docs/requisitos/requisitos.md — US-02 | Ainda não implementado | Ainda não aplicável |
| RF-03 | #3 | docs/requisitos/requisitos.md — US-03 | Ainda não implementado | Ainda não aplicável |
| RF-04 | #4 | docs/requisitos/requisitos.md — US-04 | Ainda não implementado | Ainda não aplicável |
| RF-05 | #5 | docs/requisitos/requisitos.md — US-05 | Ainda não implementado | Ainda não aplicável |
| RF-06 | #16 | docs/requisitos/requisitos.md — US-06 | Ainda não implementado | Ainda não aplicável |
| RF-07 | #17 | docs/requisitos/requisitos.md — US-07 | Ainda não implementado | Ainda não aplicável |
| RF-08 | #18 | docs/requisitos/requisitos.md — US-08 | Ainda não implementado | Ainda não aplicável |
| RF-09 | #19 | docs/requisitos/requisitos.md — US-09 | Ainda não implementado | Ainda não aplicável |
| RF-10 | #20 | docs/requisitos/requisitos.md — US-10 | Ainda não implementado | Ainda não aplicável |
| RF-11 | #21 | docs/requisitos/requisitos.md — US-11 | Ainda não implementado | Ainda não aplicável |
| RF-12 | #22 | docs/requisitos/requisitos.md — US-12 | Ainda não implementado | Ainda não aplicável |
| RNF-01 | #23 | docs/requisitos/requisitos.md — requisito de usabilidade | Ainda não implementado | Ainda não aplicável |
| RNF-02 | #24 | docs/requisitos/requisitos.md — requisito de responsividade | Ainda não implementado | Ainda não aplicável |
| RNF-03 | #25 | docs/requisitos/requisitos.md — requisito de segurança | Ainda não implementado | Ainda não aplicável |
| RNF-04 | #26 | docs/requisitos/requisitos.md — requisito de compatibilidade | Ainda não implementado | Ainda não aplicável |
| RNF-05 | #27 | docs/requisitos/requisitos.md — requisito de integridade dos dados | Ainda não implementado | Ainda não aplicável |
| RNF-06 | #28 | docs/requisitos/requisitos.md — requisito de disponibilidade | Ainda não implementado | Ainda não aplicável |

## 7. Revisão do incremento

- **O que foi demonstrado:**  Foi demonstrado o fluxo inicial de consulta de pontos de coleta. A partir da página inicial do Coleta+, o usuário pode acessar a página de pontos de coleta e visualizar informações sobre localização, materiais aceitos e horário de funcionamento.
- **Critérios atendidos:** Foi atendido o critério de disponibilizar um protótipo navegável relacionado ao RF-01 / US-01, permitindo iniciar e concluir o fluxo de consulta dos pontos de coleta.
- **Itens não concluídos:** Implementação completa das funcionalidades do sistema, incluindo persistência de dados, gerenciamento administrativo e demais funcionalidades previstas nos requisitos.
- **Motivo das pendências:** O objetivo do incremento da Sprint 2 é disponibilizar um protótipo navegável mínimo. A implementação completa das funcionalidades será realizada nas etapas posteriores do projeto.
- **Feedback recebido e ajustes:** O protótipo foi ajustado para representar o fluxo de consulta de pontos de coleta definido nos requisitos da Sprint 2.

## 8. Retrospectiva e próxima sprint

- **Funcionou bem:** O refinamento do Product Backlog permitiu transformar as funcionalidades inicialmente previstas em requisitos funcionais, requisitos não funcionais e regras de negócio verificáveis.
- **Precisa melhorar:** Organizar melhor e registrar de forma mais detalhada as evidências produzidas durante a sprint.
- **Ação concreta para a próxima sprint:** Utilizar os requisitos definidos na Sprint 2 como base para a modelagem do sistema, estabelecendo as entidades, relacionamentos e demais elementos necessários para o desenvolvimento da aplicação.

## 9. O que não será considerado suficiente

- Repetir a descrição do problema da Sprint 1.
- Listar funcionalidades sem identificadores ou critérios.
- Apresentar telas sem relacioná-las a requisitos.

## 10. Links enviados no UFLA Virtual

- **Tag `sprint-02`:** (https://github.com/lucasensousa/coleta-mais/releases/tag/sprint-02)
- **Este arquivo na tag:** (https://github.com/lucasensousa/coleta-mais/blob/main/docs/sprints/sprint-02.md)
- **Observação adicional:** Não aplicável.
