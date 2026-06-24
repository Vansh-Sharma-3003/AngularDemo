import { FilterConfig } from "../../../model/ui/form-control";
import { MOCK_TABLE_DATA } from "../../../model/ui/table-data";


export const SEARCH_FIELDS_MOCK_DATA: FilterConfig = {
    leader: {
    sl: "Scoring Leader",
    gsl: "Group Scoring Leader",
    tl: "Team Leader",
  },

  teamLeader: {
    tl1: "Team Leader A",
    tl2: "Team Leader B",
    tl3: "Team Leader C",
  },

  queueTpye: {
    iq: "Inbound Queue",
    oq: "Outbound Queue",
    pq: "Priority Queue",
  },

  feedback: {
    p: "Positive",
    n: "Neutral",
    neg: "Negative",
  },

  searchResult: {
    mf: "Match Found",
    nm: "No Match",
    pm: "Partial Match",
  },

  searchType: {
    es: "Exact Search",
    fs: "Fuzzy Search",
    ws: "Wildcard Search",
  },

  status: {
    a: "Active",
    i: "Inactive",
    p: "Pending",
    c: "Closed",
  }
}

export const TABLE_DATA: MOCK_TABLE_DATA[] = [
  {
    responseId: "RSP-1001",
    candidateId: "CAND-501",
    leader: "Scoring Leader",
    teamLeader: "Team Leader A",
    queueType: "Inbound Queue",
    feedback: "Positive",
    searchResult: "Match Found",
    searchType: "Exact Search",
    responseType: "Automatic",
    status: "Active"
  },
  {
    responseId: "RSP-1002",
    candidateId: "CAND-502",
    leader: "Group Scoring Leader",
    teamLeader: "Team Leader B",
    queueType: "Outbound Queue",
    feedback: "Neutral",
    searchResult: "Partial Match",
    searchType: "Fuzzy Search",
    responseType: "Manual",
    status: "Pending"
  },
  {
    responseId: "RSP-1003",
    candidateId: "CAND-503",
    leader: "Team Leader",
    teamLeader: "Team Leader C",
    queueType: "Priority Queue",
    feedback: "Negative",
    searchResult: "No Match",
    searchType: "Wildcard Search",
    responseType: "Automatic",
    status: "Inactive"
  },
  {
    responseId: "RSP-1004",
    candidateId: "CAND-504",
    leader: "Scoring Leader",
    teamLeader: "Team Leader B",
    queueType: "Inbound Queue",
    feedback: "Positive",
    searchResult: "Match Found",
    searchType: "Exact Search",
    responseType: "Manual",
    status: "Active"
  },
  {
    responseId: "RSP-1005",
    candidateId: "CAND-505",
    leader: "Group Scoring Leader",
    teamLeader: "Team Leader A",
    queueType: "Priority Queue",
    feedback: "Neutral",
    searchResult: "Partial Match",
    searchType: "Fuzzy Search",
    responseType: "Automatic",
    status: "Closed"
  },
  {
    responseId: "RSP-1006",
    candidateId: "CAND-506",
    leader: "Team Leader",
    teamLeader: "Team Leader C",
    queueType: "Outbound Queue",
    feedback: "Negative",
    searchResult: "No Match",
    searchType: "Wildcard Search",
    responseType: "Manual",
    status: "Pending"
  },
  {
    responseId: "RSP-1007",
    candidateId: "CAND-507",
    leader: "Scoring Leader",
    teamLeader: "Team Leader A",
    queueType: "Priority Queue",
    feedback: "Positive",
    searchResult: "Match Found",
    searchType: "Exact Search",
    responseType: "Automatic",
    status: "Active"
  },
  {
    responseId: "RSP-1008",
    candidateId: "CAND-508",
    leader: "Group Scoring Leader",
    teamLeader: "Team Leader C",
    queueType: "Inbound Queue",
    feedback: "Neutral",
    searchResult: "Partial Match",
    searchType: "Fuzzy Search",
    responseType: "Manual",
    status: "Inactive"
  },
  {
    responseId: "RSP-1009",
    candidateId: "CAND-509",
    leader: "Team Leader",
    teamLeader: "Team Leader B",
    queueType: "Outbound Queue",
    feedback: "Negative",
    searchResult: "No Match",
    searchType: "Wildcard Search",
    responseType: "Automatic",
    status: "Closed"
  },
  {
    responseId: "RSP-1010",
    candidateId: "CAND-510",
    leader: "Scoring Leader",
    teamLeader: "Team Leader A",
    queueType: "Inbound Queue",
    feedback: "Positive",
    searchResult: "Match Found",
    searchType: "Exact Search",
    responseType: "Manual",
    status: "Active"
  }
];