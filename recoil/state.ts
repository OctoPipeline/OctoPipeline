import { atom, selector } from "recoil";
import fetch_requests from "recoil/actions/request";

export const subject = atom({
  key: "subject",
  default: {
    email: "",
    next_id: "",
  },
});

export const user_requests = selector({
  key: "requests",
  get: async ({ get }) => {
    return await fetch_requests(get(subject).next_id);
  },
});
