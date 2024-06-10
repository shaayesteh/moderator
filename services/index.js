import { API_URL } from "../constants.js";
import { createApiService } from "./api.service.js";

export const gql = createApiService({
  baseUrl: API_URL,
  role: "moderator",
  adminSecret: "0vuQV404tXov360FE8WVmR7H",
});
