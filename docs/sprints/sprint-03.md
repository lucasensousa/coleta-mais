# Sprint 3 — Modelagem e rastreabilidade dos requisitos

- **Data de entrega:** 28/09/2026
- **Pontuação:** 2,5 pontos
- **Tag obrigatória:** `sprint-03`
- **Responsável por conferir este arquivo:** `[PREENCHER]`

## 1. Pergunta que esta sprint deve responder

**Como a estrutura e os principais fluxos do sistema são representados?**

## 2. Objetivo e resultado da sprint

**Objetivo planejado:** Modelar o comportamento e a estrutura do Coleta+, relacionando os modelos aos requisitos definidos na Sprint 2 e à implementação da aplicação.

**Resultado efetivamente alcançado:** `[PREENCHER ao final da sprint]`

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

`[Explique o comportamento demonstrável e relacione-o aos requisitos.]`

### Como executar e verificar

Abrir o arquivo `src/index.html` em um navegador.
Na página inicial, acessar a opção "Encontrar pontos de coleta" e verificar a página de pontos.

| Requisito/Issue | Código ou protótipo | Evidência de execução |
|---|---|---|
| RF-01 / #33 | src/index.html / src/pontos.html | [A preencher após a conclusão e demonstração do incremento] |
| RF-02 / #33 | src/pontos.html | [A preencher após a conclusão e demonstração do incremento] |
| RF-03 / #33 | src/pontos.html | [A preencher após a conclusão e demonstração do incremento] |
| RF-04 / #33 | src/pontos.html | [A preencher após a conclusão e demonstração do incremento] |
| RF-05 / #33 | src/pontos.html | [A preencher após a conclusão e demonstração do incremento] |

## 5. Scrum e gestão do trabalho — 0,50 ponto

### Sprint Backlog

| Issue | Descrição | Responsável | Critério de aceitação/conclusão | Situação |
|---|---|---|---|---|
| #31 | Criar modelo comportamental do fluxo de consulta | @lucasensousa | Modelo comportamental criado, documentado e relacionado aos requisitos do fluxo de consulta | Pendente |
| #32 | Criar modelo estrutural do domínio | @lucasensousa | Modelo estrutural criado e documentado, representando os principais elementos do domínio | Pendente |
| #33 | Evoluir fluxo de consulta conforme modelo | ` ` | Implementação evoluída de acordo com os modelos definidos e correspondente ao fluxo documentado | Pendente |
| #34 | Documentar modelagem e rastreabilidade | @lucasensousa | modelagem.md e rastreabilidade atualizados e relacionados aos requisitos e Issues da sprint | Pendente |

### Acompanhamento

- **GitHub Project:** https://github.com/users/lucasensousa/projects/2
- **Reuniões/decisões:** `[links para docs/reunioes/]`
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
| Código/arquivo | `[link]` | `[PREENCHER]` |
| Teste/captura/relatório | `[link]` | `[PREENCHER]` |

### Rastreabilidade resumida

| Requisito | Issue | Artefato/modelo/decisão | Código | Teste/evidência |
|---|---|---|---|---|
| RF-01 | #31 / #33 | docs/modelagem/modelagem.md — modelo comportamental / PONTO_COLETA | src/index.html / src/pontos.html | [A preencher após execução] |
| RF-02 | #31 / #32 / #33 | docs/modelagem/modelagem.md — modelo comportamental / MATERIAL | src/pontos.html | [A preencher após execução] |
| RF-03 | #31 / #32 / #33 | docs/modelagem/modelagem.md — modelo comportamental / HORARIO | src/pontos.html | [A preencher após execução] |
| RF-04 | #31 / #32 / #33 | docs/modelagem/modelagem.md — modelo comportamental / CONDICAO_ENTREGA | src/pontos.html | [A preencher após execução] |
| RF-05 | #31 / #32 / #33 | docs/modelagem/modelagem.md — modelo comportamental / PONTO_COLETA | src/pontos.html | [A preencher após execução] |
| RF-07 | #32 | docs/modelagem/modelagem.md — PONTO_COLETA | [A preencher conforme implementação] | Ainda não aplicável nesta sprint |
| RF-08 | #32 | docs/modelagem/modelagem.md — PONTO_COLETA | [A preencher conforme implementação] | Ainda não aplicável nesta sprint |
| RF-09 | #32 | docs/modelagem/modelagem.md — PONTO_COLETA.ativo | [A preencher conforme implementação] | Ainda não aplicável nesta sprint |
| RF-10 | #32 | docs/modelagem/modelagem.md — MATERIAL | [A preencher conforme implementação] | Ainda não aplicável nesta sprint |
| RF-11 | #32 | docs/modelagem/modelagem.md — HORARIO | [A preencher conforme implementação] | Ainda não aplicável nesta sprint |
| RF-12 | #32 | docs/modelagem/modelagem.md — CONDICAO_ENTREGA | [A preencher conforme implementação] | Ainda não aplicável nesta sprint |

## 7. Revisão do incremento

- **O que foi demonstrado:** `[PREENCHER]`
- **Critérios atendidos:** `[PREENCHER]`
- **Itens não concluídos:** `[PREENCHER]`
- **Motivo das pendências:** `[PREENCHER]`
- **Feedback recebido e ajustes:** `[PREENCHER]`

## 8. Retrospectiva e próxima sprint

- **Funcionou bem:** `[PREENCHER]`
- **Precisa melhorar:** `[PREENCHER]`
- **Ação concreta para a próxima sprint:** `[PREENCHER]`

## 9. O que não será considerado suficiente

- Diagramas sem explicação.
- Imagens externas sem versão no repositório.
- Modelo genérico que não corresponde aos requisitos ou ao código.

## 10. Links enviados no UFLA Virtual

- **Tag `sprint-03`:** `[COLAR LINK]`
- **Este arquivo na tag:** `[COLAR LINK]`
- **Observação adicional:** `[quando necessária]`
