import React, { useEffect, useState } from "react";
import {
  createSignatureCardLabels,
  buttonLabel,
  uploadSignatureButton,
  signOnlineButton,
  ContractAbiUpload,
} from "../../constants/createSignatureLabels";
import SignatureCard from "./SignatureCard";
import axios from "axios";
import Web3 from "web3";
import { getSignatures } from "../../apis/getSignaturesData";
import { toast, ToastContainer } from "react-toastify";

import "../../css/createSignature.css";
import "../../css/spin.css";

function CreateSignature() {
  const [documentHash, setDocumentHash] = useState("");
  const [metamaskAccount, setMetamaskAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionData, setTransactionData] = useState(null);
  const [signatureData, setSignatureData] = useState(null);

  useEffect(() => {
    getSignatures()
      .then((res) => {
        console.log(res);
        setSignatureData(res);
      })
      .catch((err) => {
        console.log("no signature found");
        setSignatureData(null);
      });
  }, []);

  const CreateSignatureFunc = (file) => {
    setIsLoading(true);
    console.log("file to create", file);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post(
          `${process.env.REACT_APP_NODEAPI_BASE_URL}/api/signature/uploadFileToIpfs`,
          formData
        )
        .then((res) => {
          console.log("res", res);
          setDocumentHash(res.data.hash);
          addDataToBlockChain(res.data.hash, file);
        })
        .catch((err) => {
          console.log("err", err);
          toast.error("File upload failed!");
          setIsLoading(false);
        });
    }
  };

  const addDataToBlockChain = async (ipfsDocHash, file) => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      toast.error(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
      setIsLoading(false);
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    setMetamaskAccount(account);
    window.ethereum.on("accountsChanged", function (accounts) {
      console.log("changed accounts", accounts[0]);
      setMetamaskAccount(accounts[0]);
    });

    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(
      ContractAbiUpload,
      "0x328164a346FA4bE78dC05a102efBAd81CBD236C7"
    );

    await contract.methods
      .AddtoBlockchain(
        ` documentHash : ${ipfsDocHash}`,
        ` Date : ${new Date()}`,
        ` angootha user_id : ${localStorage.getItem("id")}`,
        ``,
        ``,
        ``,
        ``
      )
      .send({ from: account, gasPrice: "40000000000" })
      .then((r) => {
        console.log("Signature success result", r);
        setTransactionData(r);
        let signatureData = {
          email: localStorage.getItem("email"),
          signatureLink: ipfsDocHash,
          signatureName: file.name.split(".")[0],
          transactionHash: r.transactionHash,
          blockHash: r.blockHash,
          userName: localStorage.getItem("userName"),
          userId: localStorage.getItem("id"),
        };

        axios
          .post(
            `${process.env.REACT_APP_NODEAPI_BASE_URL}/api/signature/addSignature`,
            signatureData
          )
          .then((res) => {
            console.log(res);
            toast.info("Signature created successfully!");
            getSignatures()
              .then((res) => {
                console.log(res);
                setSignatureData(res);
              })
              .catch((err) => {
                console.log("no signature found");
                setSignatureData(null);
              });
            setIsLoading(false);
          })
          .catch((err) => {
            console.log("err in sig", err);
            toast.error("Signature creation failed!");
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.log("err in payment", err);
        toast.error("Payment Failed. Please try again!");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    console.log("data sig", signatureData);
  }, [signatureData]);

  return (
    <div className="page-wrapper">
      <ToastContainer />
      <div className="ml-4 mt-3">
        <span className="create-signature-button-helper-text">
          {buttonLabel.helperText}
        </span>
        <br />
        <label
          htmlFor="imageFileForSignature"
          className="common-btn"
          style={{ width: "fit-content", cursor: "pointer" }}
        >
          {buttonLabel.buttonTitle}
        </label>
        <input
          type="file"
          accept="image/*"
          id="imageFileForSignature"
          style={{ display: "none" }}
          onChange={(e) => {
            CreateSignatureFunc(e.target.files[0]);
          }}
        />
      </div>
      {isLoading ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        ""
      )}
      {/* <div className=" ml-4 mt-3 d-flex">
        <div>
          <span className="create-signature-button-helper-text">
            {uploadSignatureButton.helperText}
          </span>{" "}
          <br />
          <button className="common-btn">
            {uploadSignatureButton.buttonTitle}
          </button>
        </div>
        <div className="mt-auto ml-5">
          <button className="common-btn">{signOnlineButton.buttonTitle}</button>
        </div>
      </div> */}
      <div className="d-flex flex-column mt-5">
        {signatureData ? (
          signatureData.map((cardVal, index) => {
            return (
              <div className="col-md-7">
                <SignatureCard
                  title={cardVal.title}
                  date={cardVal.date}
                  buttonLabel={cardVal.buttonLabel}
                  signatureName={cardVal.signatureName}
                />
              </div>
            );
          })
        ) : (
          <h3 className="text-primary"> No signature created yet. </h3>
        )}
      </div>
    </div>
  );
}

export default CreateSignature;
