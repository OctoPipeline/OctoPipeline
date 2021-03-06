import { NextApiRequest, NextApiResponse } from "next";
import { Request } from "util/models/index";
import connectToDatabase from "util/dbConnect";
import ApiFuncs from "util/functions";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ApiFuncs = req.method as keyof ApiFuncs;

  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error });

  await connectToDatabase();

  const id = req.query.id as string;

  /**
   * @description possible response types for the api at /request/[id]
   */
  const handleCase: ApiFuncs = {
    // Response for GET requests
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      res.json(await Request.findById(id).catch(catcher));
    },
    // Response for PUT requests
    PUT: async (req: NextApiRequest, res: NextApiResponse) => {
      res.json(
        await Request.findByIdAndUpdate(id, req.body, { new: true }).catch(
          catcher
        )
      );
    },
    // Response for DELETE requests
    DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
      res.json(await Request.findByIdAndRemove(id).catch(catcher));
    },
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) {
    response(req, res);
  } else {
    res
      .status(400)
      .json({ message: "Failure", error: "No Response for This Request" });
  }
};

export default handler;
