export interface Tutor {
  id: string;
  hourlyRate: number;
  rating: number;
  isFeatured: boolean;
  user: {
    name: string;
    image: string | null;
  };
  categories: {
    category: {
      id: string;
      name: string;
    };
  }[];
}
