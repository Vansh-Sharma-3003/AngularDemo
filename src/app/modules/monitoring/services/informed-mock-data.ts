import { InformedFilterConfig } from "../../../model/ui/form-control";
import { INFORMED_TABLE_DATA} from "../../../model/ui/table-data";


export const INFORMED_FILTER_CONFIG_DATA: InformedFilterConfig = {
  leader: {
    sl: "Scoring Leader",
    gsl: "Group Scoring Leader",
    tl: "Team Leader",
  },

  feedback: {
    p: "Positive",
    n: "Neutral",
    neg: "Negative",
  },

  status: {
    a: "Active",
    i: "Inactive",
    p: "Pending",
    c: "Closed",
  },

  priority: {
    h: "High",
    l: "Low",
    m: "Medium",
  }
}

export const TABLE_DATA: INFORMED_TABLE_DATA[] = [
  {
    responseId: "1001",
    candidateId: "CAND-501",
    nameId: "Aarav Sharma",
    leader: "sl",
    feedback: "p",
    responseType: "Automatic",
    status: "a",
    priority: "l"
  },
  {
    responseId: "1002",
    candidateId: "CAND-502",
    nameId: "Priya Verma",
    leader: "gsl",
    feedback: "n",
    responseType: "Manual",
    status: "p",
    priority: "h"
  },
  {
    responseId: "1003",
    candidateId: "CAND-503",
    nameId: "Rohan Mehta",
    leader: "tl",
    feedback: "neg",
    responseType: "Automatic",
    status: "i",
    priority: "h"
  }
];