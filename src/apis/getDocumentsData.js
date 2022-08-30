import React from "react";
import axios from "axios";

export const getDocuments = async () => {
  const mydocumentsData = [];
  const data = {
    userId: localStorage.getItem("id"),
    email: localStorage.getItem("email"),
  };
  await axios
    .post(
      `${process.env.REACT_APP_NODEAPI_BASE_URL}/api/signature/getDocuments`,
      data
    )
    .then((res) => {
      console.log("docs", res.data);
      res.data.map((val, index) => {
        const d = {
          documentId: val._id,
          documentName: val.documentName,
          senderName: val.senderName ? val.senderName : "",
          documentUrl: val.documentUrl,
          date: val.timeStamp ? val.timeStamp.toString().substring(4, 25) : "",
          status: val.status,
        };
        mydocumentsData.push(d);
      });
    })
    .catch((err) => console.log(err));

  if (mydocumentsData.length > 0) {
    return mydocumentsData;
  } else {
    throw "No data found";
  }
};
