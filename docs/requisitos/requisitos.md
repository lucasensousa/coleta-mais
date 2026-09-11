# Requisitos da aplicação

> **Artefato central da Sprint 2.** Não repita apenas o problema; descreva o comportamento e as condições que o sistema deverá atender.

## 1. Método de levantamento

Os requisitos foram identificados a partir da análise do problema de descarte de lixo eletrônico em Lavras, da visão do produto definida na Sprint 1 e das discussões realizadas pelo grupo. A partir dessas informações, foram definidos os atores, requisitos funcionais e não funcionais, regras de negócio e histórias de usuário do sistema.

## 2. Atores e perfis

| Ator/perfil | Objetivo no sistema | Permissões ou limitações principais |
|---|---|---|
| Usuário | Pessoa que utiliza a aplicação web para consultar informações sobre pontos de coleta de lixo eletrônico. | O usuário poderá consultar os pontos disponíveis, verificar os materiais aceitos, horários de funcionamento, condições de entrega e localização dos pontos. |
| Administrador | Responsável pela manutenção das informações disponibilizadas pela aplicação.| O administrador poderá acessar uma área administrativa e gerenciar os pontos de coleta, materiais aceitos, horários e condições de entrega.|

## 3. Requisitos funcionais

| ID | Nome | Descrição verificável | Prioridade | História/Issue | Situação final |
|---|---|---|---|---|---|
| RF-01 | Consultar pontos de coleta | O sistema deve permitir que o usuário consulte os pontos de coleta de lixo eletrônico cadastrados e disponíveis em Lavras. | Alta | US-01/#1 | Planejado |
| RF-02 | Consultar materiais aceitos | permitir que o usuário consulte os materiais de lixo eletrônico aceitos em cada ponto de coleta. | Alta | US-02/#2 | Planejado |
| RF-03 | Consultar horários de funcionamento | O sistema deve permitir que o usuário consulte os dias e horários de funcionamento de cada ponto de coleta. | Média | US-03/#3 | Planejado |
| RF-04 | Consultar condições de entrega | O sistema deve permitir que o usuário consulte as condições de entrega de materiais em cada ponto de coleta. | Média | US-04/#4 | Planejado |
| RF-05 | Visualizar localização |O sistema deve permitir que o usuário visualize a localização de um ponto de coleta por meio de seu endereço e, quando disponível, de sua representação em mapa. | Alta |  US-05/#5 | Planejado |
| RF-06 | Autenticar administrador | O sistema deve permitir que o administrador realize login utilizando credenciais válidas para acessar a área administrativa. | Alta | US-06/#16 | Planejado |
| RF-07 | Cadastrar ponto de coleta | O sistema deve permitir que o administrador cadastre um novo ponto de coleta informando os dados obrigatórios definidos pelo sistema. | Alta | US-07/#17 | Planejado |
| RF-08 | Editar ponto de coleta | O sistema deve permitir que o administrador altere os dados de um ponto de coleta previamente cadastrado. | Alta | US-08/#18 | Planejado |
| RF-09 | Desativar ponto de coleta | O sistema deve permitir que o administrador desative um ponto de coleta, impedindo que ele seja apresentado como disponível para os usuários. | Média | US-09/#19 | Planejado |
| RF-10 | Gerenciar materiais aceitos | O sistema deve permitir que o administrador cadastre, edite e remova materiais associados aos pontos de coleta. | Alta | US-10/#20 | Planejado |
| RF-11 | Gerenciar horários | O sistema deve permitir que o administrador cadastre, edite e remova os horários de funcionamento dos pontos de coleta. | Média | US-11/#21 | Planejado |
| RF-12 | Gerenciar condições de entrega | O sistema deve permitir que o administrador cadastre, edite e remova as condições de entrega dos pontos de coleta. | Média | US-12/#22 | Planejado |

## 4. Requisitos não funcionais

Evite termos vagos. Sempre que possível, inclua condição ou métrica.

| ID | Categoria | Descrição verificável | Como será avaliado | Issue |
|---|---|---|---|---|
| RNF-01 | Usabilidade | A aplicação deve permitir que o usuário acesse as informações de um ponto de coleta em, no máximo, 3 interações a partir da página inicial. | Teste manual do fluxo de consulta, contabilizando as interações necessárias para acessar os detalhes de um ponto. | #23 |
| RNF-02 | Responsividade | A aplicação deve manter suas funcionalidades principais utilizáveis em dispositivos com diferentes tamanhos de tela, incluindo computador, tablet e smartphone. | Teste da aplicação em diferentes resoluções de tela, verificando a disponibilidade e organização das funcionalidades principais. | #24` |
| RNF-03 | Segurança | As funcionalidades exclusivas do administrador devem ser acessíveis somente após autenticação válida. | Tentativa de acesso à área administrativa sem autenticação e com credenciais inválidas. | #25 |
| RNF-04 | Compatibilidade | As funcionalidades principais da aplicação devem funcionar corretamente nas versões atuais dos navegadores Google Chrome, Mozilla Firefox e Microsoft Edge. | Execução dos principais fluxos do sistema nos três navegadores e comparação dos resultados. | #26 |
| RNF-05 | Integridade dos Dados | O sistema não deve permitir o cadastro de pontos de coleta sem o preenchimento dos campos obrigatórios definidos para o cadastro. | Tentativa de cadastrar um ponto deixando campos obrigatórios vazios e verificação da rejeição do cadastro. | #27 |
| RNF-06 | Disponibilidade | As informações dos pontos de coleta cadastradas pelo administrador devem permanecer disponíveis para consulta enquanto o registro estiver ativo. | Cadastro ou alteração de um ponto pelo administrador e posterior consulta utilizando o perfil de usuário. | #28 |

## 5. Regras de negócio

| ID | Regra | Origem/justificativa | Requisitos afetados |
|---|---|---|---|
| RN-01 | Somente administradores autenticados podem acessar as funcionalidades de gerenciamento do sistema. | Necessidade de restringir alterações nas informações dos pontos de coleta. | RF-06, RNF-03 |
| RN-02 | Um ponto de coleta desativado não deve ser apresentado como disponível para consulta pelos usuários. | Evitar que usuários sejam direcionados a pontos que não estão mais disponíveis. | RF-01, RF-09 |
| RN-03 | Cada ponto de coleta deve possuir os dados obrigatórios definidos pelo sistema antes de ser disponibilizado para consulta. | Garantir que os usuários tenham informações mínimas para identificar e utilizar o ponto. | RF-01, RF-07, RNF-05 |
| RN-04 | Os materiais aceitos devem estar associados ao respectivo ponto de coleta. | Os pontos podem receber diferentes tipos de lixo eletrônico. | RF-02, RF-10 |
| RN-05 | Os horários e condições de entrega devem estar associados ao respectivo ponto de coleta. | As condições de recebimento podem variar entre os pontos. | RF-03, RF-04, RF-11, RF-12 |


## 6. Histórias de usuário e critérios de aceitação

### US-01 — Consultar pontos de coleta

Como **usuário**, quero **consultar os pontos de coleta de lixo eletrônico**, para **encontrar um local adequado para realizar o descarte**.

**Requisitos relacionados:** `RF-01`

**Critérios de aceitação:**

1. **Dado que** existem pontos de coleta ativos cadastrados, **quando** o usuário acessar a consulta de pontos, **então** o sistema deve apresentar os pontos disponíveis.

2. **Dado que** não existem pontos de coleta ativos, **quando** o usuário acessar a consulta, **então** o sistema deve informar que não há pontos disponíveis.

**Issue:** `#1`

### US-02 — Consultar materiais aceitos

Como **usuário**, quero **consultar os materiais aceitos por cada ponto de coleta**, para **saber se meu lixo eletrônico pode ser entregue no local**.

**Requisitos relacionados:** `RF-02`, `RN-04`

**Critérios de aceitação:**

1. **Dado que** um ponto de coleta possui materiais cadastrados, **quando** o usuário consultar o ponto, **então** o sistema deve apresentar os materiais aceitos.

2. **Dado que** um material não está associado ao ponto consultado, **quando** o usuário visualizar os materiais aceitos, **então** esse material não deve ser apresentado como aceito pelo ponto.

**Issue:** `#2`

### US-03 — Consultar horários de funcionamento

Como **usuário**, quero **consultar os horários de funcionamento dos pontos de coleta**, para **saber quando posso realizar a entrega**.

**Requisitos relacionados:** `RF-03`, `RN-05`

**Critérios de aceitação:**

1. **Dado que** um ponto possui horários cadastrados, **quando** o usuário consultar seus detalhes, **então** o sistema deve apresentar os dias e horários de funcionamento.

2. **Dado que** não existem horários cadastrados para o ponto, **quando** o usuário consultar seus detalhes, **então** o sistema deve informar que os horários não estão disponíveis.

**Issue:** `#3`

### US-04 — Consultar condições de entrega

Como **usuário**, quero **consultar as condições de entrega de um ponto de coleta**, para **saber quais regras devo seguir para realizar o descarte**.

**Requisitos relacionados:** `RF-04`, `RN-05`

**Critérios de aceitação:**

1. **Dado que** existem condições de entrega cadastradas, **quando** o usuário consultar o ponto, **então** o sistema deve apresentar essas condições.

2. **Dado que** não existem condições cadastradas, **quando** o usuário consultar o ponto, **então** o sistema deve informar que não há condições disponíveis.

**Issue:** `#4`

### US-05 — Visualizar localização

Como **usuário**, quero **visualizar a localização de um ponto de coleta**, para **saber onde realizar a entrega do lixo eletrônico**.

**Requisitos relacionados:** `RF-05`

**Critérios de aceitação:**

1. **Dado que** um ponto possui endereço cadastrado, **quando** o usuário consultar seus detalhes, **então** o sistema deve apresentar o endereço do ponto.

2. **Dado que** o ponto possui localização disponível para exibição em mapa, **quando** o usuário consultar seus detalhes, **então** o sistema deve apresentar sua localização no mapa.

**Issue:** `#5`

### US-06 — Realizar login administrativo

Como **administrador**, quero **realizar login no sistema**, para **acessar as funcionalidades administrativas**.

**Requisitos relacionados:** `RF-06`, `RN-01`, `RNF-03`

**Critérios de aceitação:**

1. **Dado que** o administrador possui credenciais válidas, **quando** realizar o login, **então** o sistema deve permitir o acesso à área administrativa.

2. **Dado que** as credenciais informadas são inválidas, **quando** o administrador tentar realizar o login, **então** o sistema deve impedir o acesso e informar que as credenciais são inválidas.

**Issue:** `#16`

### US-07 — Cadastrar ponto de coleta

Como **administrador**, quero **cadastrar pontos de coleta**, para **disponibilizar novos locais para consulta dos usuários**.

**Requisitos relacionados:** `RF-07`, `RN-03`, `RNF-05`

**Critérios de aceitação:**

1. **Dado que** o administrador está autenticado e preenche os campos obrigatórios corretamente, **quando** confirmar o cadastro, **então** o sistema deve registrar o novo ponto de coleta.

2. **Dado que** algum campo obrigatório não foi preenchido, **quando** o administrador tentar cadastrar o ponto, **então** o sistema deve impedir o cadastro e informar os campos que precisam ser preenchidos.

**Issue:** `#17`

### US-08 — Editar ponto de coleta

Como **administrador**, quero **editar os dados de um ponto de coleta**, para **manter suas informações atualizadas**.

**Requisitos relacionados:** `RF-08`

**Critérios de aceitação:**

1. **Dado que** o administrador está autenticado e existe um ponto cadastrado, **quando** alterar seus dados e salvar, **então** o sistema deve atualizar as informações do ponto.

2. **Dado que** os dados obrigatórios não foram preenchidos corretamente, **quando** o administrador tentar salvar a alteração, **então** o sistema deve impedir a atualização.

**Issue:** `#18`

### US-09 — Desativar ponto de coleta

Como **administrador**, quero **desativar um ponto de coleta**, para **evitar que usuários consultem um ponto que não está mais disponível**.

**Requisitos relacionados:** `RF-09`, `RN-02`

**Critérios de aceitação:**

1. **Dado que** o administrador está autenticado e existe um ponto ativo, **quando** confirmar sua desativação, **então** o sistema deve alterar o status do ponto para desativado.

2. **Dado que** um ponto está desativado, **quando** um usuário consultar os pontos disponíveis, **então** o ponto não deve ser apresentado como disponível.

**Issue:** `#19`

### US-10 — Gerenciar materiais aceitos

Como **administrador**, quero **cadastrar, editar e remover materiais associados aos pontos de coleta**, para **manter atualizadas as informações sobre os resíduos recebidos**.

**Requisitos relacionados:** `RF-10`, `RN-04`

**Critérios de aceitação:**

1. **Dado que** o administrador está autenticado, **quando** cadastrar um material e associá-lo a um ponto, **então** o sistema deve disponibilizar o material para consulta nesse ponto.

2. **Dado que** um material está associado a um ponto, **quando** o administrador removê-lo, **então** o material não deve mais ser apresentado como aceito naquele ponto.

**Issue:** `#20`

### US-11 — Gerenciar horários

Como **administrador**, quero **cadastrar, editar e remover os horários de funcionamento dos pontos**, para **manter os horários disponíveis aos usuários atualizados**.

**Requisitos relacionados:** `RF-11`, `RN-05`

**Critérios de aceitação:**

1. **Dado que** o administrador está autenticado, **quando** cadastrar ou alterar o horário de um ponto, **então** o sistema deve salvar a informação associada ao respectivo ponto.

2. **Dado que** um horário foi removido, **quando** o usuário consultar o ponto, **então** o horário removido não deve ser apresentado.

**Issue:** `#21`

### US-12 — Gerenciar condições de entrega

Como **administrador**, quero **cadastrar, editar e remover as condições de entrega dos pontos**, para **manter as orientações de descarte atualizadas**.

**Requisitos relacionados:** `RF-12`, `RN-05`

**Critérios de aceitação:**

1. **Dado que** o administrador está autenticado, **quando** cadastrar ou alterar uma condição de entrega, **então** o sistema deve salvar a informação associada ao respectivo ponto.

2. **Dado que** uma condição foi removida, **quando** o usuário consultar o ponto, **então** a condição removida não deve ser apresentada.

**Issue:** `#22`

## 7. Fora do escopo

| Item | Motivo | Possível trabalho futuro |
|---|---|---|
| Aplicativo mobile nativo | A Sprint 2 está concentrada no desenvolvimento da aplicação web. | Desenvolvimento de versões para Android e iOS. |
| Cadastro de usuários comuns | O usuário poderá consultar as informações dos pontos de coleta sem necessidade de cadastro. | Criar contas de usuários para funcionalidades personalizadas. |
| Sistema de coleta domiciliar | O projeto tem como foco a consulta e divulgação de pontos de coleta. | Implementar solicitação de coleta em endereço residencial. |
| Notificações aos usuários | Não é necessário para o funcionamento inicial das funcionalidades definidas. | Implementar notificações sobre alterações nos pontos ou campanhas de coleta. |
| Integração com órgãos públicos | A integração com sistemas externos não faz parte do escopo inicial. | Integrar o sistema com bases de dados ou serviços públicos relacionados ao descarte de resíduos. |
| Sistema de avaliação dos pontos | A avaliação dos pontos não está entre as funcionalidades prioritárias do projeto. | Permitir avaliações e comentários sobre os pontos de coleta. |

## 8. Histórico de alterações

| Sprint | Requisito alterado | Alteração | Motivo | Issue/commit |
|---|---|---|---|---|
| Sprint 2 | `RF-01` a `RF-05` | Foram especificados os requisitos funcionais correspondentes às histórias de usuário existentes no Product Backlog. | Transformar as funcionalidades inicialmente descritas no backlog em requisitos verificáveis. | `US-01` a `US-05` / `[commit]` |
| Sprint 2 | `RF-06` a `RF-12` | Foram adicionados requisitos funcionais relacionados às funcionalidades administrativas. | Definir as funcionalidades necessárias para o gerenciamento dos pontos de coleta pelo administrador. | `US-06` a `US-12` / `[commit]` |
| Sprint 2 | `RN-01` a `RN-05` | Foram adicionadas regras de negócio relacionadas ao acesso administrativo e ao gerenciamento dos pontos de coleta. | Estabelecer condições que deverão ser respeitadas pelo sistema. | `[commit]` |
| Sprint 2 | `RNF-01` a `RNF-06` | Foram adicionados requisitos não funcionais relacionados à qualidade e às restrições da aplicação. | Definir características verificáveis que a aplicação deverá atender. | `[commit]` |
