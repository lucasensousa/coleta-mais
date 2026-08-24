# Trabalho Final de Engenharia de Software - 2026/2


## 1. Identificação do projeto

| Campo | Informação |
|---|---|
| Nome do projeto | Coleta+ |
| Problema escolhido | Coleta de lixo eletrônico em Lavras |
| Turma/semestre | Engenharia de Software — 2026/2 |
| Professor | Prof. Johnatan Oliveira |
| Link do GitHub Project | https://github.com/users/lucasensousa/projects/2 |
| Link da aplicação publicada | `[COLAR LINK ]` |
| Link do vídeo final | `[PREENCHER NA ENTREGA FINAL]` |

### Integrantes

| Nome completo | Usuário no GitHub | Responsabilidade principal | Outras contribuições |
|---|---|---|---|
| Anthony José da Silva | @AnthonyJSilva03 | Desenvolvedor | Analista de Dados |
| Luiz Paulo Felizali Selvati | @LuizPauloFelizali | Product Owner | Analista de Requisitos |
| Lucas Emanuel Neves de Sousa | @lucasensousa | Product Owner | Desenvolvedor |
| Thawan Victor Carvalho | @ThawanVCSantos | Desenvolvedor | Analista de Qualidade |


## 2. Resumo da solução

**Problema:** Em Lavras, o descarte de lixo eletrônico é um problema que envolve a necessidade de encaminhar corretamente equipamentos e materiais que não são mais utilizados. A população precisa ter acesso a informações claras sobre onde esses resíduos podem ser entregues e quais materiais são aceitos em cada local. A falta de uma forma simples de consultar essas informações dificulta o descarte adequado. 

**Solução proposta:** Será desenvolvida uma aplicação web para facilitar o descarte de lixo eletrônico em Lavras. A plataforma permitirá consultar informações sobre pontos de coleta e os tipos de materiais que podem ser entregues em cada local. A proposta é reunir essas informações em um único sistema, facilitando o acesso da população aos locais adequados para descarte.

**Público principal:** O sistema será destinado principalmente à população de Lavras, que poderá consultar informações sobre locais de coleta e os tipos de lixo eletrônico recebidos. Também poderá beneficiar os responsáveis pelos pontos de coleta, facilitando a divulgação e a organização das informações sobre os materiais aceitos.

**Funcionalidades prioritárias:**
- Consultar pontos de coleta de lixo eletrônico
- Visualizar informações sobre os materiais aceitos em cada ponto de coleta
- Consultar horários e condições de entrega dos pontos de coleta

## 3. Comece por aqui

1. Leia o [Guia rápido de uso](GUIA_RAPIDO.md).
2. Preencha este `README.md` e o documento de [visão geral](docs/visao-geral.md).
3. Crie o GitHub Project e registre os itens como Issues.
4. Consulte o [mapa das oito entregas](docs/sprints/README.md).
5. Em cada prazo, atualize o arquivo da sprint, crie a tag correspondente e envie os links no UFLA Virtual.
6. Antes da entrega final, execute o [validador da estrutura](scripts/validar_repositorio.py) e o [checklist final](CHECKLIST_ENTREGA_FINAL.md).

## 4. Cronograma e pontuação

| Etapa | Data | Entrega central | Pontos | Tag obrigatória |
|---|---:|---|---:|---|
| Sprint 1 | 24/08/2026 | Problema, visão do produto, Scrum, GitHub e backlog inicial | 2,5 | `sprint-01` |
| Sprint 2 | 14/09/2026 | Requisitos verificáveis e escopo da aplicação | 2,5 | `sprint-02` |
| Sprint 3 | 28/09/2026 | Modelagem e rastreabilidade | 2,5 | `sprint-03` |
| Sprint 4 | 13/10/2026 | Princípios de projeto e decisões locais | 2,5 | `sprint-04` |
| Sprint 5 | 26/10/2026 | Padrões de projeto aplicados ao código | 2,5 | `sprint-05` |
| Sprint 6 | 09/11/2026 | Arquitetura global da aplicação | 2,5 | `sprint-06` |
| Sprint 7 | 16/11/2026 | Plano de testes e primeiras execuções | 2,5 | `sprint-07` |
| Sprint 8 | 23/11/2026 | Validação final e estabilização | 2,5 | `sprint-08` |
| Entrega final | 30/11/2026 | GitHub consolidado, slides e vídeo no YouTube | 5,0 | `versao-final` |
| **Total** |  |  | **25,0** |  |

## 5. Como cada sprint é avaliada

Cada sprint vale **2,5 pontos**:

| Dimensão | Pontos | O que deve estar verificável |
|---|---:|---|
| Artefato central da disciplina | 0,75 | Documento específico da etapa, tecnicamente consistente e completo |
| Incremento da aplicação web | 0,75 | Código, protótipo, teste ou funcionalidade que demonstre evolução concreta |
| Scrum e gestão do trabalho | 0,50 | Issues, Sprint Backlog, responsáveis, critérios de aceitação e revisão |
| GitHub, documentação e rastreabilidade | 0,50 | Commits, links, tag, organização e relação entre artefatos e código |

> Criar apenas o arquivo `docs/sprints/sprint-0X.md` não caracteriza a entrega. Ele deve funcionar como **índice**, contendo links para tudo que foi realmente produzido.

## 6. Estrutura do repositório

```text
.
├── README.md
├── GUIA_RAPIDO.md
├── CONTRIBUTING.md
├── CHECKLIST_ENTREGA_FINAL.md
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── visao-geral.md
│   ├── backlog-produto.md
│   ├── rastreabilidade.md
│   ├── uso-de-ia.md
│   ├── requisitos/requisitos.md
│   ├── modelagem/modelagem.md
│   ├── projeto/decisoes-de-projeto.md
│   ├── padroes/padroes-de-projeto.md
│   ├── arquitetura/arquitetura.md
│   ├── testes/
│   │   ├── plano-de-testes.md
│   │   └── evidencias-testes.md
│   ├── reunioes/
│   ├── evidencias/
│   ├── sprints/sprint-01.md ... sprint-08.md
│   └── entrega-final.md
├── slides/
├── src/
├── tests/
└── scripts/validar_repositorio.py
```

## 7. Execução da aplicação de exemplo

A pasta `src/` contém uma página estática mínima apenas para demonstrar que, desde a Sprint 1, o repositório deve possuir uma aplicação executável.

```bash
python -m http.server 8000 --directory src
```

Abra `http://localhost:8000`. O grupo deverá substituir esse exemplo pela tecnologia e pelo código reais do projeto.

## 8. Regra de ouro da rastreabilidade

Sempre que possível, deve ser possível seguir este caminho:

```text
Problema → requisito → Issue → sprint → modelo/decisão → código → teste → evidência
```

A tabela central desse vínculo deve ser mantida em [`docs/rastreabilidade.md`](docs/rastreabilidade.md).

## 9. Entrega final

Até **30/11/2026**, o repositório deve estar consolidado na tag `versao-final` e conter:

- código-fonte e instruções de execução;
- todos os artefatos atualizados;
- slides utilizados, dentro de `slides/`;
- link do vídeo no YouTube, público ou não listado;
- vídeo de no máximo **10 minutos**;
- explicação inicial da documentação e da organização do repositório;
- demonstração das principais funcionalidades;
- compartilhamento legível da tela com a execução do sistema;
- pelo menos um aluno visível no vídeo. Não é necessário que todos apresentem.

Leia os detalhes em [`docs/entrega-final.md`](docs/entrega-final.md).
