# Coleta+ | Frontend

Interface web do projeto **Coleta+**, desenvolvida para facilitar o descarte ambientalmente responsável de lixo eletrônico na cidade de Lavras - MG e no campus da UFLA.

---

## 📌 Sobre o Projeto

O **Coleta+** centraliza e simplifica o acesso da população a pontos de descarte de resíduos eletrônicos (computadores, pilhas, baterias, celulares e periféricos). A aplicação permite:

- 🗺️ **Consultar Pontos de Coleta:** Visualizar ecopontos ativos em Lavras com localização, horários de funcionamento e contatos.
- 🔍 **Filtro por Materiais e Busca Rápida:** Encontrar locais adequados para o tipo específico de resíduo a ser descartado.
- ⚠️ **Orientações de Entrega:** Verificar condições essenciais para descarte seguro (ex.: baterias isoladas, aparelhos desligados).
- 🌐 **Internacionalização (i18n):** Estrutura multilíngue desacoplada e centralizada.

---

## 🚀 Tecnologias Utilizadas

- **Framework & Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/) (executado com [Bun](https://bun.sh/))
- **Roteamento:** [TanStack Router](https://tanstack.com/router) (roteamento tipado em arquivos com suporte a code-splitting)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes de UI:** [shadcn/ui](https://ui.shadcn.com/) (CLI e componentes acessíveis com variantes tipadas)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Internacionalização:** [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/)
- **Padronização:** [ESLint](https://eslint.org/)

---

## 📂 Estrutura de Pastas

```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/       # Sidebar e elementos globais de layout
│   │   ├── pontos/       # Componentes específicos de pontos de coleta
│   │   └── ui/           # Componentes base do shadcn (Button, Card, Badge, Input)
│   ├── data/             # Mocks de dados temporários (enquanto sem backend)
│   ├── i18n/             # Configuração e dicionários de tradução (locales/pt-BR.json)
│   ├── lib/              # Utilitários (ex.: cn helper)
│   ├── routes/           # Rotas tipadas com TanStack Router (pastas com index.tsx)
│   │   ├── __root.tsx    # Layout raiz da aplicação
│   │   ├── index.tsx     # Página inicial (/)
│   │   ├── pontos/       # Catálogo de locais (/pontos)
│   │   ├── about/        # Sobre o projeto (/about)
│   │   ├── historico/    # Histórico de descartes (/historico)
│   │   └── relatorios/   # Relatórios ambientais (/relatorios)
│   ├── types/            # Modelos e interfaces de domínio TypeScript
│   ├── index.css         # Importações do Tailwind CSS e tokens de estilo
│   └── main.tsx          # Ponto de entrada do React
├── components.json       # Configuração da CLI do shadcn
├── vite.config.ts        # Configuração do Vite e plugins
└── package.json
```

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v20+) ou preferencialmente [Bun](https://bun.sh/) instalado.

### 1. Clonar o repositório e entrar na pasta do frontend
```bash
cd frontend
```

### 2. Instalar as dependências
Com **Bun** (recomendado):
```bash
bun install
```
*Ou com npm:*
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
bun dev
```
*Ou com npm:*
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `bun dev` | Inicia o servidor Vite em modo de desenvolvimento com Hot Reload. |
| `bun run build` | Valida as tipagens (`tsc -b`) e compila a aplicação para produção na pasta `dist`. |
| `bun run preview` | Pré-visualiza localmente a versão compilada em produção. |
| `bun lint` | Executa a verificação estática de código com o ESLint. |
| `bun lint --fix` | Corrige problemas automáticos apontados pelo linter. |

---

## 🧩 Adicionando Novos Componentes do shadcn

O projeto está configurado com a CLI oficial do shadcn. Para adicionar novos componentes, execute:

```bash
bun x --bun shadcn@latest add <componente>
```
*Exemplos:*
```bash
bun x --bun shadcn@latest add dialog
bun x --bun shadcn@latest add select
bun x --bun shadcn@latest add dropdown-menu
```
