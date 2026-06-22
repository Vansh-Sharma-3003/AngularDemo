import { FilterConfig } from "../../../model/ui/form-control";


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