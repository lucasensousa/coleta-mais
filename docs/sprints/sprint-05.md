
# Sprint 5 — Padrões de projeto aplicados ao código

## 1. Identificação

- **Número:** 5
- **Data de entrega:** 26/10/2026
- **Pontuação:** 2,5 pontos
- **Tag:** [Sprint-05](https://github.com/lucasensousa/coleta-mais/blob/main/docs/sprints/sprint-05.md)
- **GitHub Project:** https://github.com/users/lucasensousa/projects/2


## 2. Objetivo específico

Identificar um problema concreto de projeto e aplicar o padrão Strategy
à organização dos critérios de filtragem dos pontos de coleta.

## 3. Diferença em relação à Sprint 4

- **Novo:** estratégias separadas para status, pesquisa textual e material.
- **Atualizado:** decisões de projeto, modelagem e Product Backlog.
- **Motivo:** separar as regras de filtragem e documentar sua aplicação.

## 4. Sprint Backlog

| Issue | Item | Responsável | Critério de aceitação | Estado |
|---|---|---|---|---|
| https://github.com/lucasensousa/coleta-mais/issues/41 | T-07 | @AnthonyJSilva03 | Implementação validada e funcionalidade preservada | Concluído |
| https://github.com/lucasensousa/coleta-mais/issues/42 | D-08 | @lucasensousa | Documento de padrões completo e relacionado ao código | Concluído |
| https://github.com/lucasensousa/coleta-mais/issues/43 | D-09 | @lucasensousa | Documentação e evidências atualizadas | Concluído |

## 5. Artefato central

- **Arquivo:** `docs/padroes/padroes-de-projeto.md`
- **Padrão aplicado:** Strategy.
- **Problema:** regras de filtragem concentradas na página React.
- **Relação com a disciplina:** aplicação justificada de padrões de projeto.

## 6. Artefatos anteriores atualizados

| Arquivo | Alteração | Motivo |
|---|---|---|
| `docs/projeto/decisoes-de-projeto.md` | Acrescentar DP-04 | Registrar a decisão de utilizar Strategy |
| `docs/modelagem/modelagem.md` | Atualizar o fluxo comportamental | Refletir o novo módulo de filtragem |
| `docs/backlog-produto.md` | Registrar os itens da Sprint 5 | Manter o backlog rastreável |

## 7. Incremento da aplicação web

- **Código:** `frontend/src/strategies/collectionPointFilterStrategies.ts`
- **Página alterada:** `frontend/src/routes/pontos/index.tsx`
- **Requisitos:** RF-01 e RF-02.
- **Como executar:** `cd frontend`, `npm install`, `npm run dev`.
- **Evidências:** preencher com capturas e resultados realmente obtidos.

## 8. Rastreabilidade

**Funcionou bem:** Sim, com alta performance.
**Precisa melhorar:** Conforme o tempo da sprint, melhorar a organização.
**Ação concreta para a próxima sprint:** Definir a arquitetura global da aplicação.

## 9. O que não será considerado suficiente

Copiar definição teórica de padrão.
Forçar padrão sem necessidade.
Apresentar diagrama sem código correspondente.

## 10. Links enviados no UFLA Virtual

**Tag sprint-05:** [Sprint-05](https://github.com/lucasensousa/coleta-mais/releases/tag/sprint-05)
**Este arquivo na tag:** [Sprint-05](https://github.com/lucasensousa/coleta-mais/blob/main/docs/sprints/sprint-05.md)
**Observação adicional:** 
