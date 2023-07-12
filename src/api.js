import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

export class JoblyApi {
  // the token for interaction with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async login(username, password) {
    const data =  {
                    "username" : username,
                    "password" : password
                  }

    let res = await this.request(`auth/token`, data, "POST");
    this.token = res.token;
    localStorage.setItem('user', this.token);
    localStorage.setItem('username', username);
    return this.token;
  }


  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res;
  }


  static async getJob(handle) {
    let res = await this.request(`jobs/${handle}`);
    return res;
  }

  static async register(username, password, first, last, email){
    const data =  {
      "username" : username,
      "password" : password,
      "firstName" : first,
      "lastName" : last,
      "email" : email,
      "isAdmin" : false
    }

    const url = `${BASE_URL}/users`;
    const headers = { authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTUyODUzMH0.b1V3SMyHQLr9_TXC9v-Zqn3iIeyJjEyReaaTBC8QHNg" };
    const params = {};
    const method = "POST";

    let res = "";

    try {
      res = await axios({ url, method, data, params, headers }).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
    this.token = res.token;
    localStorage.setItem('user', this.token);
    localStorage.setItem('username', username);
    return this.token;
  }

  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
