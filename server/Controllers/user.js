
import userCollection from "../Models/user.js"
import * as dotenv from 'dotenv';
import transporter from "../service/transporter.js";
dotenv.config(); 

export default {
  onCreateUser: async (req, res) => {
    try {
      const { name, age, gender, email, startDate, feesPaid, batchNumber } =
        req.body;
      if (
        !name ||
        !age ||
        !gender ||
        !email ||
        !startDate ||
        !feesPaid ||
        !batchNumber ||
        name == "" ||
        email == "" ||
        startDate == "NaN/undefinedundefined/" ||
        batchNumber == 0
      ) {
        res
          .status(400)
          .json({ message: "Information insufficient", message_id: "0" });
        return;
      } 
      const userData = new userCollection({
        name: name,
        age: age,
        gender: gender,
        email: email,
        startDate: startDate,
        feesPaid: feesPaid,
        batchNumber: batchNumber,
      });
      const user = await userData.save();
      var mailOptions = {
          from: ' "Hii... " <pseudopsy0@gmail.com> ',
          to: user.email,
          subject: `Welome ${user.name} to yoga classes`,
          html: `
          <h2> Hii ${user.name} ! Welcome to yoga classes<h2> 
          <h3> your payment is complete!</h3>
              <img src="https://pngimg.com/uploads/yoga/small/yoga_PNG104.png"> 

                <h4> Your yoga classes will start from ${user.startDate} and your batch number is ${user.batchNumber} ....</h4>
                <button type="button">Click to continue</button>
                `,
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Veification mail sent to your gmail account");
          }
        });

      return res.status(200).json({"message":"successfull","data":user,"message_id":"3"});
    } catch (error) {
      console.log(error);
    }
  },
  onGetUserById: async (req,res) =>{
    try {
        const user = await userCollection.getUserById(req.params.id);
        return res.status(200).json({ success: true, user });
      } catch (error) {
        return res.status(500).json({ success: false, error: error });
      }

  }
};
