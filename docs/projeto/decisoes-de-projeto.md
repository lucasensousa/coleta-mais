# Decisões de projeto
Este documento registra as principais decisões de projeto adotadas no desenvolvimento do Coleta+, considerando a organização interna do código, a separação de responsabilidades, a coesão e o acoplamento entre os componentes.

As decisões estão relacionadas à evolução da interface de HTML, CSS e JavaScript para React com TypeScript e à organização dos módulos da aplicação.
## 1. Decomposição da solução

| Módulo/componente local | Responsabilidade | Dependências observadas/permitidas | Requisitos relacionados |
|---|---|---|---|
| `frontend/src/routes/pontos/index.tsx` | Compor a página de consulta, controlar os filtros e coordenar a exibição dos pontos. | Componente de cartão, dados de demonstração, tipos e componentes de interface. | RF-01, RF-02 |
| `frontend/src/components/pontos/CollectionPointCard.tsx` | Apresentar as informações de um ponto de coleta em um componente próprio. | Recebe os dados necessários para renderizar o cartão; não deve assumir a responsabilidade de coordenar toda a página. | RF-01, RF-02 | 
| `frontend/src/data/collectionPointsMock.ts` | Manter os dados de demonstração utilizados pela página de consulta. | Importado pela página; não deve conter lógica de apresentação da interface. | RF-01, RF-02 |
| `frontend/src/types/collectionPoint.ts` | Definir tipos relacionados aos dados e filtros dos pontos de coleta. | Importado pelos módulos que precisam compartilhar essas estruturas. | RF-01, RF-02 |
| `backend/` | Agrupar o código do lado servidor. O detalhamento de serviços, interfaces e comunicação entre frontend e backend fica para a análise arquitetural da Sprint 6. | Spring Boot, Spring Web MVC, Spring Data JPA e PostgreSQL, conforme a implementação.  | Requisitos funcionais relacionados às operações efetivamente implementadas no backend. |

## 2. Registro de decisões

### DP-01 — Migração da interface estática para React com TypeScript

- **Contexto/problema:** A versão anterior da consulta de pontos utilizava uma página HTML e JavaScript que selecionava um elemento do DOM, criava cartões dinamicamente e inseria o conteúdo diretamente na página. Com o crescimento da aplicação, foi adotada uma estrutura baseada em React e TypeScript.
- **Alternativas consideradas:** Manter a interface em HTML/CSS/JavaScript com manipulação direta do DOM; utilizar React com JavaScript; utilizar React com TypeScript.
- **Decisão:** Utilizar React com TypeScript para estruturar a interface web.
- **Justificativa:** React permite compor a tela a partir de componentes e gerenciar o estado da interface de maneira declarativa. TypeScript acrescenta tipos às estruturas usadas pela página, reduzindo ambiguidades na manutenção do código.
- **Consequências positivas:** A interface passou a ter uma estrutura orientada a componentes; filtros e estado da página são controlados dentro do componente React; a organização facilita mudanças incrementais.
- **Trade-offs/riscos:** A aplicação depende do ecossistema de ferramentas do frontend, incluindo instalação de dependências e etapa de compilação. A migração, por si só, não comprova integração com o backend nem garante ausência de defeitos.
- **Código afetado — antes:** [`develop/src/pontos.html`](https://github.com/lucasensousa/coleta-mais/blob/develop/src/pontos.html) e [`develop/src/pontos.js`](https://github.com/lucasensousa/coleta-mais/blob/develop/src/pontos.js).
- **Código afetado — depois:** [`frontend/src/routes/pontos/index.tsx`](https://github.com/lucasensousa/coleta-mais/blob/main/frontend/src/routes/pontos/index.tsx).
- **Requisitos relacionados:** RF-01 e RF-02; [Issue #1 — consultar pontos](https://github.com/lucasensousa/coleta-mais/issues/1) e [Issue #2 — consultar materiais aceitos](https://github.com/lucasensousa/coleta-mais/issues/2).
- **Evidência de histórico:** [Histórico de commits da branch main](https://github.com/lucasensousa/coleta-mais/commits/main)

### DP-02 — Separação da página de consulta e do cartão de ponto

- **Contexto/problema:** Na implementação estática anterior, o JavaScript criava cada cartão com manipulação direta do DOM e montagem de conteúdo HTML. Essa abordagem mantinha a criação visual dos cartões dentro do mesmo script que consultava os dados.
- **Alternativas consideradas:** Manter toda a apresentação na página de consulta; criar um componente reutilizável para apresentar cada ponto; criar componentes adicionais para cada elemento visual, mesmo quando não houver necessidade.
- **Decisão:** Manter o cartão de ponto separado da página que coordena a consulta.
- **Justificativa:** A decisão atribui responsabilidades mais específicas aos componentes. A página gerencia os filtros e a lista de resultados, enquanto `CollectionPointCard` apresenta as informações de um ponto.
- **Consequências positivas:** A apresentação de um ponto pode ser mantida separadamente; a página principal fica menos dependente dos detalhes internos de cada cartão; o componente pode ser reutilizado em outros fluxos que precisem apresentar um ponto.
- **Trade-offs/riscos:** A separação exige definir corretamente os dados recebidos pelo componente e manter uma interface consistente entre página e cartão. A criação de componentes muito pequenos sem responsabilidade clara deve ser evitada.
- **Código afetado:** [`pontos/index.tsx`](https://github.com/lucasensousa/coleta-mais/blob/main/frontend/src/routes/pontos/index.tsx) e [`CollectionPointCard.tsx`](https://github.com/lucasensousa/coleta-mais/blob/main/frontend/src/components/pontos/CollectionPointCard.tsx).
- **Issue/PR/commit:** Relaciona-se ao fluxo de consulta de pontos ([Issue #1](https://github.com/lucasensousa/coleta-mais/issues/1)).

### DP-03 — Separação dos dados de demonstração e dos tipos

- **Contexto/problema:** A implementação anterior declarava os pontos em uma estrutura JavaScript no mesmo arquivo que realizava a manipulação do DOM. Isso aproximava os dados da lógica de renderização.
- **Alternativas consideradas:** Declarar os dados diretamente no componente da página; manter os dados de demonstração em um módulo próprio; centralizar os tipos compartilhados em arquivos dedicados.
- **Decisão:** Manter os dados de demonstração em `frontend/src/data/collectionPointsMock.ts` e os tipos de domínio em `frontend/src/types/collectionPoint.ts`.
- **Justificativa:** A separação melhora a coesão dos módulos e torna explícitas as estruturas usadas pela página. Também facilita substituir a origem dos dados no futuro, desde que o formato recebido seja compatível com os tipos esperados.
- **Consequências positivas:** Os dados de demonstração podem ser alterados separadamente da interface; tipos compartilhados ficam localizáveis; a página importa as dependências de maneira explícita.
- **Trade-offs/riscos:** A separação dos dados não equivale a persistência em banco nem a integração com uma API. Atualmente, a página de pontos consultada ainda usa os dados mockados.
- **Código afetado:** [`collectionPointsMock.ts`](https://github.com/lucasensousa/coleta-mais/blob/main/frontend/src/data/collectionPointsMock.ts), [`collectionPoint.ts`](https://github.com/lucasensousa/coleta-mais/blob/main/frontend/src/types/collectionPoint.ts) e [`pontos/index.tsx`](https://github.com/lucasensousa/coleta-mais/blob/main/frontend/src/routes/pontos/index.tsx).
- **Requisitos relacionados:** RF-01 e RF-02; [Issue #1](https://github.com/lucasensousa/coleta-mais/issues/1) e [Issue #2](https://github.com/lucasensousa/coleta-mais/issues/2).
- **Evidência de histórico:** [Histórico de commits da branch main](https://github.com/lucasensousa/coleta-mais/commits/main).

### DP-04 — Aplicação do padrão Strategy à filtragem

- **Contexto/problema:** Na página de consulta, os critérios de filtragem por status, texto pesquisado e material estavam concentrados no mesmo trecho de código. Essa organização dificulta a evolução independente das regras.

- **Alternativas consideradas:**
  1. Manter todas as condições na página de consulta.
  2. Extrair a lógica para uma única função de filtragem.
  3. Aplicar o padrão Strategy, separando os critérios em estratégias independentes.

- **Decisão:** Adotar o padrão Strategy para separar os critérios de filtragem dos pontos de coleta, mantendo uma interface comum para as estratégias e uma função responsável por coordenar sua aplicação.

- **Justificativa:** A separação permite alterar ou adicionar critérios de filtragem sem concentrar todas as condições na página React, favorecendo a organização e a manutenção do código.

- **Consequências positivas esperadas:** Maior separação de responsabilidades, regras de filtragem mais coesas e facilidade para ampliar os critérios de consulta.

- **Custos e limitações:** O padrão acrescenta interfaces e classes ao projeto. Como os critérios atuais são simples, a implementação deve evitar abstrações desnecessárias.

- **Código relacionado:**
  - `frontend/src/routes/pontos/index.tsx`
  - `frontend/src/strategies/collectionPointFilterStrategies.ts`

- **Requisitos relacionados:** RF-01 e RF-02.

- **Issues relacionadas:**
  - [#41 — T-07: Aplicar Strategy à filtragem](https://github.com/lucasensousa/coleta-mais/issues/41)
  - [#42 — D-08: Documentar o padrão Strategy](https://github.com/lucasensousa/coleta-mais/issues/42)
  - [#43 — D-09: Atualizar documentação e evidências](https://github.com/lucasensousa/coleta-mais/issues/43)

- **Situação:** Decisão registrada para a Sprint 5.

## 3. Antes e depois

| Aspecto | Antes | Depois | Benefício observado |
|---|---|---|---|
| Tecnologia da interface | [`pontos.html`](https://github.com/lucasensousa/coleta-mais/blob/develop/src/pontos.html) e [`pontos.js`](https://github.com/lucasensousa/coleta-mais/blob/develop/src/pontos.js), com manipulação direta do DOM. | [`pontos/index.tsx`](https://github.com/lucasensousa/coleta-mais/blob/main/frontend/src/routes/pontos/index.tsx), com React e TypeScript. | Interface estruturada como componente React, com estado e filtros controlados na página. |
| Apresentação de cada ponto | O script anterior montava cartões dinamicamente e inseria HTML no elemento `lista-pontos`. | [`CollectionPointCard.tsx`](https://github.com/lucasensousa/coleta-mais/blob/main/frontend/src/components/pontos/CollectionPointCard.tsx). | A apresentação de um ponto possui módulo próprio, separado da coordenação da página. |
| Organização dos dados | Os dados de demonstração eram declarados no próprio `pontos.js`. | [`collectionPointsMock.ts`](https://github.com/lucasensousa/coleta-mais/blob/main/frontend/src/data/collectionPointsMock.ts) e [`collectionPoint.ts`](https://github.com/lucasensousa/coleta-mais/blob/main/frontend/src/types/collectionPoint.ts). | Dados de demonstração e tipos têm localizações específicas e são importados pela página. |

A comparação acima referencia a implementação estática disponível na branch `develop` e a implementação React disponível na branch `main`.

## 4. Verificação dos princípios

- [ x ] Cada módulo possui responsabilidade identificável.
- [ x ] Dependências desnecessárias foram reduzidas.
- [ x ] Nomes representam o domínio e o comportamento.
- [ x ] A decisão aparece no código, não apenas neste documento.
- [ x ] O grupo consegue explicar alternativas e consequências.
