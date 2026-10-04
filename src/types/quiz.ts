export interface QuizOption {
  id: string;
  label: string;
  subtext?: string;
  badge?: string;
}

export interface QuizQuestionData {
  id: number;
  category: string;
  title: string;
  subtitle?: string;
  options: QuizOption[];
}

export type QuizAnswers = Record<number, string>;

export interface SmartSubstitution {
  original: string;
  category: string;
  substitute: string;
  benefit: string;
  caloricReduction: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'team';
  text: string;
  time: string;
  reaction?: string;
}

export interface WhatsAppConversation {
  id: string;
  contactName: string;
  tag: string;
  summary: string;
  messages: ChatMessage[];
}
