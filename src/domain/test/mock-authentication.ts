import { faker } from "@faker-js/faker";

import type { AuthenticateUserModel } from "../models";

export const mockAuthenticateUserModel = (): AuthenticateUserModel => ({
  accessToken: faker.string.uuid(),
  user: {
    email: faker.internet.email(),
    id: faker.number.int(),
    name: faker.person.fullName()
  }
})