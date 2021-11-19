import axios from "axios";
// import { I_Request, status } from "util/models/Request";

const fetch_requests = async (next_id: string): Promise<any[]> => {
  const result = await axios.get(
    `http://localhost:3000/api/request/search/hello`
  );

  return result.data.requests;
};

export default fetch_requests;
