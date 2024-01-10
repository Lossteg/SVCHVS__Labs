import React from "react";
import CompanyLogo from "../../assets/CopyCenterLogo.png";

export default function Logo({ className, onClick }) {
  return (
      <img src={CompanyLogo} alt="Copy-center-logo" className={ className } onClick={onClick}/>
  );
}
