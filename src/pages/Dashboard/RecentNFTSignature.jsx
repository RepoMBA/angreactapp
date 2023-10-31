import React, { Component } from "react";
import Slider from "react-slick";

import Stamp1 from "../../assets/stamp1.png";

import Stamp2 from "../../assets/stamp2.png";

import Stamp3 from "../../assets/stamp3.png";

import Stamp4 from "../../assets/stamp4.png";
function RecentNFTSignature() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="nft-signature-main-container mt-4">
        <p className="text-[14px] font-semibold text-[#2a2a2a] mb-1 ">
          Your Recent NFT Signature
        </p>
        <Slider {...settings} className="nft-slider">
          <div>
            <div className="nft-signature-container flex items-center mr-2 px-4] ">
              <img
                src={Stamp1}
                alt=""
                className="w-12  
              mr-2"
              />
              <div>
                <div className="text-[13px] font-semibold ">Akash Nigam</div>
                <div className="text-[12px]">12 June 2023</div>
              </div>
            </div>
          </div>
          <div>
            <div className="nft-signature-container flex items-center mr-2 px-4">
              <img
                src={Stamp2}
                alt=""
                className="w-12  
              mr-2"
              />
              <div>
                <div className="text-[13px] font-semibold ">Akash Nigam</div>
                <div className="text-[12px]">12 June 2023</div>
              </div>
            </div>
          </div>
          <div>
            <div className="nft-signature-container flex items-center mr-2 px-4">
              <img
                src={Stamp3}
                alt=""
                className="w-12  
              mr-2"
              />
              <div>
                <div className="text-[13px] font-semibold ">Akash Nigam</div>
                <div className="text-[12px]">12 June 2023</div>
              </div>
            </div>
          </div>
          <div>
            <div className="nft-signature-container flex items-center mr-2 px-4">
              <img
                src={Stamp4}
                alt=""
                className="w-12  
              mr-2"
              />
              <div>
                <div className="text-[13px] font-semibold ">Akash Nigam</div>
                <div className="text-[12px]">12 June 2023</div>
              </div>
            </div>
          </div>
          <div>
            <div className="nft-signature-container flex items-center mr-2 px-4">
              <img
                src={Stamp2}
                alt=""
                className="w-12  
              mr-2"
              />
              <div>
                <div className="text-[13px] font-semibold ">Akash Nigam</div>
                <div className="text-[12px]">12 June 2023</div>
              </div>
            </div>
          </div>
          <div>
            <div className="nft-signature-container flex items-center mr-2 px-4] ">
              <img
                src={Stamp1}
                alt=""
                className="w-12  
              mr-2"
              />
              <div>
                <div className="text-[13px] font-semibold ">Akash Nigam</div>
                <div className="text-[12px]">12 June 2023</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default RecentNFTSignature;
