export interface DateInfo {
  date: number;
  month: string;
  year: number;
}
export interface DateList {
  [id: string]: DateInfo[];
}
