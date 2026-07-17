export interface MOCK_TABLE_DATA {
  responseId: string;
  candidateId: string;
  name: string;
  leader: string;
  teamLeader: string;
  queueType: string;
  feedback: string;
  searchResult: string;
  searchType: string;
  responseType: string;
  status: string;
}


export interface SearchFilters {
  searchType?: string;
  status?: string;
  searchResult?: string;
  responseId?: string;
  candidateId?: string;
  nameId?: string;
  leader?: string;
  teamLeader?: string;
  queueTpye?: string;
  feedback?: string;
  responseType?: string;
}

export interface INFORMED_TABLE_DATA {
  responseId: string;
  candidateId: string;
  nameId: string;
  leader: string;
  feedback: string;
  responseType: string;
  status: string;
  priority: string;
}

export interface InformedSearchFilters {
  responseId?: string;
  candidateId?: string;
  nameId?: string;
  leader?: string;
  feedback?: string;
  responseType?: string;
  status?: string;
  priority?: string;
}


export interface GridColumn<T> {
  columnDef: Extract<keyof T, string>;
  header: string;
  sortable?: boolean;

  // Optional value transformation
  cell?: (row: T) => string;

  // Optional clickable cell
  clickable?: boolean;
}