// import React from "react";
// import { Link } from "react-router-dom";
// import "./CircleCard.css";
// import { FaCheckCircle } from "react-icons/fa";

// const CircleCard = ({ id, name, eth, username, balance, image }) => {
//   return (
//     <div className="card">
//       <div className="relative">
//         <div className="first-circle">1</div>
//         <div className="second-circle">
//           <Link to={`/profile/${id}`}>
//             {" "}
//             {/* Оберните картинку в Link */}
//             <img src={image} alt="author" />
//           </Link>
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
import { Link } from "react-router-dom";
import "./CircleCard.css";
import { FaCheckCircle } from "react-icons/fa";

const CircleCard = ({ id, name, eth, username, balance, image }) => {
  return (
    <div className="card">
      <div className="relative">
        <div className="first-circle">{id}</div>
        <div className="second-circle">
          <Link to={`/profile/${id}`}>
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
