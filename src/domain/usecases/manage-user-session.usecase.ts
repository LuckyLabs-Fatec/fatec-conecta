import type { AuthenticateUserModel } from "../models";

export interface ManageUserSessionUseCase {
  set(account: AuthenticateUserModel): void;
  get(): AuthenticateUserModel | null;
  clear(): void;
}
