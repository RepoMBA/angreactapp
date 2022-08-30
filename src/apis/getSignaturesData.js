import React from "react";
import axios from "axios";

export const getSignatures = async () => {
  const mySignatureData = [];
  const data = {
    userId: localStorage.getItem("id"),
  };
  await axios
    .post(
      `${process.env.REACT_APP_NODEAPI_BASE_URL}/api/signature/getSignatures`,
      data
    )
    .then((res) => {
      console.log("sigs", res.data);
      res.data.map((val, index) => {
        const d = {
          title: `Signature ${index + 1}`,
          buttonLabel: "Use",
          signatureName: val.signatureName,
          date: val.timeStamp ? val.timeStamp : "",
          signatureUrl: val.signatureUrl,
          signatureTransactionHash: val.transactionHash,
          signatureBlockHash: val.blockHash,
        };
        mySignatureData.push(d);
      });
    })
    .catch((err) => console.log(err));

  if (mySignatureData.length > 0) {
    return mySignatureData;
  } else {
    throw "No data found";
  }
};
