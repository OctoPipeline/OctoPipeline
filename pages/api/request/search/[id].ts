import { NextApiRequest, NextApiResponse } from "next";
import { Request } from "util/models/index";
import connectToDatabase from "util/dbConnect";
import ApiFuncs from "util/functions";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ApiFuncs = req.method as keyof ApiFuncs;

  //function for catch errors
  const catcher = (error: Error) => {
    console.log(error);
    res.status(400).json({ error });
  };

  await connectToDatabase();

  const next_id = req.query.id as string;

  /**
   * @description possible response types for the api at /request/[id]
   */
  const handleCase: ApiFuncs = {
    // Response for GET requests
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      // const result = await Request.find({ next_id: next_id }).exec();
      // res.json(result);
      res.json({
        requests: [
          {
            status: "status.APPROVED",
            gcode: "string",
            owner_email: "harshasrikara@gmail.com",
            owner_id: "abcdefghi",
            approver: "aditijain0424@gmail.com",
            approval_date: new Date(),
            submitted_date: new Date(),
            expected_price: 1234,
          },
          {
            status: "status.DRAFT",
            gcode: "string",
            owner_email: "kanna6501@gmail.com",
            owner_id: "abcdefghi",
            approver: "harshasrikara@gmail.com",
            approval_date: new Date(),
            submitted_date: new Date(),
            expected_price: 1234,
          },
        ],
      });
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
