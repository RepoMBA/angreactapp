import React, { useEffect, useState } from "react";
import { Button, Popover, Modal } from "antd";
import { getSignatures } from "../../apis/getSignaturesData";
import { toast, ToastContainer } from "react-toastify";
import Web3 from "web3";
import { ContractAbiUpload } from "../../constants/createSignatureLabels";
import axios from "axios";
import { getDocuments } from "../../apis/getDocumentsData";
import { Document, Page, pdfjs } from "react-pdf";
import "../../css/spin.css";
import "../../css/pendingDocuments.css";
import "antd/dist/antd.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PendingDocuments() {
  const [signatureData, setSignatureData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [metamaskAccount, setMetamaskAccount] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [documentData, setDocumentData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [docPdfUrl, setDocPdfUrl] = useState("");
  const [visible, setVisible] = useState(false);

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
    getDocuments()
      .then((res) => {
        console.log(res);
        setDocumentData(res);
      })
      .catch((err) => {
        console.log("no signature found");
        setDocumentData(null);
      });
  }, []);

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const rejectDocumentSign = (id) => {
    const data = {
      email: localStorage.getItem("email"),
      documentId: id,
      status: "Rejected",
    };
    axios
      .post(
        `${process.env.REACT_APP_NODEAPI_BASE_URL}/api/signature/updateDocument`,
        data
      )
      .then((res) => {
        console.log(res);
        toast.info("Document rejected successfully!");
        getDocuments()
          .then((res) => {
            console.log(res);
            setDocumentData(res);
          })
          .catch((err) => {
            console.log("no signature found");
            setDocumentData(null);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Connection failed.Please try again!");
      });
  };

  const signDocument = async (data) => {
    setIsLoading(true);
    console.log("sign doc", documentName, data);
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
        ` signatureHash : ${data.signatureUrl}`,
        ` Date : ${new Date()}`,
        ` signer user_id : ${localStorage.getItem("id")}`,
        ` signer username : ${localStorage.getItem("userName")}`,
        `signatureBlockHash : ${data.signatureBlockHash}`,
        `signatureTransactionHash : ${data.signatureTransactionHash}`,
        `documentName: ${documentName}`
      )
      .send({ from: account, gasPrice: "40000000000" })
      .then((r) => {
        console.log("Signature success result", r);
        // setTransactionData(r);
        let signedDocumentData = {
          email: localStorage.getItem("email"),
          documentName: documentName,
          signatureTransactionHash: data.signatureTransactionHash,
          signatureBlockHash: data.signatureBlockHash,
          signatureName: data.signatureName,
          transactionHash: r.transactionHash,
          blockHash: r.blockHash,
          signerName: localStorage.getItem("userName"),
          signerId: localStorage.getItem("id"),
          status: "Signed",
        };

        axios
          .post(
            `${process.env.REACT_APP_NODEAPI_BASE_URL}/api/signature/addSignedDocument`,
            signedDocumentData
          )
          .then((res) => {
            console.log(res);
            axios
              .post(
                `${process.env.REACT_APP_NODEAPI_BASE_URL}/api/signature/deleteDocument`,
                {
                  documentId: documentId,
                }
              )
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
            toast.info("Document Signed successfully!");
            getDocuments()
              .then((res) => {
                console.log(res);
                setDocumentData(res);
              })
              .catch((err) => {
                console.log("no signature found");
                setDocumentData(null);
              });
            setIsLoading(false);
          })
          .catch((err) => {
            console.log("err in sig", err);
            toast.error("Document Signature failed!");
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.log("err in payment", err);
        toast.error("Payment Failed. Please try again!");
        setIsLoading(false);
      });
  };
  const content = (
    <div style={{ width: "400px" }}>
      {isLoading ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div>
          {signatureData
            ? signatureData.map((val, index) => {
                return (
                  <div key={index} className="d-flex justify-content-around">
                    <p>
                      Sign {index + 1} / {val.signatureName}
                    </p>
                    <button
                      className="common-btn3 mb-2"
                      onClick={() => {
                        signDocument(val);
                      }}
                    >
                      Use
                    </button>
                  </div>
                );
              })
            : "No signature Found. Please create first."}
        </div>
      )}
    </div>
  );

  const PendingDocCard1 = (data, index) => {
    return (
      <div className="pending-document-card">
        <h4>{data.documentName}</h4>
        <p>Date: {data.date}</p>
        <p>Sent By: {data.senderName}</p>
        <p>Status: {data.status}</p>

        <div className="text-right mt-3">
          <button
            className="common-btn3 mr-sm-0 mr-md-3"
            id={`viewButton-${index + 1}`}
            onClick={() => {
              setDocumentName(data.documentName);
              setDocPdfUrl(data.documentUrl);
              showModal();
            }}
          >
            View
          </button>
          <button
            className="common-btn3 mr-sm-0 mr-md-3 my-2"
            id={`rejectButton-${index + 1}`}
            onClick={() => {
              rejectDocumentSign(data.documentId);
            }}
            disabled={data.status === "Rejected" ? true : false}
          >
            Reject
          </button>
          {data.status === "Rejected" ? (
            <button
              className="common-btn3"
              id={`signButton-${index + 1}`}
              disabled
            >
              Sign
            </button>
          ) : (
            <Popover content={content} title="Select Signature" trigger="click">
              <button
                className="common-btn3"
                id={`signButton-${index + 1}`}
                onClick={() => {
                  setDocumentName(data.documentName);
                  setDocumentId(data.documentId);
                }}
              >
                Sign
              </button>
            </Popover>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="page-wrapper">
      <ToastContainer />
      <h2 className="text-white">Pending Documents</h2>

      <div className="d-flex  flex-wrap">
        {documentData ? (
          documentData.map((val, index) => {
            return (
              <div className="col-xs-12 col-md-6">
                {PendingDocCard1(val, index)}
              </div>
            );
          })
        ) : (
          <h3>No pending Document </h3>
        )}
      </div>

      <Modal
        visible={visible}
        title={documentName}
        width={920}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        {docPdfUrl ? (
          <Document
            file={docPdfUrl}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
            }}
            className="pdfDocumenrt"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        ) : (
          "No document found"
        )}
      </Modal>
    </div>
  );
}

export default PendingDocuments;
