import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "util/dbConnect";
import { status } from "util/models/Request";
import { Request } from "util/models/index";
import ApiFuncs from "util/functions";
import { upload } from "util/upload";

interface Data {
  message: string;
  error?: Error;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // capture api method
  const method = req.method as keyof ApiFuncs;

  //function for catch errors
  const catcher = (error: Error) =>
    res.status(400).json({ message: "Failure", error: error });

  // connect to the database
  await connectToDatabase();

  /**
   * @description add dummy data to the database
   */
  const handleCase: ApiFuncs = {
    // Response for GET requests
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      await Request.create({
        status: status.SUBMITTED,
        gcode: "abcdefghijklmnopqrstuvwxyz",
        owner_email: "harshasrikara@gmail.com",
        owner_id: "abcdef",
        approver: "admin@email.com",
        submitted_date: new Date(),
        approval_date: new Date(),
        expected_price: 12345,
      }).catch(catcher);

      await Request.create({
        status: status.DRAFT,
        gcode: "12345678900987654321",
        owner_email: "kanna6501@gmail.com",
        owner_id: "123456",
        approver: "admin@email.com",
        submitted_date: new Date(),
        approval_date: new Date(),
        expected_price: 13579,
      }).catch(catcher);

      await Request.create({
        status: status.APPROVED,
        gcode: "abcdefghijklmnopqrstuvwxyz",
        owner_email: "aditijain0424@gmail.com",
        owner_id: "asdfgh",
        approver: "harshasrikara@gmail.com",
        submitted_date: new Date(),
        approval_date: new Date(),
        expected_price: 54321,
      }).catch(catcher);

      await Request.create({
        status: status.PRINTING,
        gcode: "asdfghjklpoiuytrewqzxcvbnm",
        owner_email: "test@user.com",
        owner_id: "qwerty",
        approver: "admin@email.com",
        submitted_date: new Date(),
        approval_date: new Date(),
        expected_price: 12345,
      }).catch(catcher);

      await Request.create({
        status: status.SUBMITTED,
        gcode: "abcdefghijklmnopqrstuvwxyz",
        owner_email: "harshasrikara@gmail.com",
        owner_id: "abcdef",
        approver: "kanna6501@gmail.com",
        submitted_date: new Date(),
        approval_date: new Date(),
        expected_price: 13893,
      }).catch(catcher);

      await Request.create({
        status: status.DRAFT,
        gcode: "abcdefghijklmnopqrstuvwxyz",
        owner_email: "harshasrikara@gmail.com",
        owner_id: "abcdef",
        approver: "aditijain0424@gmail.com",
        submitted_date: new Date(),
        approval_date: new Date(),
        expected_price: 84627,
      }).catch(catcher);

      res.json({ message: "Success" });
    },
  };

  const response = handleCase[method];
  if (response) {
    response(req, res);
  } else {
    res
      .status(405)
      .json({ message: "Failure", error: "No Response for This Request" });
  }
};

export default handler;
