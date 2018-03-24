/// <reference types="node" />
declare module 'devpost-projects-list-scraper' {
  
    export function getProjects(page: number): Promise<string[]>;
  
  }
  