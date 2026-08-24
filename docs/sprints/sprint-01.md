# Sprint 1 — Problema, visão do produto e organização inicial

- **Data de entrega:** 24/08/2026
- **Pontuação:** 2,5 pontos
- **Tag obrigatória:** `sprint-01`
- **Responsável por conferir este arquivo:** ``

## 1. Pergunta que esta sprint deve responder

**Qual problema será tratado, quem é afetado e qual produto o grupo pretende desenvolver?**

## 2. Objetivo e resultado da sprint

**Objetivo planejado:** Inicialização do projeto, definição de metas e parâmetros.

**Resultado efetivamente alcançado:** Ínicio do projeto e objetivos estabelecidos.

## 3. Checklist do artefato central — 0,75 ponto

**Entrega esperada:** `README.md`, `docs/visao-geral.md`, `docs/backlog-produto.md` e GitHub Project com pelo menos dez itens descritos e priorizados.

- [ x ] Problema delimitado, com público e contexto identificados.
- [ x ] Proposta de valor, objetivos e limites iniciais definidos.
- [ x ] Integrantes e organização de trabalho registrados.
- [ x ] GitHub Project criado e linkado.
- [ x ] Issues iniciais com prioridade, responsável e critério de aceitação.

### Links dos artefatos

| Artefato criado/atualizado | Link na tag da sprint | O que mudou |
|---|---|---|
| `README.md` | `[COLAR LINK DA TAG sprint-01]` | Documentação inicial do projeto, identificação da solução e instruções gerais. |
| `docs/visao-geral.md` | `[COLAR LINK DA TAG sprint-01]` | Definição do problema, público, stakeholders, proposta de valor, objetivos e escopo inicial. |
| `docs/backlog-produto.md` | `[COLAR LINK DA TAG sprint-01]` | Organização e documentação do Product Backlog inicial. |
| GitHub Project | https://github.com/users/lucasensousa/projects/2 | Organização operacional das Issues, prioridades, responsáveis, sprints e status. |
| Issues do backlog | https://github.com/lucasensousa/coleta-mais/issues | Registro dos dez itens iniciais do Product Backlog com critérios de aceitação. |


## 4. Incremento da aplicação web — 0,75 ponto

**Incremento mínimo esperado:** Estrutura inicial em `src/`, instruções de execução e ao menos uma página/estrutura executável ou protótipo navegável.

### O que foi implementado ou evoluído

Durante a Sprint 1 foi criada a estrutura inicial da aplicação web do Coleta+.

O primeiro incremento terá como objetivo estabelecer a base técnica da aplicação e disponibilizar uma página inicial que apresente o nome do projeto e sua proposta.

A estrutura inicial prevista é:

```text
src/
├── index.html
└── style.css
```

### Como executar e verificar

Abrir o arquivo src/index.html em um navegador.

| Requisito/Issue | Código ou protótipo | Evidência de execução |
|---|---|---|
| T-01 / #6 | Estrutura inicial em src/ | https://github.com/lucasensousa/coleta-mais/commit/300a34feb63b3d86293f6d61314ca58170f25e7d |
| T-02 / #7 | Página inicial do Coleta+ | https://github.com/lucasensousa/coleta-mais/commit/300a34feb63b3d86293f6d61314ca58170f25e7d | 

## 5. Scrum e gestão do trabalho — 0,50 ponto

### Sprint Backlog

| Issue | Descrição | Responsável | Critério de aceitação/conclusão | Situação |
|---|---|---|---|---|
| #8 — D-01 | Documentar a visão geral do produto | @lucasensousa | `docs/visao-geral.md` deve registrar problema, público, stakeholders, proposta de valor, objetivos e escopo inicial. | Concluída |
| #9 — D-02 | Organizar e documentar o Product Backlog | @lucasensousa | O Product Backlog deve possuir pelo menos dez itens e estar documentado e relacionado ao GitHub Project. | Concluída |
| #10 — D-03 | Registrar planejamento e acompanhamento da Sprint 1 | @lucasensousa | Este arquivo deve registrar o objetivo, Sprint Backlog, acompanhamento, evidências, revisão e retrospectiva da Sprint. | Concluída |
| #6 — T-01 | Criar estrutura inicial da aplicação web | @AnthonyJSilva03 | Deve existir uma estrutura inicial em src/ que possa ser executada e verificada. | Concluída |
| #7 — T-02 | Criar página inicial do Coleta+ | @AnthonyJSilva03 | Deve existir uma página inicial acessível no navegador via localhost, apresentando o nome e a proposta inicial do Coleta+. | Concluída |


### Acompanhamento

- **GitHub Project:** (https://github.com/users/lucasensousa/projects/2)
- **Reuniões/decisões:** (https://meet.google.com/jgm-djwy-xhw?pli=1)
- **Impedimentos:** Nenhum
- **Mudanças de escopo:** Nenhuma

## 6. GitHub, documentação e rastreabilidade — 0,50 ponto

| Tipo de evidência | Link | O que comprova |
|---|---|---|
| Issue | https://github.com/lucasensousa/coleta-mais/issues | Registro dos itens do Product Backlog e dos critérios de aceitação. |
| Pull Request | https://github.com/lucasensousa/coleta-mais/pull/13 | Revisão e integração das alterações realizadas pela equipe. |
| Commit | https://github.com/lucasensousa/coleta-mais/commit/300a34feb63b3d86293f6d61314ca58170f25e7d | Histórico das alterações realizadas no projeto. |
| Código/arquivo | https://github.com/lucasensousa/coleta-mais/tree/main/src | Estrutura inicial e página executável da aplicação. |
| Teste/captura/relatório | Protótipo inicial não possui validação | Demonstração da execução ou validação do incremento. |

### Rastreabilidade resumida

| Requisito/Issue | Artefato/modelo/decisão | Código | Teste/evidência |
|---|---|---|---|
| `D-01 / #8` | `docs/visao-geral.md` | Não aplicável | Não aplicável |
| `D-02 / #9` | `docs/backlog-produto.md` e GitHub Project | Não aplicável | Não aplicável |
| `D-03 / #10` | `docs/sprints/sprint-01.md` | Não aplicável | Não aplicável |
| `T-01 / #6` | Estrutura inicial da aplicação web | `src/` | Não aplicável |
| `T-02 / #7` | Página inicial do Coleta+ | `src/index.html` e `src/style.css` | Não aplicável |

> Os requisitos funcionais formais (`RF-XX`) ainda não foram definidos na Sprint 1. As Issues desta sprint são relacionadas diretamente aos artefatos e atividades correspondentes. A relação entre histórias de usuário e requisitos funcionais será estabelecida durante o refinamento da Sprint 2.

## 7. Revisão do incremento

- **O que foi demonstrado:** A definição e construção do problema com a página inicial.
- **Critérios atendidos:** Escopo inicial atendido.
- **Itens não concluídos:** Funcionalidade do sistema.
- **Motivo das pendências:** Sprint inicial.
- **Feedback recebido e ajustes:** Nenhum.

## 8. Retrospectiva e próxima sprint

- **Funcionou bem:** Sim, atendendo os requisitos esperados.
- **Precisa melhorar:** Sim, refinar os scripts com as novas funcionalidades.
- **Ação concreta para a próxima sprint:** Implentação das funcionalidades.

## 9. O que não será considerado suficiente

- Tema genérico sem delimitação do problema.
- Backlog composto apenas por títulos vagos.
- Repositório apenas com documentos, sem estrutura inicial da aplicação.

## 10. Links enviados no UFLA Virtual

- **Tag `sprint-01`:** `[COLAR LINK]`
- **Este arquivo na tag:** `[COLAR LINK]`
- **Observação adicional:** `[quando necessária]`
