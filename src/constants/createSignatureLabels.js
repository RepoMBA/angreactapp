import React from "react";

export const buttonLabel = {
  buttonTitle: "Create Signature",
  helperText: "accept btn",
};

export const uploadSignatureButton = {
  buttonTitle: "Upload Signature",
  helperText: "accept btn",
};
export const signOnlineButton = {
  buttonTitle: "Sign Online",
};

export const createSignatureCardLabels = [
  {
    title: "Signature 1",
    date: "December 23, 2018",
    text: "ABC",
    
    buttonLabel: "Use",
  },
  {
    title: "Signature 2",
    date: "December 23, 2018",
    text: "XYZ",
    
    buttonLabel: "Use",
  },
  {
    title: "Signature 3",
    date: "December 23, 2018",
    text: "PQR",
   
    buttonLabel: "Use",
  },
];

export const ContractAbiUpload = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "s1",
    outputs: [
      {
        internalType: "string",
        name: "documentHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "firstPartyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "firstPartyAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "firstPartyContactPerson",
        type: "string",
      },
      {
        internalType: "string",
        name: "secondPartyname",
        type: "string",
      },
      {
        internalType: "string",
        name: "secondPartyAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "secondPartyContactPerson",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_documentHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "_firstPartyName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_firstPartyAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "_firstPartyContactPerson",
        type: "string",
      },
      {
        internalType: "string",
        name: "_secondPartyname",
        type: "string",
      },
      {
        internalType: "string",
        name: "_secondPartyAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "_secondPartyContactPerson",
        type: "string",
      },
    ],
    name: "AddtoBlockchain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
