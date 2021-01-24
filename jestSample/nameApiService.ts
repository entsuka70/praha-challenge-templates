import axios from "axios";

export class NameApiService {
  private MAX_LENGTH = 4;
  public constructor() {}

  public async getFirstName(name: string): Promise<string> {
    const firstName = name;

    if (firstName.length > this.MAX_LENGTH) {
      throw new Error("firstName is too long!");
    }

    return firstName;
  }
}
