import * as React from "react";
import Pagination from "@mui/material/Pagination";

import PdfIcon from "../../assets/pdfIcon.png";

function RecentlySignedDocuments() {
  return (
    <div>
      <div className="">
        <p className="text-[14px] font-semibold text-[#2a2a2a] ">
          Recent Signed Documents
        </p>
        <div className="documents-cards-main-container grid-cols-3 gap-2 grid mt-4">
          <div className="signed-document-card flex items-center p-2 bg-[#fff] rounded-[12px]">
            <img src={PdfIcon} className="w-[50px] mr-2 " />
            <div>
              <div className="text-[13px] font-medium">
                Agreement between A and B
              </div>
              <div className="text-[12px]">12 July 2023</div>
            </div>
          </div>
          <div className="signed-document-card flex items-center p-2 bg-[#fff] rounded-[12px]">
            <img src={PdfIcon} className="w-[50px] mr-2 " />
            <div>
              <div className="text-[13px] font-medium">
                Agreement between A and B
              </div>
              <div className="text-[12px]">12 July 2023</div>
            </div>
          </div>
          <div className="signed-document-card flex items-center p-2 bg-[#fff] rounded-[12px]">
            <img src={PdfIcon} className="w-[50px] mr-2 " />
            <div>
              <div className="text-[13px] font-medium">
                Agreement between A and B
              </div>
              <div className="text-[12px]">12 July 2023</div>
            </div>
          </div>
          <div className="signed-document-card flex items-center p-2 bg-[#fff] rounded-[12px]">
            <img src={PdfIcon} className="w-[50px] mr-2 " />
            <div>
              <div className="text-[13px] font-medium">
                Agreement between A and B
              </div>
              <div className="text-[12px]">12 July 2023</div>
            </div>
          </div>
          <div className="signed-document-card flex items-center p-2 bg-[#fff] rounded-[12px]">
            <img src={PdfIcon} className="w-[50px] mr-2 " />
            <div>
              <div className="text-[13px] font-medium">
                Agreement between A and B
              </div>
              <div className="text-[12px]">12 July 2023</div>
            </div>
          </div>
          <div className="signed-document-card flex items-center p-2 bg-[#fff] rounded-[12px]">
            <img src={PdfIcon} className="w-[50px] mr-2 " />
            <div>
              <div className="text-[13px] font-medium">
                Agreement between A and B
              </div>
              <div className="text-[12px]">12 July 2023</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
}

export default RecentlySignedDocuments;
