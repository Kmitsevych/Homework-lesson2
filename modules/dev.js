import { Employee } from "./employee.js";

export class Dev extends Employee {
  #jobType = "Dev";

  getJobType() {
    return `I am a ${this.#jobType}`;
  }
}

import { Employee } from "./employee.js";

export class Dev extends Employee {
  #jobType = "Dev";

  getJobType() {
    return `I am a ${this.#jobType}`;
  }

  static returnArrayOfDevs(...devs) {
    return devs.filter((dev) => dev instanceof Dev);
  }
}