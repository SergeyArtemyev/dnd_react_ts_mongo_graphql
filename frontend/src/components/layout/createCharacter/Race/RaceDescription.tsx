import React, { useContext, useEffect } from 'react';
// import RaceContext from "../../../../context/Race/raceContext";
// import M from "materialize-css/dist/js/materialize.min.js";

// const RaceDescription = () => {
//   const raceContext = useContext(RaceContext);
//   useEffect(() => {
//     // Initialize Material JS
//     M.AutoInit();
//   });

//   const changeArrow = (e) => {
//     let iconArrow = document.querySelectorAll(".icon-arrow");
//     let lis = document.querySelectorAll(".desc-li");
//     for (let i = 0; i < lis.length; i++) {
//       if (e.target.parentElement === lis[i] || e.target.parentElement.parentElement === lis[i]) {
//         if (iconArrow[i].innerHTML === "arrow_downward") {
//           iconArrow[i].innerHTML = "arrow_upward";
//         } else {
//           iconArrow[i].innerHTML = "arrow_downward";
//         }
//       }
//     }
//   };

//   const {
//     description: { info, abScInc, age, alignment, size, speed, languages },
//   } = raceContext;

//   return (
//     <div className="description">
//       <h3>Description</h3>
//       <p>{info}</p>
//       <ul className="collapsible expandable">
//         <li className="desc-li">
//           <div className="collapsible-header" onClick={changeArrow}>
//             <span>Ability Score Increase</span>
//             <i className="material-icons icon-arrow">arrow_downward</i>
//           </div>
//           <div className="collapsible-body">
//             <span>{abScInc}</span>
//           </div>
//         </li>
//         <li className="desc-li">
//           <div className="collapsible-header" onClick={changeArrow}>
//             <span>Age</span>
//             <i className="material-icons icon-arrow">arrow_downward</i>
//           </div>
//           <div className="collapsible-body">
//             <span>{age}</span>
//           </div>
//         </li>
//         <li className="desc-li">
//           <div className="collapsible-header" onClick={changeArrow}>
//             <span>Alignment</span>
//             <i className="material-icons icon-arrow">arrow_downward</i>
//           </div>
//           <div className="collapsible-body">
//             <span>{alignment}</span>
//           </div>
//         </li>
//         <li className="desc-li">
//           <div className="collapsible-header" onClick={changeArrow}>
//             <span>Size</span>
//             <i className="material-icons icon-arrow">arrow_downward</i>
//           </div>
//           <div className="collapsible-body">
//             <span>{size}</span>
//           </div>
//         </li>
//         <li className="desc-li">
//           <div className="collapsible-header" onClick={changeArrow}>
//             <span>Speed</span>
//             <i className="material-icons icon-arrow">arrow_downward</i>
//           </div>
//           <div className="collapsible-body">
//             <span>{speed}</span>
//           </div>
//         </li>
//         <li className="desc-li">
//           <div className="collapsible-header" onClick={changeArrow}>
//             <span>Languages</span>
//             <i className="material-icons icon-arrow">arrow_downward</i>
//           </div>
//           <div className="collapsible-body">
//             <span>{languages}</span>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default RaceDescription;
