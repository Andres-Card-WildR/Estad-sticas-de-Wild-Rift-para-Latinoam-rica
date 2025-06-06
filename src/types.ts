// src/types.ts
export interface Champion {
  id: number;
  name: string;
  role: string;
  winRate?: number;
}

export interface ApiResponse {
  freeChampionIds: number[];
}