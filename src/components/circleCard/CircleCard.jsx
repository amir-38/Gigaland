// import React from "react";
// import "./CircleCard.css";
// import { FaCheckCircle } from "react-icons/fa";

// const CircleCard = () => {
//   return (
//     <>
//       <div className="card">
//         <div className="relative">
//           <div className="first-circle">1</div>
//           <div className="second-circle">
//             <img src="../../../src/assets/images/author-1.jpg" alt="author" />
//             <FaCheckCircle />
//           </div>
//         </div>

//         <div className="circle-card-text">
//           <p className="first-text-line">
//             <span>Monica Lucas</span>
//             <span>3.2ETH</span>
//           </p>
//           <p className="second-text-line">
//             <span>@monica</span>
//             <span>$4,823</span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CircleCard;

// import React from "react";
// import "./CircleCard.css";
// import { FaCheckCircle } from "react-icons/fa";

// const CircleCard = ({ name, eth, username, balance, image }) => {
//   return (
//     <div className="card">
//       <div className="relative">
//         <div className="first-circle">1</div>
//         <div className="second-circle">
//           <img src={image} alt="author" />
//           <FaCheckCircle />
//         </div>
//       </div>

//       <div className="circle-card-text">
//         <p className="first-text-line">
//           <span>{name}</span>
//           <span>{eth}</span>
//         </p>
//         <p className="second-text-line">
//           <span>{username}</span>
//           <span>{balance}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CircleCard;

import React from "react";
import { Link } from "react-router-dom"; // Импортируйте Link из react-router-dom
import "./CircleCard.css";
import { FaCheckCircle } from "react-icons/fa";

const CircleCard = ({ id, name, eth, username, balance, image }) => {
  return (
    <div className="card">
      <div className="relative">
        <div className="first-circle">1</div>
        <div className="second-circle">
          <Link to={`/profile/${id}`}>
            {" "}
            {/* Оберните картинку в Link */}
            <img src={image} alt="author" />
          </Link>
          <FaCheckCircle />
        </div>
      </div>

      <div className="circle-card-text">
        <p className="first-text-line">
          <span>{name}</span>
          <span>{eth}</span>
        </p>
        <p className="second-text-line">
          <span>{username}</span>
          <span>{balance}</span>
        </p>
      </div>
    </div>
  );
};

export default CircleCard;
