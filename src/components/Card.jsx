import { FaBed, FaBath, FaCar, FaDollarSign } from 'react-icons/fa';
import React, { useState } from 'react';
import Web3 from 'web3';
const ethers = require("ethers")

const Card = ({ product }) => {
  const { productName, price, image, description, productOwner } = product;
  const web3 = new Web3(Web3.givenProvider || 'https://rpc-mumbai.maticvigil.com');

const contractABI = [
  {
    "_format": "hh-sol-artifact-1",
    "contractName": "ProductPurchase",
    "sourceName": "contracts/ProductPurchase.sol",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "allLockData",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "locked",
            "type": "bool"
          },
          {
            "internalType": "bytes32",
            "name": "key",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_seller",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "_key",
            "type": "bytes32"
          }
        ],
        "name": "buyProduct",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAllLockData",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "seller",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "buyer",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "locked",
                "type": "bool"
              },
              {
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
              }
            ],
            "internalType": "struct ProductPurchase.LockData[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAllLockDataKeys",
        "outputs": [
          {
            "internalType": "bytes32[]",
            "name": "",
            "type": "bytes32[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_key",
            "type": "bytes32"
          }
        ],
        "name": "getLockDataByKey",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "seller",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "buyer",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "locked",
                "type": "bool"
              },
              {
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
              }
            ],
            "internalType": "struct ProductPurchase.LockData",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "lockDataKeys",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "lockDataMap",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "locked",
            "type": "bool"
          },
          {
            "internalType": "bytes32",
            "name": "key",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_key",
            "type": "bytes32"
          }
        ],
        "name": "unlockMoney",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610942806100326000396000f3fe6080604052600436106100865760003560e01c8063522eae7b11610059578063522eae7b146101b0578063563e5947146101c35780638da5cb5b146102195780638fc99bcb14610251578063a2f2d0b8146102ac57600080fd5b806310d090981461008b57806336632607146100b65780634b90f0b61461016c5780634e90c2801461018e575b600080fd5b34801561009757600080fd5b506100a06102da565b6040516100ad91906107e1565b60405180910390f35b3480156100c257600080fd5b5061015f6100d1366004610825565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915250600090815260016020818152604092839020835160a08101855281548152928101546001600160a01b0390811692840192909252600281015491821693830193909352600160a01b900460ff1615156060820152600390910154608082015290565b6040516100ad919061087e565b34801561017857600080fd5b50610181610332565b6040516100ad9190610892565b34801561019a57600080fd5b506101ae6101a9366004610825565b6103d3565b005b6101ae6101be3660046108d4565b6104f5565b3480156101cf57600080fd5b506101e36101de366004610825565b61076c565b604080519586526001600160a01b039485166020870152929093169184019190915215156060830152608082015260a0016100ad565b34801561022557600080fd5b50600054610239906001600160a01b031681565b6040516001600160a01b0390911681526020016100ad565b34801561025d57600080fd5b506101e361026c366004610825565b600160208190526000918252604090912080549181015460028201546003909201546001600160a01b039182169291821691600160a01b900460ff169085565b3480156102b857600080fd5b506102cc6102c7366004610825565b6107c0565b6040519081526020016100ad565b6060600280548060200260200160405190810160405280929190818152602001828054801561032857602002820191906000526020600020905b815481526020019060010190808311610314575b5050505050905090565b60606003805480602002602001604051908101604052809291908181526020016000905b828210156103ca5760008481526020908190206040805160a08101825260048602909201805483526001808201546001600160a01b0390811685870152600283015490811693850193909352600160a01b90920460ff16151560608401526003015460808301529083529092019101610356565b50505050905090565b6000818152600160208190526040909120908101546001600160a01b031633146104505760405162461bcd60e51b8152602060048201526024808201527f4f6e6c79207468652073656c6c65722063616e20756e6c6f636b207468652066604482015263756e647360e01b60648201526084015b60405180910390fd5b6002810154600160a01b900460ff166104a25760405162461bcd60e51b8152602060048201526014602482015273119d5b991cc8185c99481b9bdd081b1bd8dad95960621b6044820152606401610447565b600181015481546040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104df573d6000803e3d6000fd5b5060008155600201805460ff60a01b1916905550565b600034116105505760405162461bcd60e51b815260206004820152602260248201527f416d6f756e742073656e74206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608401610447565b6000818152600160208190526040909120908101546001600160a01b038481169116146105bf5760405162461bcd60e51b815260206004820152601f60248201527f53656c6c65722773206164647265737320646f6573206e6f74206d61746368006044820152606401610447565b6002810154600160a01b900460ff161561061b5760405162461bcd60e51b815260206004820152601860248201527f46756e64732061726520616c7265616479206c6f636b656400000000000000006044820152606401610447565b34815560028082018054600160a01b6001600160a81b03199182163360ff60a01b19161781178355835460018181019095557f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0195909555600380548085018255600082905285547fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b600490920291820155938501547fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c850180546001600160a01b039283166001600160a01b03199182161790915584547fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d87018054919093169181168217835594549490931690921760ff938790049390931615159095029190911790559101547fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85e9091015550565b6003818154811061077c57600080fd5b600091825260209091206004909102018054600182015460028301546003909301549193506001600160a01b039081169290811691600160a01b90910460ff169085565b600281815481106107d057600080fd5b600091825260209091200154905081565b6020808252825182820181905260009190848201906040850190845b81811015610819578351835292840192918401916001016107fd565b50909695505050505050565b60006020828403121561083757600080fd5b5035919050565b805182526020808201516001600160a01b039081169184019190915260408083015190911690830152606080820151151590830152608090810151910152565b60a0810161088c828461083e565b92915050565b6020808252825182820181905260009190848201906040850190845b81811015610819576108c183855161083e565b9284019260a092909201916001016108ae565b600080604083850312156108e757600080fd5b82356001600160a01b03811681146108fe57600080fd5b94602093909301359350505056fea264697066735822122069d6788997e8fd8a205f2dc4cd76a65ffaa67de60489db59e5d78e2bacaabecb64736f6c63430008090033",
    "deployedBytecode": "0x6080604052600436106100865760003560e01c8063522eae7b11610059578063522eae7b146101b0578063563e5947146101c35780638da5cb5b146102195780638fc99bcb14610251578063a2f2d0b8146102ac57600080fd5b806310d090981461008b57806336632607146100b65780634b90f0b61461016c5780634e90c2801461018e575b600080fd5b34801561009757600080fd5b506100a06102da565b6040516100ad91906107e1565b60405180910390f35b3480156100c257600080fd5b5061015f6100d1366004610825565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915250600090815260016020818152604092839020835160a08101855281548152928101546001600160a01b0390811692840192909252600281015491821693830193909352600160a01b900460ff1615156060820152600390910154608082015290565b6040516100ad919061087e565b34801561017857600080fd5b50610181610332565b6040516100ad9190610892565b34801561019a57600080fd5b506101ae6101a9366004610825565b6103d3565b005b6101ae6101be3660046108d4565b6104f5565b3480156101cf57600080fd5b506101e36101de366004610825565b61076c565b604080519586526001600160a01b039485166020870152929093169184019190915215156060830152608082015260a0016100ad565b34801561022557600080fd5b50600054610239906001600160a01b031681565b6040516001600160a01b0390911681526020016100ad565b34801561025d57600080fd5b506101e361026c366004610825565b600160208190526000918252604090912080549181015460028201546003909201546001600160a01b039182169291821691600160a01b900460ff169085565b3480156102b857600080fd5b506102cc6102c7366004610825565b6107c0565b6040519081526020016100ad565b6060600280548060200260200160405190810160405280929190818152602001828054801561032857602002820191906000526020600020905b815481526020019060010190808311610314575b5050505050905090565b60606003805480602002602001604051908101604052809291908181526020016000905b828210156103ca5760008481526020908190206040805160a08101825260048602909201805483526001808201546001600160a01b0390811685870152600283015490811693850193909352600160a01b90920460ff16151560608401526003015460808301529083529092019101610356565b50505050905090565b6000818152600160208190526040909120908101546001600160a01b031633146104505760405162461bcd60e51b8152602060048201526024808201527f4f6e6c79207468652073656c6c65722063616e20756e6c6f636b207468652066604482015263756e647360e01b60648201526084015b60405180910390fd5b6002810154600160a01b900460ff166104a25760405162461bcd60e51b8152602060048201526014602482015273119d5b991cc8185c99481b9bdd081b1bd8dad95960621b6044820152606401610447565b600181015481546040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104df573d6000803e3d6000fd5b5060008155600201805460ff60a01b1916905550565b600034116105505760405162461bcd60e51b815260206004820152602260248201527f416d6f756e742073656e74206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608401610447565b6000818152600160208190526040909120908101546001600160a01b038481169116146105bf5760405162461bcd60e51b815260206004820152601f60248201527f53656c6c65722773206164647265737320646f6573206e6f74206d61746368006044820152606401610447565b6002810154600160a01b900460ff161561061b5760405162461bcd60e51b815260206004820152601860248201527f46756e64732061726520616c7265616479206c6f636b656400000000000000006044820152606401610447565b34815560028082018054600160a01b6001600160a81b03199182163360ff60a01b19161781178355835460018181019095557f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0195909555600380548085018255600082905285547fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b600490920291820155938501547fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c850180546001600160a01b039283166001600160a01b03199182161790915584547fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d87018054919093169181168217835594549490931690921760ff938790049390931615159095029190911790559101547fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85e9091015550565b6003818154811061077c57600080fd5b600091825260209091206004909102018054600182015460028301546003909301549193506001600160a01b039081169290811691600160a01b90910460ff169085565b600281815481106107d057600080fd5b600091825260209091200154905081565b6020808252825182820181905260009190848201906040850190845b81811015610819578351835292840192918401916001016107fd565b50909695505050505050565b60006020828403121561083757600080fd5b5035919050565b805182526020808201516001600160a01b039081169184019190915260408083015190911690830152606080820151151590830152608090810151910152565b60a0810161088c828461083e565b92915050565b6020808252825182820181905260009190848201906040850190845b81811015610819576108c183855161083e565b9284019260a092909201916001016108ae565b600080604083850312156108e757600080fd5b82356001600160a01b03811681146108fe57600080fd5b94602093909301359350505056fea264697066735822122069d6788997e8fd8a205f2dc4cd76a65ffaa67de60489db59e5d78e2bacaabecb64736f6c63430008090033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  
];
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function handleSubmit(e) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum); // Assuming you're using MetaMask
    await window.ethereum.enable(); // Request user permission

    const accounts = await provider.listAccounts();
    if (accounts.length > 0) {
      console.log('Connected account:', accounts[0]);
      // do the transaction
      const accounts = await web3.eth.getAccounts();
      const from = accounts[0];

      // Replace 'myFunction' with the name of the function in your smart contract
      await contract.methods.buyProduct().send({ from });
    } else {
      console.error('No connected accounts.');
    }
  } catch (error) {
    console.error('Error connecting to the provider:', error);
  }
}


  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   //alert('You clicked submit.')
  //   //console.log('You clicked submit.');
  //   try {
  //     const accounts = await Web3.eth.getAccounts();
  //     const from = accounts[0]; // Assuming the user's account is the first account
  
  //     // Replace 'myFunction' with the name of the function in your smart contract
  //     await contract.methods.myFunction().send({ from });
  //     //console.log('Transaction sent!');
  //   } catch (error) {
  //     console.error('Error sending transaction: ', error);
  //   }

  //   try {
  //     const provider = new web3.providers.Web3Provider(window.ethereum); // Assuming you're using MetaMask
  //     await window.ethereum.enable(); // Request user permission
  
  //     const accounts = await provider.listAccounts();
  //     if (accounts.length > 0) {
  //       console.log('Connected account:', accounts[0]);
  //       const accounts = await Web3.eth.getAccounts();
  //     const from = accounts[0]; // Assuming the user's account is the first account
  
  //     // Replace 'myFunction' with the name of the function in your smart contract
  //     await contract.methods.buyProduct().send({ from });
  //     } else {
  //       console.error('No connected accounts.');
  //     }
  //   } catch (error) {
  //     console.error('Error connecting to the provider:', error);
  //   }
  // }
  

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-black">
        <div className='h-[300px] w-[400px]'>
          <img src={image} alt={productName} className="w-[100%] h-[100%] object-cover" />
        </div>
      <div className="px-6 py-1">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <div className="flex items-center">
          <span className="ml-2 font-semibold text-xl">{price} Eth</span>
        </div>
        <p className="text-gray-700 my-4 flex">
          {
            description
          }
        </p>
      </div>
      <div className="px-6 py-1">
      <form onSubmit={handleSubmit}>
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Buy
        </button>
     </form>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600">Product Owner: {productOwner}</p>
      </div>
    </div>
  );
};

export default Card;
