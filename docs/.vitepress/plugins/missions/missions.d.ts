declare module "virtual:missions-data" {
  interface MissionData {
    title: string;
    section: string;
    url: string;
    badge: string | null;
    difficulty: number;
    tags: string[];
    products: string[];
    industries: string[];
    lastUpdated: number;
    createdAt: number;
    preview: boolean;
    credits: { min: number; max: number } | null;
  }

  export const missions: MissionData[];
}
