# Visão geral do produto


## 1. Problema escolhido

**Título:** Coleta de lixo eletrônico em Lavras

**Descrição concreta:**
O município de Lavras gera resíduos de equipamentos eletroeletrônicos que precisam ser destinados de forma adequada após o fim de sua utilização. Moradores, estabelecimentos e instituições que possuem esses materiais precisam identificar onde podem realizar o descarte e quais tipos de resíduos são recebidos em cada local. Quando essas informações não estão disponíveis de forma clara e acessível, o descarte adequado se torna mais difícil, podendo contribuir para a destinação incorreta dos resíduos e para impactos ambientais.

**Evidências ou exemplos do problema:**
- Em junho de 2026, uma fiscalização ambiental em Lavras identificou resíduos eletroeletrônicos armazenados em condições irregulares em uma central de reciclagem, resultando na suspensão parcial das atividades relacionadas ao recebimento e armazenamento desses resíduos.
- Muitas cooperativas de catadores locais não possuem o licenciamento ambiental ou o maquinário adequado para processar certos componentes eletrônicos (como baterias de lítio e placas-mãe). Sem um sistema que direcione o morador exatamente para os locais corretos que aceitam esse tipo específico de material, ocorre a contaminação de lotes de reciclagem comum.

## 2. Público e stakeholders

| Stakeholder | Necessidade/interesse | Como será envolvido ou representado |
|---|---|---|
| Cidadão | Necessita de informações claras, centralizadas e de fácil acesso sobre locais (ecopontos ou cooperativas) para descartar lixo eletrônico, evitando o acúmulo em casa ou o descarte em lixo comum. | Será o usuário final da aplicação web. Poderá acessar o sistema para buscar pontos de coleta, consultar horários de funcionamento, ver a localização no mapa e verificar quais itens cada local aceita. |
| Empresa/entidade coletora autorizada | Necessita de informações e mecanismos para cadastrar e manter atualizados os pontos de coleta, horários de funcionamento, localização e tipos de resíduos eletrônicos aceitos. | Será representada como responsável pelo gerenciamento das informações dos pontos de coleta sob sua responsabilidade, garantindo que os dados disponibilizados aos cidadãos estejam atualizados e corretos. |

## 3. Visão do produto

**Nome da solução:** Coleta+

**Proposta de valor:** Para os cidadãos de Lavras que têm dificuldades em encontrar locais adequados para descartar lixo eletrônico, promove o descarte ecologicamente correto.

**Objetivo geral:** Facilitar e incentivar o descarte correto de resíduos eletroeletrônicos no município de Lavras, conectando a população a ecopontos e cooperativas locais por meio de uma plataforma web de acesso público e transparente.

**Objetivos específicos:**
- Mapear e exibir os pontos de coleta, cooperativas e campanhas de recolhimento de lixo eletrônico disponíveis na cidade.
- Fornecer informações atualizadas e detalhadas sobre cada local de coleta, incluindo endereço, horários de funcionamento e a lista exata de materiais aceitos.
- Identificar o ponto de coleta mais próximo do usuário.

## 4. Escopo inicial

### Dentro do escopo
- Consulta de pontos de coleta de lixo eletrônico em Lavras.
- Consulta dos tipos de materiais aceitos em cada ponto de coleta.
- Consulta de informações sobre horários e condições de entrega.
- Cadastro e manutenção das informações dos pontos de coleta.
- Organização das informações dos pontos de coleta em uma plataforma web.

### Fora do escopo
- Coleta física e transporte dos resíduos eletrônicos.
- Processo de reciclagem ou tratamento dos materiais.
- Atendimento e gerenciamento de resíduos de outros tipos além do lixo eletrônico.
- Gestão financeira dos pontos de coleta.
- Atendimento a outras cidades além de Lavras.

## 5. Restrições e premissas

| Tipo | Item | Impacto no projeto |
|---|---|---|
| Restrição | O desenvolvimento será realizado dentro do prazo definido para as oito sprints da disciplina. | Funcionalidades e entregas deverão ser priorizadas de acordo com o tempo disponível. |
| Restrição | A solução deverá ser desenvolvida como uma aplicação web e mantida em repositório próprio no GitHub. | As decisões técnicas deverão considerar o funcionamento em ambiente web e a utilização do GitHub durante todo o projeto. |
| Restrição | O sistema terá como foco inicial o município de Lavras. | As informações e funcionalidades da primeira versão serão direcionadas à realidade e aos pontos de coleta existentes no município. |
| Premissa | Existirão informações suficientes sobre pontos de coleta e materiais aceitos para alimentar inicialmente o sistema. | Será possível construir uma base inicial de pontos e informações para disponibilização na aplicação. |

## 6. Diferenciais da solução

A solução se diferencia por centralizar informações sobre os pontos de coleta de lixo eletrônico de Lavras, permitindo que o usuário consulte os materiais recebidos, horários e condições de entrega em cada local. Além do cadastro dos pontos, a aplicação estará voltada à consulta e organização dessas informações de acordo com as necessidades do descarte de resíduos eletrônicos. Dessa forma, o sistema busca facilitar o acesso da população aos locais adequados para descarte, em vez de funcionar apenas como um sistema genérico de cadastro.

## 7. Histórico de mudanças

| Data/sprint | Mudança | Motivo | Issue/decisão relacionada |
|---|---|---|---|
| Sprint 1 | Criação da visão inicial | Início do projeto | #D-01 |
