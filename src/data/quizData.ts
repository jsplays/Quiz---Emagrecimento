import { QuizQuestionData, SmartSubstitution, WhatsAppConversation } from '../types/quiz';

export const QUIZ_QUESTIONS: QuizQuestionData[] = [
  {
    id: 1,
    category: 'Foco Principal',
    title: 'Qual é o seu principal objetivo para este Verão?',
    options: [
      {
        id: 'desinchar',
        label: 'Desinchar a região abdominal e sentir o corpo mais leve',
        subtext: 'Sensação de abdômen plano e alívio imediato da retenção hídrica',
      },
      {
        id: 'habitos',
        label: 'Adotar hábitos mais saudáveis e melhorar minha alimentação',
        subtext: 'Mais energia, vitalidade e disposição contínua na rotina',
      },
      {
        id: 'autoestima',
        label: 'Retomar a consistência e recuperar minha autoestima',
        subtext: 'Segurança para vestir as roupas que você gosta sem desconforto',
      },
      {
        id: 'sem_dieta',
        label: 'Aprender a comer bem sem precisar de dietas malucas',
        subtext: 'Comida de verdade, sem passar fome e sem restrições severas',
      },
    ],
  },
  {
    id: 2,
    category: 'Percepção Corporal',
    title: 'Como você percebe seu corpo no final do dia?',
    options: [
      {
        id: 'barriga_inchada',
        label: 'Sinto um inchaço frequente na barriga ao longo do dia',
        subtext: 'Acordo bem, mas à tarde as roupas começam a apertar',
      },
      {
        id: 'pernas_corpo',
        label: 'Sinto peso e retenção nas pernas e no corpo no fim do dia',
        subtext: 'Sensação generalizada de peso e membros cansados',
      },
      {
        id: 'fim_de_semana',
        label: 'Fico estufada principalmente quando exagero no fim de semana',
        subtext: 'Dificuldade para restabelecer o equilíbrio na segunda-feira',
      },
      {
        id: 'raro',
        label: 'Raramente sinto inchaço significativo',
        subtext: 'Meu foco prioritário é a organização prática e constância',
      },
    ],
  },
  {
    id: 3,
    category: 'Fase de Rotina',
    title: 'Qual é a sua faixa etária? (Usado para entender sua fase de rotina)',
    options: [
      { id: '18-25', label: '18 a 25 anos', subtext: 'Rotina acelerada entre estudos ou início profissional' },
      { id: '26-35', label: '26 a 35 anos', subtext: 'Equilíbrio entre trabalho, família e saúde diária' },
      { id: '36-45', label: '36 a 45 anos', subtext: 'Metabolismo demandando mais nutrientes e menos privação' },
      { id: '46+', label: '46 anos ou mais', subtext: 'Foco em digestão leve, preservação muscular e vitalidade' },
    ],
  },
  {
    id: 4,
    category: 'Desafios Diários',
    title: 'Qual costuma ser a sua maior dificuldade no dia a dia?',
    options: [
      {
        id: 'doces',
        label: 'Vontade frequente de comer doces à tarde ou à noite',
        subtext: 'Picos de vontade de açúcar após as refeições principais',
      },
      {
        id: 'ansiedade',
        label: 'Ansiedade e estresse que me levam a descontar na comida',
        subtext: 'Alimentação motivada pelo cansaço emocional',
      },
      {
        id: 'fim_de_semana_foco',
        label: 'Manter o foco durante o final de semana',
        subtext: 'Boa adesão de segunda a sexta, mas perda de ritmo no sábado e domingo',
      },
      {
        id: 'falta_tempo',
        label: 'Falta de tempo para preparar refeições elaboradas',
        subtext: 'Sensação de que cozinhar de forma saudável exige horas na cozinha',
      },
    ],
  },
  {
    id: 5,
    category: 'Nível de Hidratação',
    title: 'Qual a sua média de consumo de água por dia?',
    options: [
      {
        id: 'menos_1l',
        label: 'Menos de 1 litro por dia',
        subtext: 'Esquecimento frequente ou consumo apenas quando há sede intensa',
      },
      {
        id: '1_a_2l',
        label: 'Entre 1 e 2 litros por dia',
        subtext: 'Consumo moderado, com potencial para otimizar a drenagem natural',
      },
      {
        id: 'mais_2l',
        label: 'Mais de 2 litros por dia',
        subtext: 'Hábito de hidratação bem estabelecido ao longo do dia',
      },
    ],
  },
  {
    id: 6,
    category: 'Histórico & Experiência',
    title: 'Qual foi sua experiência com dietas restritivas no passado?',
    options: [
      {
        id: 'fome_radicais',
        label: 'Passei fome em dietas radicais e acabei desistindo',
        subtext: 'Cardápios monótonos geraram frustração e efeito rebote',
      },
      {
        id: 'falta_habito',
        label: 'Já tentei algumas coisas, mas não consegui manter o hábito',
        subtext: 'Ausência de um método flexível e aplicável à vida real',
      },
      {
        id: 'primeira_vez',
        label: 'É a primeira vez que procuro um passo a passo prático',
        subtext: 'Busco começar com orientações seguras e sem extremismos',
      },
    ],
  },
  {
    id: 7,
    category: 'Tempo para Cozinha',
    title: 'Quanto tempo você pode dedicar para preparar suas refeições?',
    options: [
      {
        id: '15min',
        label: 'Preciso de opções ultra rápidas (até 15 minutos)',
        subtext: 'Preparações práticas de frigideira e montagens funcionais',
      },
      {
        id: '30min',
        label: 'Tenho cerca de 30 minutos por dia',
        subtext: 'Preparo diário simplificado com ingredientes naturais',
      },
      {
        id: 'marmitas',
        label: 'Prefiro me organizar no final de semana (marmitas)',
        subtext: 'Planejamento antecipado em lote para ter tranquilidade na semana',
      },
    ],
  },
  {
    id: 8,
    category: 'Compromisso com Você',
    title: 'Você está disposta a seguir um roteiro prático de 42 dias focado em comida de verdade e organização?',
    options: [
      {
        id: 'sim_fogo',
        label: 'Sim! Quero criar hábitos melhores para o Verão',
        subtext: 'Disposição total para implementar ajustes progressivos e desinchar',
      },
      {
        id: 'sim_simples',
        label: 'Sim, desde que seja algo simples e que caiba no meu bolso',
        subtext: 'Prioridade para acessibilidade, clareza e praticidade',
      },
    ],
  },
];

export const SMART_SUBSTITUTIONS_SAMPLE: SmartSubstitution[] = [
  {
    original: 'Refrigerante Tradicional',
    category: 'Bebidas',
    substitute: 'Água com gás, rodelas de limão e folhas de hortelã fresca',
    benefit: 'Elimina o excesso de sódio e açúcar simples que provocam inchaço na região abdominal.',
    caloricReduction: '-140 kcal por copo',
  },
  {
    original: 'Pão Francês com Margarina',
    category: 'Café da Manhã',
    substitute: 'Ovos mexidos preparados com azeite de oliva e porção de morangos ou melão',
    benefit: 'Aumenta a saciedade matinal e estabiliza a glicemia, reduzindo a retenção hídrica.',
    caloricReduction: '-160 kcal + 14g de proteínas limpas',
  },
  {
    original: 'Molhos Prontos Industrializados',
    category: 'Almoço e Jantar',
    substitute: 'Vinagrete de limão tahiti, azeite extra virgem, mostarda dijon e orégano',
    benefit: 'Reduz significativamente a carga de conservantes e sódio retentor.',
    caloricReduction: '-75% de sódio retentor',
  },
  {
    original: 'Chocolate ao Leite após o Almoço',
    category: 'Doces e Sobremesas',
    substitute: 'Mousse de cacau fit (Iogurte natural, cacau 100% e gotas de stévia)',
    benefit: 'Atende à vontade de doce com cremosidade e fibras sem causar sensação de peso.',
    caloricReduction: 'Zero açúcar refinado',
  },
  {
    original: 'Biscoitos Recheados ou Salgadinhos',
    category: 'Lanches Intermediários',
    substitute: 'Mix de castanhas com lascas de coco seco e sementes de abóbora',
    benefit: 'Gorduras boas e minerais como magnésio e potássio que combatem o inchaço.',
    caloricReduction: 'Rico em potássio anti-retenção',
  },
  {
    original: 'Arroz Branco com Farofa no Jantar',
    category: 'Jantar Leve',
    substitute: 'Arroz de couve-flor salteado com alho ou purê rústico de abóbora cabotiá',
    benefit: 'Digestão mais leve no período noturno para acordar com o abdômen descansado.',
    caloricReduction: '-65% de carboidratos densos',
  },
];

// Exact WhatsApp testimonials from user images
export const WHATSAPP_CONVERSATIONS: WhatsAppConversation[] = [
  {
    id: 'paula_portal',
    contactName: 'Paula',
    tag: 'Acesso pelo Celular',
    summary: 'Surpresa positiva com o Portal de Mini-Apps interativo',
    messages: [
      { id: '1', sender: 'user', text: 'Oii!!', time: '15:49' },
      { id: '2', sender: 'user', text: 'Menina do céu kkkk', time: '15:54' },
      { id: '3', sender: 'user', text: 'Eu achei q ia receber só um pdfzinho de 19,90', time: '15:58' },
      { id: '4', sender: 'user', text: 'Mds vcs entregaram um PORTAL com os sites tudinho?? 😱', time: '16:00' },
      { id: '5', sender: 'team', text: 'Oii amor! Hahaha simm!', time: '16:04' },
      { id: '6', sender: 'team', text: 'A gente montou tudo em mini sites interativos pra ficar bem facinho de mexer pelo celular ❤️', time: '16:07' },
      { id: '7', sender: 'team', text: 'Deu certo pra abrir os links aí?', time: '16:09' },
      { id: '8', sender: 'user', text: 'Deu superrr!', time: '16:11' },
      { id: '9', sender: 'user', text: 'Salvou minha vida pq odeio ficar baixando arquivo e lotando a memória do cel kkkk', time: '16:12' },
      { id: '10', sender: 'user', text: 'To navegando aqui ja, mto chique ✨', time: '16:13' },
    ],
  },
  {
    id: 'mari_biquini',
    contactName: 'Mariana · Dia 15',
    tag: 'Evolução e Desinchaço',
    summary: 'Biquíni do ano passado serviu sem marcar as costas',
    messages: [
      { id: '1', sender: 'user', text: 'Menina do céu 😭❤️', time: '18:58' },
      { id: '2', sender: 'user', text: 'Provei meu biquíni hoje', time: '19:01' },
      { id: '3', sender: 'user', text: 'Aquele q comprei ano passado e ficou apertado nas costas', time: '19:04' },
      { id: '4', sender: 'team', text: 'MENTIRAA!! E como ficou?? 👀', time: '19:07' },
      { id: '5', sender: 'user', text: 'Serviu perfeitamente kkkk', time: '19:12' },
      { id: '6', sender: 'user', text: 'A gordurinha das costas nem marcou nada!', time: '19:13' },
      { id: '7', sender: 'user', text: 'Tô chocada, tô no dia 15 ainda', time: '19:14' },
      { id: '8', sender: 'team', text: 'Que conquista maravilhosa!! O corpo desincha demais quando ajusta a alimentação 🔥', time: '19:15' },
      { id: '9', sender: 'user', text: 'Tô radiante de verdade kkkk obrigada!!', time: '19:18', reaction: '❤️' },
    ],
  },
  {
    id: 'camila_sobremesa',
    contactName: 'Camila · Doces Fit',
    tag: 'Receitas de Doces Fit',
    summary: 'Sobremesa de morango sem açúcar aprovada no fim de semana',
    messages: [
      { id: '1', sender: 'user', text: 'Oii gata!', time: '20:06' },
      { id: '2', sender: 'user', text: 'Fiz aquela sobremesa fit do portal pro fim de semana kkkk', time: '20:07' },
      { id: '3', sender: 'user', text: 'Meu namorado comeu e nem percebeu q era sem açúcar', time: '20:10' },
      { id: '4', sender: 'team', text: 'Hahaha mentira! Qual você fez?', time: '20:12' },
      { id: '5', sender: 'user', text: 'O mousse de morango fit!!', time: '20:16' },
      { id: '6', sender: 'user', text: 'Ficou mto bom, ele achou q era comprado no mercado kkkk', time: '20:17' },
      { id: '7', sender: 'team', text: 'Kkkkk as receitas do bônus salvam mto a vontade de doce! ❤️', time: '20:19' },
      { id: '8', sender: 'user', text: 'Demais, comi sem peso na consciência 🥰', time: '20:21', reaction: '❤️' },
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Como e quando recebo meu acesso após o pagamento?',
    answer: 'Imediatamente. Assim que a transação for confirmada pelo sistema bancário, você recebe os dados de acesso direto no seu e-mail e pelo WhatsApp para entrar na área exclusiva do Protocolo Verão 42.',
  },
  {
    question: 'Preciso comprar ingredientes caros ou suplementos exóticos?',
    answer: 'Não. Todas as diretrizes baseiam-se em comida de verdade e acessível, encontrada em qualquer supermercado ou feira de bairro, sem necessidade de cápsulas ou produtos especiais.',
  },
  {
    question: 'Serve para quem tem rotina corrida e pouco tempo?',
    answer: 'Sim. As sugestões foram estruturadas para quem precisa de praticidade, com opções de preparo em até 15 minutos e estratégias organizacionais do Guia Marmita Fit.',
  },
  {
    question: 'Como funciona a Garantia de 7 dias?',
    answer: 'Você pode testar todo o material durante 7 dias corridos. Se por qualquer motivo sentir que o método não atendeu às suas expectativas, basta solicitar o estorno para receber 100% do valor de volta, sem burocracia.',
  },
  {
    question: 'O valor de R$ 19,90 é pagamento único ou mensalidade?',
    answer: 'Trata-se de um pagamento único de R$ 19,90. Não existem cobranças adicionais, anuidades ou assinaturas recorrentes.',
  },
];
