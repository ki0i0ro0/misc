export interface BookFormData {
  name: string;
  bookNo: number;
}

export interface BookGridData extends BookFormData {
  id?: number;
}
