# Product Backlog

> O backlog operacional deve ser mantido no **GitHub Project**, por meio de Issues. Este documento explica a convenção adotada e apresenta uma visão rastreável dos itens do projeto.

## 1. Link do GitHub Project

https://github.com/users/lucasensousa/projects/2

> O GitHub Project é utilizado como fonte operacional do backlog. As Issues representam os itens de trabalho e são utilizadas para acompanhar prioridade, responsável, sprint e status.

## 2. Campos obrigatórios no Project

Cada item do backlog deve possuir, no mínimo:

- título claro;
- tipo (`user-story`, `task`, `documentation`, entre outros quando aplicável);
- prioridade;
- responsável;
- sprint;
- status;
- critério de aceitação ou conclusão;
- requisito relacionado, quando aplicável.

Durante a Sprint 1, os itens ainda não possuem requisitos formais (`RF`/`RNF`) definidos. Esses requisitos serão especificados e relacionados ao backlog durante a Sprint 2.

## 3. Estratégia de priorização

A priorização dos itens considera principalmente:

1. **Valor para o usuário:** itens que contribuem diretamente para o objetivo do Coleta+ recebem maior prioridade.
2. **Importância para o desenvolvimento:** itens necessários para estabelecer a base documental e técnica do projeto são priorizados nas primeiras sprints.
3. **Dependências:** atividades que precisam ser realizadas antes de outras funcionalidades são priorizadas.
4. **Risco:** itens que possam reduzir incertezas sobre o produto ou sua implementação podem receber prioridade maior.
5. **Sequência das sprints:** os itens são selecionados de acordo com o foco definido para cada sprint.

Na Sprint 1, a prioridade está concentrada na definição do produto, organização do backlog, planejamento da sprint e criação da estrutura inicial da aplicação.

As funcionalidades destinadas ao usuário final foram mantidas no Product Backlog para refinamento e especificação na Sprint 2.

## 4. Visão resumida do backlog

| ID | Link da Issue | Tipo | Descrição curta | Prioridade | Requisito | Sprint | Estado |
|---|---|---|---|---|---|---|---|
| `US-01` | `#1` | Funcionalidade | Consultar pontos de coleta de lixo eletrônico em Lavras | Alta | A definir na Sprint 2 | 2 | A fazer |
| `US-02` | `#2` | Funcionalidade | Consultar materiais aceitos em cada ponto de coleta | Alta | A definir na Sprint 2 | 2 | A fazer |
| `US-03` | `#3` | Funcionalidade | Consultar horário de funcionamento dos pontos de coleta | Média | A definir na Sprint 2 | 2 | A fazer |
| `US-04` | `#4` | Funcionalidade | Consultar condições de entrega dos materiais | Média | A definir na Sprint 2 | 2 | A fazer |
| `US-05` | `#5` | Funcionalidade | Visualizar localização dos pontos de coleta | Alta | A definir na Sprint 2 | 2 | A fazer |
| `T-01` | `#6` | Tarefa | Criar estrutura inicial da aplicação web | Alta | Não aplicável | 1 | A fazer |
| `T-02` | `#7` | Tarefa | Criar página inicial do Coleta+ | Média | Não aplicável | 1 | A fazer |
| `D-01` | `#8` | Documentação | Documentar a visão geral do produto | Alta | Não aplicável | 1 | A fazer |
| `D-02` | `#9` | Documentação | Organizar e documentar o Product Backlog | Alta | Não aplicável | 1 | A fazer |
| `D-03` | `#10` | Documentação | Registrar planejamento e acompanhamento da Sprint 1 | Alta | Não aplicável | 1 | A fazer |

### Itens selecionados para a Sprint 1

O Sprint Backlog da Sprint 1 é composto pelos seguintes itens:

- `D-01` — Documentar a visão geral do produto;
- `D-02` — Organizar e documentar o Product Backlog;
- `D-03` — Registrar planejamento e acompanhamento da Sprint 1;
- `T-01` — Criar estrutura inicial da aplicação web;
- `T-02` — Criar página inicial do Coleta+.

As Issues `US-01` a `US-05` permanecem no Product Backlog e estão planejadas para a Sprint 2, quando serão refinadas e relacionadas aos requisitos funcionais e não funcionais do sistema.

## 5. Definition of Ready

Um item está pronto para entrar em uma sprint quando:

- [ x ] possui descrição compreensível;
- [ x ] possui objetivo ou valor identificável;
- [ x ] possui critério de aceitação ou conclusão;
- [ x ] possui prioridade definida;
- [ x ] possui responsável definido;
- [ x ] possui sprint definida;
- [ x ] dependências principais foram registradas;
- [ x ] possui informações suficientes para que o trabalho seja iniciado;
- [ x ] foi estimado de acordo com a convenção adotada pelo grupo, quando aplicável.

## 6. Definition of Done

Um item está concluído quando:

- [ ] atende aos critérios de aceitação ou conclusão definidos na Issue;
- [ ] o trabalho correspondente foi realizado;
- [ ] foi revisado conforme a dinâmica adotada pelo grupo;
- [ ] as alterações necessárias foram integradas à branch `main`;
- [ ] possui testes ou evidências quando aplicável;
- [ ] a documentação afetada foi atualizada;
- [ ] a Issue foi atualizada com o resultado do trabalho;
- [ ] o item está relacionado ao registro da sprint correspondente.

## 7. Histórico de refinamento

| Sprint | Itens criados/divididos/removidos | Motivo | Evidência |
|---|---|---|---|
| Sprint 1 | Criação dos 10 itens iniciais do Product Backlog | Estruturar o backlog inicial e selecionar os itens necessários para o planejamento da Sprint 1 | Issues `#1` a `#10` e GitHub Project |
| Sprint 1 | Separação dos itens entre Sprint 1 e Sprint 2 | Diferenciar o trabalho de definição e estruturação inicial das funcionalidades que serão refinadas posteriormente | GitHub Project e `docs/sprints/sprint-01.md` |


