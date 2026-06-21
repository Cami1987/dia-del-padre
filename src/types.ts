export interface Message {
  id: string;
  author: string;
  age?: string;
  relation: string;
  text: string;
  heartCount: number;
  isCustom: boolean;
  avatarUrl?: string;
  visualTheme: 'classic' | 'cosmic' | 'forest' | 'pastel';
  sticker: 'heart' | 'star' | 'gift' | 'crown' | 'cape' | 'hug' | 'none';
  timestamp: string;
}

export interface Memory {
  id: string;
  title: string;
  category: 'Aventuras' | 'Historias' | 'Momentos Diarios';
  description: string;
  imageUrl: string;
  date: string;
  likeCount: number;
}

export interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quality {
  id: string;
  title: string;
  description: string;
  quote: string;
  likes: number;
  iconName: 'Shield' | 'Heart' | 'Users' | 'Smile' | 'Sparkles' | 'Anchor';
}
