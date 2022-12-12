import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pseudopsy0@gmail.com",
      pass: "shyurftvwysyhcuf",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
export default transporter

  // var mailOptions = {
  //   from: ' "Hii... " <pseudopsy0@gmail.com> ',
  //   to: user.email,
  //   subject: `Welome ${user.name} to yoga classes`,
  //   html: `<h2> Hii ${user.name} ! Welcome to yoga classes<h2> 
  //       <img src="https://pngimg.com/uploads/yoga/small/yoga_PNG104.png"> 
  //         <h4> Your yoga classes will start from ${user.startDate} and your batch number is ${user.batchNumber} ....</h4>
  //         <button type="button">Payment</button>
  //         <a href=" ">Click here to do the payment</a>`,
  // };
  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Veification mail sent to your gmail account");
  //   }
  // });