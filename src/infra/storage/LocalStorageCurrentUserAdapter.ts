import type { AuthenticateUserModel } from "@/domain/models";

const key = "account";

export const currentUserStorage = {
  set(account: AuthenticateUserModel) {
    localStorage.setItem(key, JSON.stringify(account));
  },
  get(): AuthenticateUserModel | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  clear() {
    localStorage.removeItem(key);
  },
};
