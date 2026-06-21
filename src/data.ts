import { Message, Memory, TriviaQuestion, Quality } from './types';

export const INITIAL_MESSAGES: Message[] = [
  {
    id: 'msg-rafaella',
    author: 'Rafaella',
    age: '12 años',
    relation: 'Hija Adoptiva',
    text: 'Por tu amor incondicional, por tu esfuerzo de cada día, por tu apoyo constante y por convertirte en mi ejemplo a seguir… gracias. Puede que no nos una la sangre, pero nos une algo mucho más fuerte: los años, los momentos, tu dedicación y todo el amor que me has entregado desde que tenía 6 años. Gracias por hacerte cargo de mí, por estar en cada paso, por enseñarme, cuidarme y nunca soltarme. Gracias por cada consejo que me ha guiado, por cada abrazo en los momentos difíciles y por cada aventura que hemos vivido juntas. Eres la persona que eligió quedarse, que eligió amar, y eso vale más que cualquier lazo biológico. Te quiero profundamente, porque ser papá no es solo dar la vida… es estar, y tú siempre has estado conmigo.',
    heartCount: 48,
    isCustom: false,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZukyUSS3ue6B_fzWQal1KkbblD217tRnHCwjKKR_c7cMeu8UDGixBpi1uuSM9_TxGyklAJnSEsk0tQFp7WdAOEU45cF6Uh6QvCcnx3ulkgdik82j2cdrVZmBHMtz7bZS8DXCzIk2NhyYYVcmUgVx9Y1VU8N2p1ZLXdhhCORWxV18AFhReASd3cfxC9MltE5vXLxQHUmAgj-On2_GdwhFIuM94tX4bkEn_5Zc5KQRxkRjwPz8ucz2TRn5zCpb_p7mOtEVTnbT-mCU',
    visualTheme: 'classic',
    sticker: 'heart',
    timestamp: '2026-06-20T10:30:00Z'
  },
  {
    id: 'msg-francisca',
    author: 'Francisca',
    age: '8 años',
    relation: 'Hija Biológica',
    text: 'Por tu amor incondicional, su fortaleza y su entrega infinita. Por ser el hombre que me dio la vida y, día a día, me enseñó a vivirla con valores, respeto y amor. Gracias por ser mi refugio en los momentos difíciles y mi impulso en cada logro. Por tus consejos, tu ejemplo y cada sacrificio silencioso que hiciste por mí. No solo eres mi padre… eres mi guía, mi protector y una de las razones más grandes de lo que soy hoy. Te amo profundamente y siempre estaré orgullosa de ser tu hija.',
    heartCount: 39,
    isCustom: false,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOOCo_H0pQJFwgre9oO1ub8xazIRAVFv5xaNnSoj2UePiKgmvyigScpb9PNPpZmpNZLLY_i8JwrhAgvLhncIPnU7DfOZ1vNZWcZPBx0AUYAjO7WVdeXOtwB227h_mUGJpdmsxWxhlASAEkbJjPVjGIGIm8y5gb5NAqP5qROCKY9KZwJBv32xUcPwO5scBdhZur2KASD9TxnjokrGIilvz7cBgwOXlnPGqZZ7LAWJfagwwgf6MoMr03rvHXVgEq_5Zu6e5axVU5JcY',
    visualTheme: 'pastel',
    sticker: 'crown',
    timestamp: '2026-06-20T10:45:00Z'
  }
];

export const INITIAL_MEMORIES: Memory[] = [
  {
    id: 'mem-1',
    title: 'Esteban, el mejor del mundo',
    category: 'Momentos Diarios',
    description: 'Nuestra foto preferida celebrando juntos en familia, compartiendo risas sinceras y malteadas deliciosas en el café local.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2xadyA6nmU-PjI2Ui_iYJ2p9EZ1eQmuh_Y9Y-9a6_kRQrtHCrKuWdmZ8QVgX4PsDu5yePAxXAH33wkebdJhHoVU4VEHeHlB2Xwt9WWSQ_TqQ3ZxC_jANNgb4m3W9Mv56x60eJ4M4_-lJhVOVnWA5QHNyba0DzU6L7f8D-VCYo7uYC9mmaja7ktDLbdDO0slbnuuyXQut6v0YjRNB3yMIgtF8Ig1bNH-qu_y0w1jhLOEUobirP_XVl_g7S3U7QV9UXMKzVHShP9Y4',
    date: 'Junio 2024',
    likeCount: 65
  },
  {
    id: 'mem-2',
    title: 'Tardes de juego inolvidables',
    category: 'Aventuras',
    description: 'En lo alto de la carretilla de madera, compartiendo momentos rodeados de árboles, naturaleza y juegos improvisados.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1ENtIhaEGhIotKwpfLcFDoiwfLHhE0a6zQ3rFkwLE7d2SjoaxFAshW337mSEAnR9G2gMtTmxQLXu85O970zprUaPnSU7pjMDPypLNVCdpfgg5hARmbvdHiNXLuBQSX-ZXlL57V2hEnJUgPDY7x9LIkweHCLpDA07spQanYa97WUpUBtFtCICN8pRmNv7pKbm4WuO1MskMl5VYkDeAs9UyTMqIEMdl5-UqtI3E_Sb_3A5LJ56gQYj2mdrqhJLaQfdS-J9dXhQUbCA',
    date: 'Otoño 2023',
    likeCount: 54
  },
  {
    id: 'mem-3',
    title: 'Disfrutando al aire libre',
    category: 'Aventuras',
    description: 'El viaje familiar por senderos campestres, un recuerdo inolvidable lleno de aire fresco, aprendizaje y alegría única junto a papá.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPyhHcLf6CYFNYQ6q0o6fL-1uhO8O9jvVMP8e5KCuvZ25xTV_NopWnZvmykf0kmpauPrjtA-m1wtAX1mAPu5JWzRI2HRPK8dkNeMBDhC7f6stXrpttvmJv2Ys7K-ILrkPhr4m3BzIrmvbG8i-TdfLZL_CH5w2oIjgoLHjOdUjt3Tmh-uamwNcb9mln-YRhmIn-k3-TOV7w_zruUMFexOlJ-eLmc1Xfn7n8Ja2E2K7vlHYxJ0R-trqBDCi08BwrTR1ZCzBMKuJ9b0k',
    date: 'Septiembre 2023',
    likeCount: 42
  },
  {
    id: 'mem-4',
    title: 'Esteban y Francisca con Pink Floyd',
    category: 'Momentos Diarios',
    description: 'La polera favorita de Esteban de Pink Floyd y la enorme sonrisa de Francisca que ilumina todo a su alrededor.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6zW4vw_IuwOGpb4nGTVr0gFgyIJMZdGGmLwbhufqxUfKZSf8MKkGf22Pa49-7tJxD9uEGrXz83aLAEfX1KKNRAL5gNOGeEgx7WkCtA9l8jfdJ6LQTgEddutyGeKzLQB70ylrazaPae4QTTfycVczM6wpy5tWt_N5Vs7RAq2rdHyQCb2t0gvX15gBhZ_lYTMyUHmfcGuRYTk40RUFuVcrjqDqNDVNtBWdeR_BDrB36LcMT7EPkiOtQmXgpqHZwqZXWr7J-tYdsDw0',
    date: 'Febrero 2024',
    likeCount: 78
  },
  {
    id: 'mem-5',
    title: 'Cómplices y Sonrientes',
    category: 'Momentos Diarios',
    description: 'Un acercamiento hermoso donde la mirada risueña de ambos refleja el lazo inquebrantable de padre e hija.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5wq64JLjs8dwezLZ7b3gcZZKGELL623yakTBi9vzTu77-1xFqnT0Cvd54TJb1Qc3v-nSCIi2f_mZcrQbZLWb6IN2qgJPKjMdkd_XBUrbIPyaVsELnaYZdqSpHH40_yMfdVqsIm5s6zLRK3oh8fR1UD-JfG76zaxUXL5XBHFS9FXvfboo09zLKxtOjFHcc7fghxrmgIW2OIpDaVuGJNg4c_FkbQNhfRpdD40K0dKv9w8g9ri2YcDSag0ZZUOFYbHEU62s6u9eYZPM',
    date: 'Mayo 2024',
    likeCount: 81
  },
  {
    id: 'mem-6',
    title: 'Historias y Cuentos antes de Dormir',
    category: 'Historias',
    description: 'Los relatos entrañables que Esteban inventa antes de dormir. Historias que Francisca y Rafaella atesoran en lo más profundo.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARMjcqLuemNZ-qubisos3QyydVx7nLjzgFdUuNr7gayuFJpS1qZmAsSgXsQMU1_lhJdZX0AVDYBH5CgrAqA6Pefoq9qu_vaL0InmtiSVboYGc8puKy-yQTtFTaWFusR07Rd-d4erOPsi8KhxIw3f9tvg-vGchzA1xOzXVhQPzHOu3sDavxikml_sx88ZS1-eH8DSYTlQU4-MKyJdRybomj_q11ma7qrX_br68rEo_Pzo68-91y9KRkzA-WhIAYaAQtBLYi1TAS430',
    date: 'Diario',
    likeCount: 49
  }
];

export const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Qué banda legendaria tiene la polera preferida de Esteban, la cual viste en muchas fotos familiares?',
    options: ['The Beatles', 'Pink Floyd', 'Queen', 'Coldplay'],
    correctAnswer: 1,
    explanation: '¡Exacto! Es Pink Floyd, con el emblemático prisma refractando luz. Esta camiseta aparece en momentos muy especiales junto a Francisca.'
  },
  {
    id: 2,
    question: '¿A qué edad llegó Rafaella a la vida de Esteban para empezar a escribir esta maravillosa historia?',
    options: ['A los 4 años', 'A los 6 años', 'A los 8 años', 'A los 10 años'],
    correctAnswer: 1,
    explanation: '¡Sí! Alrededor de los 6 años se unieron, demostrando que los lazos del corazón, la entrega y los años compartidos son mucho más fuertes que cualquier lazo biológico.'
  },
  {
    id: 3,
    question: '¿Cuáles son las hermosas hijas de Esteban representadas con tanto orgullo en esta dedicatoria?',
    options: ['Francisca (8 años) y Rafaella (12 años)', 'Francisca (10 años) y Antonia (14 años)', 'Camila (6 años) y Rafaella (10 años)', 'Sofía (8 años) y Valentina (12 años)'],
    correctAnswer: 0,
    explanation: '¡Excelente! Francisca y Rafaella son el motor de su vida, con 8 y 12 años brindando amor puro y risas al hogar.'
  },
  {
    id: 4,
    question: 'Según sus hijas, ¿cuál de los siguientes es el mayor superpoder real de su papá Esteban?',
    options: ['Volar sobre la ciudad', 'Tener súper fuerza física', 'Brindar refugio seguro, paciencia, ternura y un amor incondicional cada día', 'Hacer desaparecer los juguetes perdidos'],
    correctAnswer: 2,
    explanation: '¡Claro que sí! Su paciencia, su abrazo reconfortante y el estar presente cada día con una sonrisa cálida es el verdadero superpoder que mantiene unida a la familia.'
  }
];

export const INITIAL_QUALITIES: Quality[] = [
  {
    id: 'qual-1',
    title: 'Nuestro Protector',
    description: 'Un refugio seguro para sus hijas, siempre presente para cuidar, aconsejar y guiar con firmeza y amor.',
    quote: '"Gracias por ser mi refugio en los momentos difíciles y mi impulso en cada logro."',
    likes: 124,
    iconName: 'Shield'
  },
  {
    id: 'qual-2',
    title: 'Unión Familiar',
    description: 'El corazón que mantiene a la familia alegre y unida, valorando cada instante juntos y celebrando el cariño diario.',
    quote: '"Eres la persona que eligió quedarse, que eligió amar, y eso vale más que cualquier lazo en el mundo."',
    likes: 98,
    iconName: 'Users'
  },
  {
    id: 'qual-3',
    title: 'Paciencia Infinita',
    description: 'Incluso en las tormentas de la niñez y el crecimiento, su calma se convierte en el puerto seguro preferido de todos.',
    quote: '"...con paciencia, ternura y una sonrisa que ilumina el corazón."',
    likes: 110,
    iconName: 'Anchor'
  },
  {
    id: 'qual-4',
    title: 'Amor Incondicional',
    description: 'Su capacidad de amar sin límites, entregando todo su tiempo y esfuerzo por labrar un futuro feliz para sus hijas.',
    quote: '"Ser padre no es solo dar la vida, es elegir estar cada día."',
    likes: 153,
    iconName: 'Heart'
  }
];
