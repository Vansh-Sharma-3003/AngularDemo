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
    name: "Aarav Sharma",
    leader: "sl",
    teamLeader: "tl1",
    queueType: "iq",
    feedback: "p",
    searchResult: "mf",
    searchType: "es",
    responseType: "Automatic",
    status: "a"
  },
  {
    responseId: "RSP-1002",
    candidateId: "CAND-502",
    name: "Priya Verma",
    leader: "gsl",
    teamLeader: "tl2",
    queueType: "oq",
    feedback: "n",
    searchResult: "pm",
    searchType: "fs",
    responseType: "Manual",
    status: "p"
  },
  {
    responseId: "RSP-1003",
    candidateId: "CAND-503",
    name: "Rohan Mehta",
    leader: "tl",
    teamLeader: "tl3",
    queueType: "pq",
    feedback: "neg",
    searchResult: "nm",
    searchType: "ws",
    responseType: "Automatic",
    status: "i"
  },
  {
    responseId: "RSP-1004",
    candidateId: "CAND-504",
    name: "Sneha Iyer",
    leader: "sl",
    teamLeader: "tl2",
    queueType: "iq",
    feedback: "p",
    searchResult: "mf",
    searchType: "es",
    responseType: "Manual",
    status: "a"
  },
  {
    responseId: "RSP-1005",
    candidateId: "CAND-505",
    name: "Kabir Singh",
    leader: "gsl",
    teamLeader: "tl1",
    queueType: "pq",
    feedback: "n",
    searchResult: "pm",
    searchType: "fs",
    responseType: "Automatic",
    status: "c"
  },
  {
    responseId: "RSP-1006",
    candidateId: "CAND-506",
    name: "Ananya Das",
    leader: "tl",
    teamLeader: "tl3",
    queueType: "oq",
    feedback: "neg",
    searchResult: "nm",
    searchType: "ws",
    responseType: "Manual",
    status: "p"
  },
  {
    responseId: "RSP-1007",
    candidateId: "CAND-507",
    name: "Vivaan Gupta",
    leader: "sl",
    teamLeader: "tl1",
    queueType: "pq",
    feedback: "p",
    searchResult: "mf",
    searchType: "es",
    responseType: "Automatic",
    status: "a"
  },
  {
    responseId: "RSP-1008",
    candidateId: "CAND-508",
    name: "Ishita Rao",
    leader: "gsl",
    teamLeader: "tl3",
    queueType: "iq",
    feedback: "n",
    searchResult: "pm",
    searchType: "fs",
    responseType: "Manual",
    status: "i"
  },
  {
    responseId: "RSP-1009",
    candidateId: "CAND-509",
    name: "Aditya Nair",
    leader: "tl",
    teamLeader: "tl2",
    queueType: "oq",
    feedback: "neg",
    searchResult: "nm",
    searchType: "ws",
    responseType: "Automatic",
    status: "c"
  },
  {
    responseId: "RSP-1010",
    candidateId: "CAND-510",
    name: "Meera Joshi",
    leader: "sl",
    teamLeader: "tl1",
    queueType: "iq",
    feedback: "p",
    searchResult: "mf",
    searchType: "es",
    responseType: "Manual",
    status: "a"
  }
];