# Sprint 4 — Princípios de projeto e decisões locais

- **Data de entrega:** 13/10/2026
- **Pontuação:** 2,5 pontos
- **Tag obrigatória:** `sprint-04`
- **Responsável por conferir este arquivo:** [@lucasensousa](http://github.com/lucasensousa)

## 1. Pergunta que esta sprint deve responder

**Como responsabilidades, módulos e interfaces locais serão organizados e justificados?**

## 2. Objetivo e resultado da sprint

**Objetivo planejado:** registrar e justificar decisões locais de projeto relacionadas à migração e organização do frontend em React com TypeScript, à separação de componentes, dados e tipos, e à existência de um módulo de backend separado. Analisar as responsabilidades dos módulos, coesão, acoplamento e oportunidades de melhoria.

**Resultado efetivamente alcançado:** o frontend está organizado em React/TypeScript. A página de consulta de pontos utiliza estado e memorizações para gerenciar filtros, importa dados de demonstração de um módulo separado e delega a apresentação de cada ponto ao componente CollectionPointCard. O repositório também contém um diretório backend/, cujo pom.xml declara Java 25, Spring Boot, Spring MVC, Spring Data JPA, PostgreSQL, Flyway, validação e segurança.

A migração do frontend de HTML, CSS e JavaScript para React representa a refatoração relatada pelo grupo e é documentada nesta sprint como evolução da organização interna. A integração entre a página React e dados reais do backend não é considerada comprovada neste documento: a página pública consultada ainda utiliza COLLECTION_POINTS_MOCK.

## 3. Checklist do artefato central — 0,75 ponto

**Entrega esperada:** docs/projeto/decisoes-de-projeto.md, decomposição e decisões relacionadas a coesão, acoplamento, responsabilidade e testabilidade.

- [ x ] Responsabilidades de módulos/componentes locais identificadas.
- [ x ] Alternativas consideradas e decisão justificada.
- [ x ] Trade-offs ou consequências registrados.
- [ x ] Código afetado linkado.
- [ x ] Backlog atualizado com débitos ou tarefas descobertas.

### Links dos artefatos

| Artefato criado/atualizado | Link na tag da sprint | O que mudou |
|---|---|---|
| Decisões de projeto | `[link]` | Registra contexto, alternativas, decisão, justificativa e consequências |

## 4. Incremento da aplicação web — 0,75 ponto

**Incremento mínimo esperado:** Implementação/refatoração que demonstre a decisão, com comparação ou vínculo claro entre documento e código.

### O que foi implementado ou evoluído

O incremento considerado é a evolução da interface anterior baseada em HTML, CSS e JavaScript para uma aplicação estruturada em React/TypeScript, com módulos locais separados. Na versão atual da página /pontos:
- os filtros são controlados com useState;
- a lista de materiais disponíveis e os resultados filtrados são calculados com useMemo;
- a consulta considera apenas pontos com status active;
- a pesquisa textual considera o nome e o endereço;
- o filtro por material restringe os resultados aos pontos que aceitam o material escolhido;
- a página apresenta um estado vazio e permite limpar os filtros;
- os dados vêm de COLLECTION_POINTS_MOCK e os detalhes visuais de cada ponto são apresentados por CollectionPointCard.
O incremento evidencia decisões de organização e separação de responsabilidades. O uso de dados mockados deve ser declarado na apresentação; não se deve dizer que essa tela já realiza consultas ao banco PostgreSQL sem uma integração verificada.

### Como executar e verificar

No terminal, a partir da raiz do repositório:
cd frontend
npm install
npm run dev

Abra o endereço local indicado pelo Vite e confira a página de consulta dos pontos.

| Requisito/Issue | Código ou protótipo | Evidência de execução |
|---|---|---|
| RF-01 / [US-01 (#1)](https://github.com/lucasensousa/coleta-mais/issues/1) / [T-06 (#36)](https://github.com/lucasensousa/coleta-mais/issues/37) | [Frontend React/TypeScript](https://github.com/lucasensousa/coleta-mais/tree/main/frontend) | Captura da consulta de pontos |
| RF-02 / [US-02 (#2)](https://github.com/lucasensousa/coleta-mais/issues/2) / [T-06 (#36)](https://github.com/lucasensousa/coleta-mais/issues/37) | [Frontend React/TypeScript](https://github.com/lucasensousa/coleta-mais/tree/main/frontend) | Captura dos pontos e materiais aceitos |

## 5. Scrum e gestão do trabalho — 0,50 ponto

### Sprint Backlog

| Issue | Descrição | Responsável | Critério de aceitação/conclusão | Situação |
|---|---|---|---|---|
| [#36](https://github.com/lucasensousa/coleta-mais/issues/36)  | Registrar as principais decisões de projeto propostas no desenvolvimento do Coleta+ | @lucasensousa | Apresentar pelo menos três decisões, cada uma com contexto, alternativas, decisão adotada, justificativa e consequências, relacionadas à implementação real. | Concluída |
| [#37](https://github.com/lucasensousa/coleta-mais/issues/37) | Refatorar o frontend e separar responsabilidades entre página, componentes, dados e tipos | @ThawanVCSantos | Código organizado em módulos separados, funcionalidades de consulta preservadas e execução validada por build e lint. | Concluída |
| [#38](https://github.com/lucasensousa/coleta-mais/issues/38) | Atualizar a documentação e a rastreabilidade da Sprint 4 | @lucasensousa | Documento da sprint, Product Backlog e tabela de rastreabilidade atualizados, com links para Issues, arquivos, commits e evidências. | Concluída |

### Acompanhamento

- **GitHub Project:** [Projeto](https://github.com/users/lucasensousa/projects/2)
- **Reuniões/decisões:** 
- **Impedimentos:** Nenhum
- **Mudanças de escopo:** Nenhuma

## 6. GitHub, documentação e rastreabilidade — 0,50 ponto

| Tipo de evidência | Link | O que comprova |
|---|---|---|
| Issue | [#36 — D-05](https://github.com/lucasensousa/coleta-mais/issues/36) |  Registro das tarefas de decisões de projeto` |
| Issue | [#37 — T-06](https://github.com/lucasensousa/coleta-mais/issues/37) | Refatoração do frontend |
| Issue |  [#38 — D-06](https://github.com/lucasensousa/coleta-mais/issues/38) | Atualização da documentação |
| Pull Request | `[link]` | `[PREENCHER]` |
| Commit | [3e2ee1b — Início da Sprint 4](https://github.com/lucasensousa/coleta-mais/commit/3e2ee1bf65ad36ded921f9ceb82a625de4ab2ebf), [b8725bb — Decisões de projeto](https://github.com/lucasensousa/coleta-mais/commit/b8725bbe1bf482994ccdc5020e4ac9b109d2b278), [35c124a — Estrutura React](https://github.com/lucasensousa/coleta-mais/commit/35c124a) | Histórico de criação da documentação e estruturação do frontend em React. |
| Código/arquivo | [Decisões de projeto](https://github.com/lucasensousa/coleta-mais/blob/main/docs/projeto/decisoes-de-projeto.md), [Frontend](https://github.com/lucasensousa/coleta-mais/tree/main/frontend) | Documentação das decisões adotadas e código da aplicação organizado em módulos. |
| Teste/captura/relatório |

### Rastreabilidade resumida

| Requisito | Issue | Artefato/modelo/decisão | Código | Teste/evidência |
|---|---|---|---|---|
| RF-01 — Consultar pontos de coleta | [US-01 / #1](https://github.com/lucasensousa/coleta-mais/issues/1) e [T-06 / #37](https://github.com/lucasensousa/coleta-mais/issues/37) | [Decisões de projeto — DP-01 e DP-02](../projeto/decisoes-de-projeto.md) | [Página de consulta](../../frontend/src/routes/pontos/index.tsx) e [CollectionPointCard](../../frontend/src/components/pontos/CollectionPointCard.tsx) | Página de consulta criada |
| RF-02 — Consultar materiais aceitos | [US-02 / #2](https://github.com/lucasensousa/coleta-mais/issues/2) e [T-06 / #37](https://github.com/lucasensousa/coleta-mais/issues/37) | [Decisões de projeto — DP-01 e DP-03](../projeto/decisoes-de-projeto.md) | [Página de consulta](../../frontend/src/routes/pontos/index.tsx), [dados de demonstração](../../frontend/src/data/collectionPointsMock.ts) e [tipos](../../frontend/src/types/collectionPoint.ts) | Página de consulta criada |

## 7. Revisão do incremento

- **O que foi demonstrado:** frontend React/TypeScript; filtros por texto e material; consulta somente de pontos ativos; componente de cartão separado; dados de demonstração e tipos importados de módulos próprios.
- **Critérios atendidos:** existência dos módulos mencionados e implementação das regras de filtragem na página atual.
- **Itens não concluídos:** integração da página de consulta com dados reais servidos pelo backend; testes executados; tag da Sprint 4; feedback formal do grupo/professor.
- **Motivo das pendências:** Será realizado nas próximas sprints.
- **Feedback recebido e ajustes:** Não aplicável

## 8. Retrospectiva e próxima sprint

- **Funcionou bem:** a separação em páginas, componentes, dados de demonstração e tipos permite localizar responsabilidades e discutir decisões concretas em vez de apresentar somente conceitos teóricos.
- **Precisa melhorar:** atualizar a documentação anterior para refletir os caminhos atuais em frontend/; automatizar ou documentar verificações; e esclarecer a fronteira entre o mock e a futura comunicação com o backend.
- **Ação concreta para a próxima sprint:** identificar um problema recorrente de projeto no código e avaliar se um padrão de projeto é realmente pertinente, documentando alternativas e consequências antes de implementá-lo.

## 9. O que não será considerado suficiente

- Apenas listar princípios de projeto.
- Descrever arquitetura global em vez de decisões locais.
- Decisão sem alteração ou evidência no código.

## 10. Links enviados no UFLA Virtual

- **Tag `sprint-04`:** `[COLAR LINK]`
- **Este arquivo na tag:** `[COLAR LINK]`
- **Observação adicional:** Sem observação adicional.
