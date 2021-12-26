// // import { makeStyles } from "@material-ui/core";
// import emailjs from "emailjs-com";
// import React from "react";
// // import "./ContactUs.css";

// export default function ContactUs() {
//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_mpiksta",
//         "template_ezkhwxt",
//         e.target,
//         "user_obHBKwptqRW3Dt0DxOnrJ"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   }

//   return (
//     <div className="contactUsContainer">
//       <div className="contactUs">
//         <h2
//           style={{
//             paddingTop: "12vh",
//             textAlign: "center",
//             color: "white",
//             fontFamily: '"Aclonica", sans-serif',
//             marginBottom: "4vh",
//           }}
//         >
//           If you have any questions or suggestions <br /> or find any bug
//           contact us via feedback form.
//         </h2>
//         <form className="contactUsform" onSubmit={sendEmail}>
//           <div
//             className="row pt-5 mx-auto"
//             style={{
//               backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/bk-21.jpg"})`,
//               width: "50vw",
//               borderRadius: "30px",
//             }}
//           >
//             <div
//               // style={{ backgroundColor: "tomato" }}
//               className="col-8 form-group mx-auto"
//             >
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Name"
//                 name="name"
//                 style={{ backgroundColor: "transparent", color: "white" }}
//               />
//             </div>
//             <div className="col-8 form-group pt-2 mx-auto">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email Address"
//                 name="user_email"
//                 style={{ backgroundColor: "transparent", color: "white" }}
//               />
//             </div>
//             <div className="col-8 form-group pt-2 mx-auto">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Subject"
//                 name="subject"
//                 style={{ backgroundColor: "transparent", color: "white" }}
//               />
//             </div>
//             <div className="col-8 form-group pt-2 mx-auto">
//               <textarea
//                 className="form-control"
//                 id=""
//                 cols="30"
//                 rows="8"
//                 placeholder="Your message"
//                 name="message"
//                 style={{ backgroundColor: "transparent", color: "white" }}
//               ></textarea>
//             </div>
//             <div className="col-8 pt-3 mx-auto">
//               <input
//                 style={{
//                   background: "#ec87b2",
//                   fontFamily: '"Aclonica", sans-serif',
//                   borderRadius: "10px",
//                   height: "3.104vw",
//                   // line-height: 5.104vw;
//                   textAlign: "center",
//                   fontSize: "1.302vw",
//                   letterSpacing: "0.25px",
//                   color: "white",
//                   margin: "10px auto",
//                 }}
//                 type="submit"
//                 onClick={sendEmail}
//                 className="btn btn-info"
//                 value="Send Message"
//               ></input>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }