declare module "virtual:missions-data" {
  interface MissionData {
    title: string;
    section: string;
    url: string;
    badge: string | null;
    difficulty: number;
    tags: string[];
    lastUpdated: number;
  }

  export const missions: MissionData[];
}
