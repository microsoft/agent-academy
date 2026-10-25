declare module "virtual:download-bundles" {
  export const bundles: Record<string, {
    fileName: string;
    url: string;
    isFile: boolean;
  }>;
}
