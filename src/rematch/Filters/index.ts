import { createBlacklistFilter } from "redux-persist-transform-filter";

const auth: any = createBlacklistFilter("Auth", ["userID"]);
// const _loan = createBlacklistFilter("Loan", ["noOfRequiredDoc"]);

export const AllFilters = [auth];
