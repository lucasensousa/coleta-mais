# Sprint 3 — Modelagem e rastreabilidade dos requisitos

- **Data de entrega:** 28/09/2026
- **Pontuação:** 2,5 pontos
- **Tag obrigatória:** `sprint-03`
- **Responsável por conferir este arquivo:** @lucasensousa

## 1. Pergunta que esta sprint deve responder

**Como a estrutura e os principais fluxos do sistema são representados?**

## 2. Objetivo e resultado da sprint

**Objetivo planejado:** Modelar o comportamento e a estrutura do Coleta+, relacionando os modelos aos requisitos definidos na Sprint 2 e à implementação da aplicação.

**Resultado efetivamente alcançado:** Foi realizada a modelagem comportamental e estrutural do sistema, com representação dos principais elementos do domínio relacionados aos pontos de coleta. A documentação foi complementada com a rastreabilidade entre requisitos, modelos e código. Também foi evoluído o fluxo de consulta dos pontos de coleta, passando a utilizar uma estrutura de dados organizada em src/pontos.js, utilizada pela página src/pontos.html.

## 3. Checklist do artefato central — 0,75 ponto

**Entrega esperada:** `docs/modelagem/modelagem.md`, ao menos um modelo comportamental e um estrutural, descrições e vínculo com requisitos.

- [ x ] Modelos legíveis e versionados no repositório.
- [ x ] Descrição textual da finalidade e decisões de cada modelo.
- [ x ] Requisitos ligados aos elementos dos modelos.
- [ x ] Backlog/requisitos refinados quando a modelagem revelar mudanças.
- [ x ] Links entre elementos modelados e código existente.

### Links dos artefatos

| Artefato criado/atualizado | Link na tag da sprint | O que mudou |
|---|---|---|
| docs/modelagem/modelagem.md | `[link]` | Inclusão dos modelos comportamental e estrutural, suas descrições, decisões e relação com os requisitos |
| docs/rastreabilidade.md | `[link]` | Inclusão da rastreabilidade entre requisitos, modelos e implementação |

## 4. Incremento da aplicação web — 0,75 ponto

**Incremento mínimo esperado:** Evolução de um fluxo modelado, estrutura de dados/classes coerente e evidência de correspondência entre modelo e código.

### O que foi implementado ou evoluído

O fluxo de consulta dos pontos de coleta foi evoluído para utilizar uma estrutura de dados organizada no arquivo src/pontos.js. Os dados dos pontos de coleta passaram a ser representados por objetos contendo informações como nome, endereço, status, materiais aceitos, horários e condições de entrega.

A página src/pontos.html utiliza essa estrutura para apresentar os pontos disponíveis ao usuário. Dessa forma, a implementação passou a possuir correspondência mais direta com o modelo estrutural definido na Sprint 3.

O incremento está relacionado principalmente aos requisitos RF-01, RF-02, RF-03, RF-04 e RF-05, que possuem implementação parcial nesta etapa.

### Como executar e verificar

Abrir o arquivo `src/index.html` em um navegador.
Na página inicial, acessar a opção "Encontrar pontos de coleta" e verificar a página de pontos.

| Requisito/Issue | Código ou protótipo | Evidência de execução |
|---|---|---|
| RF-01 / #33 | src/index.html / src/pontos.html / src/pontos.js | Fluxo de consulta dos pontos funcionando na aplicação. |
| RF-02 / #33 | src/pontos.js / src/pontos.html | Materiais aceitos apresentados na página de pontos. |
| RF-03 / #33 | src/pontos.js / src/pontos.html | Horários apresentados na página de pontos. |
| RF-04 / #33 | src/pontos.js / src/pontos.html | Condições de entrega apresentadas na página de pontos. |
| RF-05 / #33 | src/pontos.js / src/pontos.html | Endereço do ponto apresentado na aplicação. |

## 5. Scrum e gestão do trabalho — 0,50 ponto

### Sprint Backlog

| Issue | Descrição | Responsável | Critério de aceitação/conclusão | Situação |
|---|---|---|---|---|
| #31 | Criar modelo comportamental do fluxo de consulta | @lucasensousa | Modelo comportamental criado, documentado e relacionado aos requisitos do fluxo de consulta | Pendente |
| #32 | Criar modelo estrutural do domínio | @lucasensousa | Modelo estrutural criado e documentado, representando os principais elementos do domínio | Pendente |
| #33 | Evoluir fluxo de consulta conforme modelo | @lucasensousa | Implementação evoluída de acordo com os modelos definidos e correspondente ao fluxo documentado | Pendente |
| #34 | Documentar modelagem e rastreabilidade | @lucasensousa | modelagem.md e rastreabilidade atualizados e relacionados aos requisitos e Issues da sprint | Pendente |

### Acompanhamento

- **GitHub Project:** https://github.com/users/lucasensousa/projects/2
- **Reuniões/decisões:** (https://meet.google.com/jgm-djwy-xhw?pli=1)
- **Impedimentos:** Nenhum
- **Mudanças de escopo:** Nenhuma

## 6. GitHub, documentação e rastreabilidade — 0,50 ponto

| Tipo de evidência | Link | O que comprova |
|---|---|---|
| Issue | [#31](https://github.com/lucasensousa/coleta-mais/issues/31) | Criação e documentação do modelo comportamental |
| Issue | [#32](https://github.com/lucasensousa/coleta-mais/issues/32) | Criação e documentação do modelo estrutural |
| Issue | [#33](https://github.com/lucasensousa/coleta-mais/issues/33) | Evolução do fluxo de consulta conforme os modelos |
| Issue | [#34](https://github.com/lucasensousa/coleta-mais/issues/34) | Documentação da modelagem e da rastreabilidade |
| Pull Request | `[link]` | Integração das alterações da Sprint 3 |
| Commit | `[link]` | ` ` |
| Código/arquivo | src/pontos.js / src/pontos.html | Implementação do incremento do fluxo de consulta. |
| Teste/captura/relatório | ` ` | Evidência visual da execução do fluxo de consulta. |

### Rastreabilidade resumida

| Requisito | Issue | Artefato/modelo/decisão | Código | Teste/evidência |
|---|---|---|---|---|
| RF-01 | #31 / #33 | docs/modelagem/modelagem.md — modelo comportamental / PONTO_COLETA | src/index.html / src/pontos.html / src/pontos.js | Execução do fluxo de consulta dos pontos. |
| RF-02 | #31 / #32 / #33 | docs/modelagem/modelagem.md — modelo estrutural / MATERIAL | src/pontos.html / src/pontos.js | Materiais apresentados na página de pontos. |
| RF-03 | #31 / #32 / #33 | docs/modelagem/modelagem.md — modelo estrutural / HORARIO | src/pontos.html / src/pontos.js | Horários apresentados na página de pontos. |
| RF-04 | #31 / #32 / #33 | docs/modelagem/modelagem.md — modelo estrutural / CONDICAO_ENTREGA | src/pontos.html / src/pontos.js | Condições de entrega apresentadas na página de pontos. |
| RF-05 | #31 / #32 / #33 | docs/modelagem/modelagem.md — modelo comportamental / PONTO_COLETA | src/pontos.html / src/pontos.js | Endereço apresentado na aplicação; mapa ainda não implementado. |
| RF-07 | #32 | docs/modelagem/modelagem.md — PONTO_COLETA | Não implementado nesta sprint | Ainda não aplicável nesta sprint |
| RF-08 | #32 | docs/modelagem/modelagem.md — PONTO_COLETA | Não implementado nesta sprint | Ainda não aplicável nesta sprint |
| RF-09 | #32 | docs/modelagem/modelagem.md — PONTO_COLETA.ativo | src/pontos.js possui o atributo status e filtra pontos ativos | Evidência no fluxo atual; persistência ainda não implementada. |
| RF-10 | #32 | docs/modelagem/modelagem.md — MATERIAL | src/pontos.js | Estrutura representada no código; gerenciamento administrativo ainda não implementado. |
| RF-11 | #32 | docs/modelagem/modelagem.md — HORARIO | src/pontos.js | Estrutura representada no código; gerenciamento administrativo ainda não implementado. |
| RF-12 | #32 | docs/modelagem/modelagem.md — CONDICAO_ENTREGA | src/pontos.js | Estrutura representada no código; gerenciamento administrativo ainda não implementado. |

## 7. Revisão do incremento

- **O que foi demonstrado:** O fluxo de consulta dos pontos de coleta foi executado, apresentando os dados a partir da estrutura definida em src/pontos.js e exibindo as informações em src/pontos.html.
- **Critérios atendidos:** Foram produzidos o modelo comportamental, o modelo estrutural, as descrições dos modelos, a matriz de rastreabilidade e a evolução do fluxo de consulta coerente com o modelo estrutural.
- **Itens não concluídos:** A integração com backend e banco de dados, o gerenciamento administrativo dos pontos e a visualização em mapa permanecem para etapas posteriores.
- **Motivo das pendências:** Essas funcionalidades não constituem o incremento mínimo necessário desta sprint e dependem de decisões e implementações posteriores do projeto.
- **Feedback recebido e ajustes:** O incremento foi verificado durante a execução local da aplicação. Foram realizados ajustes na organização dos dados e na documentação para manter a correspondência entre o modelo estrutural e o código.

## 8. Retrospectiva e próxima sprint

- **Funcionou bem:** A modelagem ajudou a explicitar os principais elementos do domínio e permitiu organizar melhor a estrutura dos dados utilizada pelo fluxo de consulta.
- **Precisa melhorar:** A integração entre a aplicação e a persistência dos dados deverá ser evoluída nas próximas etapas.
- **Ação concreta para a próxima sprint:** Aplicar princípios de projeto na organização interna do código e registrar decisões de decomposição, responsabilidades, coesão e acoplamento.

## 9. O que não será considerado suficiente

- Diagramas sem explicação.
- Imagens externas sem versão no repositório.
- Modelo genérico que não corresponde aos requisitos ou ao código.

## 10. Links enviados no UFLA Virtual

- **Tag `sprint-03`:** `[COLAR LINK]`
- **Este arquivo na tag:** `[COLAR LINK]`
- **Observação adicional:** Nenhuma
