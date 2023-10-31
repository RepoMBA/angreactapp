import React from "react";
import Metamask from "../../assets/Metamask.png";
import PdfIcon from "../../assets/pdfIcon.png";
import Coinbase from "../../assets/Coinbase.png";
import Slider from "react-slick";
function PendingDocuments() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="bg-[#fff] p-[10px] wallet-container">
        <div className="">
          <div className="hidden">
            <p className="text-[14px] mb-2 mt-1 font-semibold text-left pl-3">
              Connect Wallet
            </p>
            <div className="flex items-center wallet">
              <img src={Metamask} className="w-[30px] mr-2" />
              <p className="text-[14px] font-medium "> Metamask</p>
            </div>
            <div className="flex items-center wallet">
              <img src={Coinbase} className="w-[30px] mr-2" />
              <p className="text-[14px] font-medium ">Coinbase</p>{" "}
            </div>
          </div>
          {/* wallet card is hidden before wallet is connected */}
          <div className="">
            <p className="text-[14px] mb-2 mt-1 font-semibold text-left pl-3">
              Connected Wallet
            </p>
            <Slider {...settings}>
              <div className="wallet-card-main-container">
                <div class="card-wallet work">
                  <div class="card-wallet-img-section">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="77"
                      width="76"
                    >
                      <path
                        fill-rule="nonzero"
                        fill="#3F9CBB"
                        d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z"
                      ></path>
                    </svg>{" "}
                  </div>
                  <div class="card-wallet-desc">
                    <div class="card-wallet-header">
                      <div>
                        <img
                          src={Metamask}
                          className="w-[30px] mr-2 bg-[#fff] rounded-full p-[3px]"
                        />
                      </div>
                      <div class="card-wallet-title">Metamask</div>
                    </div>
                    <div class="card-wallet-time">32hrs</div>
                    <p class="recent">Last Week-36hrs</p>
                  </div>
                </div>
              </div>
              <div className="wallet-card-main-container">
                <div class="card-wallet work">
                  <div class="card-wallet-img-section">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="77"
                      width="76"
                    >
                      <path
                        fill-rule="nonzero"
                        fill="#3F9CBB"
                        d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z"
                      ></path>
                    </svg>{" "}
                  </div>
                  <div class="card-wallet-desc">
                    <div class="card-wallet-header">
                      <div>
                        <img
                          src={Coinbase}
                          className="w-[30px] mr-2 bg-[#fff] rounded-full p-[3px]"
                        />
                      </div>
                      <div class="card-wallet-title">Coinbase</div>
                    </div>
                    <div class="card-wallet-time">32hrs</div>
                    <p class="recent">Last Week-36hrs</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="pending-document-container">
          <div className="text-[14px] mb-3 mt-3 font-semibold text-left pl-3">
            Pending Documents
          </div>
          <div className="signed-document-card flex items-center p-2 bg-[#fff] rounded-[12px] mb-2 border-gray-100 border ">
            {/* <img src={PdfIcon} className="w-[50px] mr-2 " / > */}
            <div className="w-[3.649px] h-[32.84px] flex-shrink-0 rounded-[2.8px] bg-[#ED5B75] ml-3 mr-3"></div>
            <div>
              <div className="text-[13px] font-medium">
                Agreement between A and B
              </div>
              <div className="text-[13px]">12 July 2023</div>
            </div>
          </div>
          <div className="signed-document-card flex items-center p-2 bg-[#fff] rounded-[12px] mb-2 border-gray-100 border">
            <div className="w-[3.649px] h-[32.84px] flex-shrink-0 rounded-[2.8px] bg-[#FBB142] ml-3 mr-3"></div>
            <div>
              <div className="text-[13px] font-medium">
                Agreement between A and B
              </div>
              <div className="text-[13px]">12 July 2023</div>
            </div>
          </div>
          <div className="signed-document-card flex items-center p-2 bg-[#fff] rounded-[12px] mb-2 border-gray-100 border">
            <div className="w-[3.649px] h-[32.84px] flex-shrink-0 rounded-[2.8px] bg-[#4FDFB1] ml-3 mr-3"></div>
            <div>
              <div className="text-[13px] font-medium">
                Agreement between A and B
              </div>
              <div className="text-[13px]">12 July 2023</div>
            </div>
          </div>
          <div className="signed-document-card flex items-center p-2 bg-[#fff] rounded-[12px] mb-2 border-gray-100 border">
            <div className="w-[3.649px] h-[32.84px] flex-shrink-0 rounded-[2.8px] bg-[#ED5B75] ml-3 mr-3"></div>
            <div>
              <div className="text-[13px] font-medium">
                Agreement between A and B
              </div>
              <div className="text-[13px]">12 July 2023</div>
            </div>
          </div>
          <div className="signed-document-card flex items-center p-2 bg-[#fff] rounded-[12px] mb-2 border-gray-100 border">
            <div className="w-[3.649px] h-[32.84px] flex-shrink-0 rounded-[2.8px] bg-[#FBB142] ml-3 mr-3"></div>
            <div>
              <div className="text-[13px] font-medium">
                Agreement between A and B
              </div>
              <div className="text-[13px]">12 July 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingDocuments;
