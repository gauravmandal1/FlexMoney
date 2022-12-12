import paymentCollection from "../Models/payment.js";


//post route to store payment information of users in database
export default {
  onCreatPayment: async (req, res) => {
    const { mode, card, upiId, email } = req.body;

    //Check if the foreign key exist i.e. email
    if (!email || email == "") {
      res.status(400).json({ message: "Email missing", message_id: "0" });
      return;
    }
    
    else {
      //Find whether a payment method with this email id present or not
      paymentCollection
        .findOne({ email: email })
        .then((savedPayment) => {
          //If payment information of this email id is present then update payment information
          if (savedPayment) {
            if (mode == "card") {
              const { holderName, expirationDate, cardNo, cvvCode } = card;
              //If all card details are not present correctly
              if (
                !holderName ||
                !expirationDate ||
                !cardNo ||
                !cvvCode ||
                holderName == "" ||
                expirationDate == "" ||
                cardNo == "" ||
                cvvCode == ""
              ) {
                res.status(400).json({
                  message: "Insufficient Information in card details",
                  message_id: "0",
                });
                return;
              }
              else {
                //Update the information of card
                paymentCollection
                  .updateOne(
                    { email: email },
                    { $set: { holderName, expirationDate, cardNo, cvvCode } }
                  )
                  .then((data) => {
                    res.status(200).json({
                      message: "Payment method updated successfully",
                      data: data,
                      message_id: "1",
                    });
                    return;
                  })
                  .catch((err) => {
                    console.log(`Error in updation is : ${err}`);
                    return;
                  });
              }
            }
            //If mode of payment selected is upi
            else if (mode == "upi") {
              
              //Update the information of upi
              paymentCollection
                .updateOne({ email: email }, { $set: { upiId } })
                .then((data) => {
                  res.status(401).json({
                    message: "Payment method updated successfully",
                    data: data,
                    message_id: "1",
                  });
                  return;
                })
                .catch((err) => {
                  console.log(`Error in updation is : ${err}`);
                  return;
                });
            }
          }
          //Otherwise insert the payment information
          else {
            if (mode == "card") {
              const { holderName, expirationDate, cardNo, cvvCode } = card;
              //If all card details are not present correctly
              if (
                !holderName ||
                !expirationDate ||
                !cardNo ||
                !cvvCode ||
                holderName == "" ||
                expirationDate == "" ||
                cardNo == "" ||
                cvvCode == ""
              ) {
                res.status(400).json({
                  message: "Insufficient Information in card details",
                  message_id: "0",
                });
                return;
              }
             
              //Else all details are correct
              else {
                //Create new payment document
                const paymentDoc = new paymentCollection({
                  card: {
                    holderName: holderName,
                    expirationDate: expirationDate,
                    cardNo: cardNo,
                    cvvCode: cvvCode,
                  },
                  upiId: "",
                  email: email,
                });

                //Save the details of card
                paymentDoc
                  .save()
                  
                  .then((data) => {
                    //If user stored successfully
                    res.status(401).json({
                      message: "Payment method inserted successfully",
                      data: data,
                      message_id: "3",
                    });
                    return;
                  })
                  .catch((err) => {
                    //If error occurs in inserting payment info
                    console.log(`Error in inserting payment is : ${err}`);
                  });
              }
            }
            //If mode of payment selected is upi
            else if (mode == "upi") {
              
              //Make new document for upi
              const paymentDoc = new paymentCollection({
                card: {},
                upiId: upiId,
                email: email,
              });

              //Save the details of upi
              paymentDoc
                .save()
                
                .then((data) => {
                  //If user stored successfully
                  res.status(401).json({
                    message: "Payment method inserted successfully",
                    data: data,
                    message_id: "3",
                  });
                  return;
                })
                .catch((err) => {
                  //If error occurs in inserting payment info
                  console.log(`Error in inserting payment is : ${err}`);
                });
            }
          }
        })
        .catch((err) => {
          console.log(`Error in finding email is : ${err}`);
        });
    }
  },
};
