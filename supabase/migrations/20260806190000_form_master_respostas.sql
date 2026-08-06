-- Respostas do Formulário Master (/form-master do site).
--
-- Modelo: colunas tipadas para o que se filtra + `respostas` em jsonb com as
-- 93 perguntas inteiras. Acrescentar ou reordenar pergunta no formulário não
-- exige migration nenhuma — só a view abaixo precisa ser regerada se você
-- quiser a pergunta nova como coluna.
--
-- A tabela é escrita pelo servidor do site com a chave service_role, que
-- ignora RLS. RLS fica LIGADA e sem policy: assim a chave anon (e qualquer
-- visitante) não lê nem escreve nada aqui.

create table if not exists public.form_master_respostas (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),

  -- Espelho tipado das respostas que se filtra em relatório.
  nome         text not null,
  email        text,
  whatsapp     text,
  cidade       text,
  empresa      text,
  cargo        text,
  segmento     text,
  faturamento  text,
  funcionarios text,
  nps          smallint,

  -- Todas as 93 respostas, com a pergunta como chave.
  respostas    jsonb not null default '{}'::jsonb,

  -- Rastro do envio.
  clickup_url  text,
  clickup_modo text,
  origem       text,
  user_agent   text
);

comment on table public.form_master_respostas is
  'Uma linha por envio do Formulário Master. Fonte da verdade das respostas; o ClickUp é a cópia operacional.';

create index if not exists form_master_respostas_created_at_idx
  on public.form_master_respostas (created_at desc);
create index if not exists form_master_respostas_email_idx
  on public.form_master_respostas (lower(email));
create index if not exists form_master_respostas_respostas_idx
  on public.form_master_respostas using gin (respostas);

alter table public.form_master_respostas enable row level security;

-- View plana: as 93 perguntas como colunas nomeadas, para exportar ou abrir
-- em planilha sem precisar mexer com jsonb. Gerada a partir de fields.ts.
--
-- `security_invoker = on` NÃO é opcional: sem ele a view roda com os
-- privilégios de quem a criou e passa por cima da RLS da tabela — verificado
-- em 2026-08-06, a chave anon lia todas as respostas por aqui.
create or replace view public.form_master_respostas_plana
with (security_invoker = on) as
select
  id,
  created_at,
  respostas->>'01. Nome completo' as nome_completo,
  respostas->>'02. Como prefere ser chamado' as como_prefere_ser_chamado,
  respostas->>'03. WhatsApp' as whatsapp,
  respostas->>'04. E-mail' as e_mail,
  respostas->>'05. Data de nascimento' as data_de_nascimento,
  respostas->>'06. Cidade onde mora' as cidade_onde_mora,
  respostas->>'07. Instagram' as instagram,
  respostas->>'08. LinkedIn' as linkedin,
  respostas->>'09. Estado civil' as estado_civil,
  respostas->>'10. Filhos' as filhos,
  respostas->>'11. Profissão ou cargo atual' as profissao_ou_cargo_atual,
  respostas->>'12. Você é' as voce_e,
  respostas->>'13. Há quanto tempo empreende' as ha_quanto_tempo_empreende,
  respostas->>'14. Quantidade de empresas' as quantidade_de_empresas,
  respostas->>'15. Participa de outras comunidades' as participa_de_outras_comunidades,
  respostas->>'16. Quais comunidades' as quais_comunidades,
  respostas->>'17. O que mais valoriza nessas comunidades' as o_que_mais_valoriza_nessas_comunidades,
  respostas->>'18. Nome da empresa principal' as nome_da_empresa_principal,
  respostas->>'19. Site da empresa' as site_da_empresa,
  respostas->>'20. Instagram da empresa' as instagram_da_empresa,
  respostas->>'21. LinkedIn da empresa' as linkedin_da_empresa,
  respostas->>'22. Segmento principal' as segmento_principal,
  respostas->>'23. Subsegmento ou nicho' as subsegmento_ou_nicho,
  respostas->>'24. Descrição da empresa em uma frase' as descricao_da_empresa_em_uma_frase,
  respostas->>'25. Principal produto ou serviço' as principal_produto_ou_servico,
  respostas->>'26. Principal cliente da empresa' as principal_cliente_da_empresa,
  respostas->>'27. Perfil do cliente ideal' as perfil_do_cliente_ideal,
  respostas->>'28. Principal diferencial da empresa' as principal_diferencial_da_empresa,
  respostas->>'29. Principal concorrente ou referência' as principal_concorrente_ou_referencia,
  respostas->>'30. Quantidade de funcionários' as quantidade_de_funcionarios,
  respostas->>'31. Faixa de faturamento anual' as faixa_de_faturamento_anual,
  respostas->>'32. Momento da empresa' as momento_da_empresa,
  respostas->>'33. Principal indicador acompanhado' as principal_indicador_acompanhado,
  respostas->>'34. Principal meta empresarial do ano' as principal_meta_empresarial_do_ano,
  respostas->>'35. Maior desafio da empresa hoje' as maior_desafio_da_empresa_hoje,
  respostas->>'36. Maior desafio pessoal como líder' as maior_desafio_pessoal_como_lider,
  respostas->>'37. Único problema a resolver em 90 dias' as unico_problema_a_resolver_em_90_dias,
  respostas->>'38. O que impede resolver isso hoje' as o_que_impede_resolver_isso_hoje,
  respostas->>'39. Área que mais precisa de evolução' as area_que_mais_precisa_de_evolucao,
  respostas->>'40. Objetivo para os próximos 90 dias' as objetivo_para_os_proximos_90_dias,
  respostas->>'41. Objetivo para os próximos 12 meses' as objetivo_para_os_proximos_12_meses,
  respostas->>'42. Maior objetivo da empresa em 3 anos' as maior_objetivo_da_empresa_em_3_anos,
  respostas->>'43. O que torna este ano excepcional' as o_que_torna_este_ano_excepcional,
  respostas->>'44. Onde perde mais dinheiro' as onde_perde_mais_dinheiro,
  respostas->>'45. Onde perde mais tempo' as onde_perde_mais_tempo,
  respostas->>'46. Processo que mais incomoda' as processo_que_mais_incomoda,
  respostas->>'47. Decisão importante sendo adiada' as decisao_importante_sendo_adiada,
  respostas->>'48. O que gostaria de delegar' as o_que_gostaria_de_delegar,
  respostas->>'49. Habilidade a desenvolver' as habilidade_a_desenvolver,
  respostas->>'50. Nota área comercial' as nota_area_comercial,
  respostas->>'51. Principal desafio comercial' as principal_desafio_comercial,
  respostas->>'52. Buscando novos clientes' as buscando_novos_clientes,
  respostas->>'53. Tipo de cliente que gostaria de conquistar' as tipo_de_cliente_que_gostaria_de_conquistar,
  respostas->>'54. Segmentos que gostaria de acessar' as segmentos_que_gostaria_de_acessar,
  respostas->>'55. Regiões que gostaria de acessar' as regioes_que_gostaria_de_acessar,
  respostas->>'56. Quem gostaria de conhecer no Club' as quem_gostaria_de_conhecer_no_club,
  respostas->>'57. Segmentos que gostaria de conhecer' as segmentos_que_gostaria_de_conhecer,
  respostas->>'58. Empresas que gostaria de acessar' as empresas_que_gostaria_de_acessar,
  respostas->>'59. Pessoa específica que gostaria de conhecer' as pessoa_especifica_que_gostaria_de_conhecer,
  respostas->>'60. Tipo de parceria procurando' as tipo_de_parceria_procurando,
  respostas->>'61. O que pode oferecer aos demais membros' as o_que_pode_oferecer_aos_demais_membros,
  respostas->>'62. Assuntos para compartilhar conhecimento' as assuntos_para_compartilhar_conhecimento,
  respostas->>'63. Interesse em' as interesse_em,
  respostas->>'64. Case ou resultado para compartilhar' as case_ou_resultado_para_compartilhar,
  respostas->>'65. Temas de interesse' as temas_de_interesse,
  respostas->>'66. Assuntos que gostaria de aprender' as assuntos_que_gostaria_de_aprender,
  respostas->>'67. Por que decidiu entrar no Digital Club' as por_que_decidiu_entrar_no_digital_club,
  respostas->>'68. O que espera encontrar aqui' as o_que_espera_encontrar_aqui,
  respostas->>'69. O que tornaria a experiência excepcional' as o_que_tornaria_a_experiencia_excepcional,
  respostas->>'70. O que faria dizer que gerou mais valor que o esperado' as o_que_faria_dizer_que_gerou_mais_valor_que_o_esperado,
  respostas->>'71. Tipo de experiência mais valorizada' as tipo_de_experiencia_mais_valorizada,
  respostas->>'72. Frequência de participação' as frequencia_de_participacao,
  respostas->>'73. Melhor período' as melhor_periodo,
  respostas->>'74. Melhor dia' as melhor_dia,
  respostas->>'75. Como prefere ser acompanhado' as como_prefere_ser_acompanhado,
  respostas->>'76. Frequência de contato individual' as frequencia_de_contato_individual,
  respostas->>'77. Nota contribuição para objetivos' as nota_contribuicao_para_objetivos,
  respostas->>'78. Nota disposição de participação' as nota_disposicao_de_participacao,
  respostas->>'79. O que espera receber do Club' as o_que_espera_receber_do_club,
  respostas->>'80. O que espera entregar ao Club' as o_que_espera_entregar_ao_club,
  respostas->>'81. O que precisa acontecer em 12 meses para ser sucesso' as o_que_precisa_acontecer_em_12_meses_para_ser_sucesso,
  respostas->>'82. Resultados desejados via Club' as resultados_desejados_via_club,
  respostas->>'83. Valor de oportunidade ideal' as valor_de_oportunidade_ideal,
  respostas->>'84. NPS' as nps,
  respostas->>'85. O que faria dar nota maior' as o_que_faria_dar_nota_maior,
  respostas->>'86. O que não gostaria que acontecesse' as o_que_nao_gostaria_que_acontecesse,
  respostas->>'87. Maior problema tentando resolver' as maior_problema_tentando_resolver,
  respostas->>'88. Maior oportunidade tentando aproveitar' as maior_oportunidade_tentando_aproveitar,
  respostas->>'89. Quem gostaria muito de conhecer' as quem_gostaria_muito_de_conhecer,
  respostas->>'90. O que pode oferecer para outros membros' as o_que_pode_oferecer_para_outros_membros,
  respostas->>'91. O que precisa acontecer para ser sucesso' as o_que_precisa_acontecer_para_ser_sucesso,
  respostas->>'92. Uma coisa nos próximos 30 dias' as uma_coisa_nos_proximos_30_dias,
  respostas->>'93. Assunto que colocaria na mesa com os principais empresários' as assunto_que_colocaria_na_mesa_com_os_principais_empresarios
from public.form_master_respostas;
