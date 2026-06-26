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
  nameId?: string;
  leader?: string;
  teamLeader?: string;
  queueTpye?: string;
  feedback?: string;
  responseType?: string;
}
