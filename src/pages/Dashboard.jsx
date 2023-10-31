import React from "react";
import createNFTImage from "../assets/createNFTImage.png";
import { Progress } from "antd";
import CommonButton from "../Components/CommonButton";
import PendingDocumentsWhite from "../assets/PendingDocumentWhite.png";
import TotalDocuments from "../assets/TotalDocuments.png";
import LeftNav from "../Components/LeftNav";
import TopNav from "../Components/TopNav";
import SignedDocuments from "../assets/SignedDocuments.png";
import RecentNFTSignature from "./Dashboard/RecentNFTSignature";
import RecentlySignedDocuments from "./Dashboard/RecentlySignedDocuments";
import PendingDocuments from "./Dashboard/PendingDocuments";
import CreateSignaturePopup from "./Dashboard/CreateSignaturePopup";

function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className="flex bg-[#F7F6FD]">
        <LeftNav />

        <div className="w-full h-[100vh] overflow-auto">
          <TopNav />
          <div className="flex justify-between m-[10px]">
            <div className="left-container">
              <div className="flex justify-between">
                <div className="create-nft-container">
                  <div className="text-lg font-semibold text-[#5C5C5C] ">
                    {" "}
                    Explore, Create, Thrive: <br />
                    Your NFT Journey Begins Here
                    <div className="text-[#808080] text-[15px]  font-medium mt-1  ">
                      Elevate your digital creativity through NFTs.
                    </div>
                    <div className="mt-3">
                      <CommonButton
                        label="Create NFT"
                        color="primary"
                        onClick={handleClick}
                        rounded={true}
                      />
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div className="image-background-dashboard relative">
                      <svg
                        className="absolute top-0 right-0 fill-[#9469FA] filter blur-[71.5px] z-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="394"
                        height="371"
                        viewBox="0 0 394 371"
                        fill="none"
                      >
                        <g filter="url(#filter0_f_73_3526)">
                          <ellipse
                            cx="197"
                            cy="185.5"
                            rx="54"
                            ry="42.5"
                            fill="#9469FA"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_73_3526"
                            x="0"
                            y="6.10352e-05"
                            width="394"
                            height="371"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="71.5"
                              result="effect1_foregroundBlur_73_3526"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <img src={createNFTImage} className="w-52" />
                    </div>
                  </div>
                </div>
                <div className="document-status-container flex items-center ml-3">
                  <div className="w-full">
                    <p className="text-[14px] mb-2 mt-1 font-semibold text-left pl-3">
                      Document Status
                    </p>
                    <div className="flex m-1 hover:bg-gray-200 p-2 rounded-[12px] transition-all duration-100 cursor-pointer items-center">
                      <img
                        src={PendingDocumentsWhite}
                        className="w-[30px] h-[30px] bg-[#FBB142] p-[4px] rounded-[8px] mr-3"
                      />
                      <div>
                        <div className="text-[13px] font-medium">
                          Pending Documents
                        </div>
                        <div className="text-[14px]  text-[#656565] font-normal ">
                          12132{" "}
                        </div>
                      </div>
                    </div>
                    <div className="flex m-1 hover:bg-gray-200 p-2 rounded-[12px] transition-all duration-100 cursor-pointer items-center">
                      <img
                        src={SignedDocuments}
                        className="w-[30px] h-[30px] bg-[#34A853] p-[6px] rounded-[8px] mr-3"
                      />
                      <div>
                        <div className="text-[13px] font-medium">
                          Signed Documents
                        </div>
                        <div className="text-[14px] text-[#656565] font-normal ">
                          13132{" "}
                        </div>
                      </div>
                    </div>
                    <div className="flex m-1 hover:bg-gray-200 p-2 rounded-[12px] transition-all duration-100 cursor-pointer items-center">
                      <img
                        src={TotalDocuments}
                        className="w-[30px] h-[30px] bg-[#4096FF] p-[5px] rounded-[8px] mr-3"
                      />
                      <div>
                        <div className="text-[13px] font-medium">
                          Total Documents
                        </div>
                        <div className="text-[14px] text-[#656565] font-normal ">
                          12132{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CreateSignaturePopup open={open} setOpen={setOpen} />
              <RecentNFTSignature />
              <RecentlySignedDocuments />
            </div>
            <div className="right-container">
              <PendingDocuments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
