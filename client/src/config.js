export const TASK_ADDRESS = 'YOUR_SMART_CONTRACT_ADDRESS_GOES_HERE'

export const TASK_ABI = [

{
    "contractName": "Task",
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "TaskId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "name": "NewTask",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "taskToOwner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tasks",
        "outputs": [
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"TaskId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"name\":\"NewTask\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"taskToOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tasks\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/laurendutton/dev/karma_coin/contracts/Tasks.sol\":\"Task\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/laurendutton/dev/karma_coin/contracts/Tasks.sol\":{\"keccak256\":\"0x4e5d6b39c4e8d9be598bb9d9e5404acc2a5dfca590d98b6ebc73710a4bd58b8c\",\"urls\":[\"bzz-raw://73f6fbc65864d29820e641a868feceeaa9931f3d91ff6e3be471d7f1e64df74d\",\"dweb:/ipfs/QmVay6HoHT9H13U29XRZXpP1UwWNRADAtuGEv43fhSfCVK\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50610288806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636641c6c41461003b5780638d977672146100a9575b600080fd5b6100676004803603602081101561005157600080fd5b8101908080359060200190929190505050610157565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100d5600480360360208110156100bf57600080fd5b810190808035906020019092919050505061018a565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561011b578082015181840152602081019050610100565b50505050905090810190601f1680156101485780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000818154811061019757fe5b9060005260206000209060020201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102435780601f1061021857610100808354040283529160200191610243565b820191906000526020600020905b81548152906001019060200180831161022657829003601f168201915b505050505090806001015490508256fea265627a7a72315820fdbeb894952813ca92cef03a117a210d80dd270778a2326a43d3ca2b4bdb045264736f6c63430005100032",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c80636641c6c41461003b5780638d977672146100a9575b600080fd5b6100676004803603602081101561005157600080fd5b8101908080359060200190929190505050610157565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100d5600480360360208110156100bf57600080fd5b810190808035906020019092919050505061018a565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561011b578082015181840152602081019050610100565b50505050905090810190601f1680156101485780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000818154811061019757fe5b9060005260206000209060020201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102435780601f1061021857610100808354040283529160200191610243565b820191906000526020600020905b81548152906001019060200180831161022657829003601f168201915b505050505090806001015490508256fea265627a7a72315820fdbeb894952813ca92cef03a117a210d80dd270778a2326a43d3ca2b4bdb045264736f6c63430005100032",
    "sourceMap": "35:435:2:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;35:435:2;;;;;;;",
    "deployedSourceMap": "35:435:2:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;35:435:2;;;;;;;;;;;;;;;;;;;;;;;;210:44;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;210:44:2;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;184:19;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;184:19:2;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;184:19:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;210:44;;;;;;;;;;;;;;;;;;;;;;:::o;184:19::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity >=0.5.0 <0.6.0;\n\n\n\ncontract Task {\n\n    event NewTask(uint TaskId, string title, uint price);\n\n    struct Task {\n      string title;\n      uint price;\n     \n    }\n\n    Task[] public tasks;\n\n    mapping (uint => address) public taskToOwner;\n \n\n    function _createTask(string memory _title, uint _price) internal {\n        uint id = tasks.push(Task(_title, _price));\n        taskToOwner[id] = msg.sender;\n        emit NewTask(id, _title, _price);\n    }\n\n}",
    "sourcePath": "/Users/laurendutton/dev/karma_coin/contracts/Tasks.sol",
    "ast": {
      "absolutePath": "/Users/laurendutton/dev/karma_coin/contracts/Tasks.sol",
      "exportedSymbols": {
        "Task": [
          110
        ]
      },
      "id": 111,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 58,
          "literals": [
            "solidity",
            ">=",
            "0.5",
            ".0",
            "<",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:31:2"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 110,
          "linearizedBaseContracts": [
            110
          ],
          "name": "Task",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "documentation": null,
              "id": 66,
              "name": "NewTask",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 65,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 60,
                    "indexed": false,
                    "name": "TaskId",
                    "nodeType": "VariableDeclaration",
                    "scope": 66,
                    "src": "70:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 59,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "70:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 62,
                    "indexed": false,
                    "name": "title",
                    "nodeType": "VariableDeclaration",
                    "scope": 66,
                    "src": "83:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 61,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "83:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 64,
                    "indexed": false,
                    "name": "price",
                    "nodeType": "VariableDeclaration",
                    "scope": 66,
                    "src": "97:10:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 63,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "97:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "69:39:2"
              },
              "src": "56:53:2"
            },
            {
              "canonicalName": "Task.Task",
              "id": 71,
              "members": [
                {
                  "constant": false,
                  "id": 68,
                  "name": "title",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "135:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "135:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 70,
                  "name": "price",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "155:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 69,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "155:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Task",
              "nodeType": "StructDefinition",
              "scope": 110,
              "src": "115:63:2",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 74,
              "name": "tasks",
              "nodeType": "VariableDeclaration",
              "scope": 110,
              "src": "184:19:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Task_$71_storage_$dyn_storage",
                "typeString": "struct Task.Task[]"
              },
              "typeName": {
                "baseType": {
                  "contractScope": null,
                  "id": 72,
                  "name": "Task",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 71,
                  "src": "184:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Task_$71_storage_ptr",
                    "typeString": "struct Task.Task"
                  }
                },
                "id": 73,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "184:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Task_$71_storage_$dyn_storage_ptr",
                  "typeString": "struct Task.Task[]"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 78,
              "name": "taskToOwner",
              "nodeType": "VariableDeclaration",
              "scope": 110,
              "src": "210:44:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 77,
                "keyType": {
                  "id": 75,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "219:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "210:25:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 76,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "227:7:2",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 108,
                "nodeType": "Block",
                "src": "328:139:2",
                "statements": [
                  {
                    "assignments": [
                      86
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 86,
                        "name": "id",
                        "nodeType": "VariableDeclaration",
                        "scope": 108,
                        "src": "338:7:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 85,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "338:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 94,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 90,
                              "name": "_title",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 80,
                              "src": "364:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 91,
                              "name": "_price",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "372:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 89,
                            "name": "Task",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71,
                            "src": "359:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_Task_$71_storage_ptr_$",
                              "typeString": "type(struct Task.Task storage pointer)"
                            }
                          },
                          "id": 92,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "359:20:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Task_$71_memory",
                            "typeString": "struct Task.Task memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Task_$71_memory",
                            "typeString": "struct Task.Task memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 87,
                          "name": "tasks",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "348:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Task_$71_storage_$dyn_storage",
                            "typeString": "struct Task.Task storage ref[] storage ref"
                          }
                        },
                        "id": 88,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "348:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Task_$71_storage_$returns$_t_uint256_$",
                          "typeString": "function (struct Task.Task storage ref) returns (uint256)"
                        }
                      },
                      "id": 93,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "348:32:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "338:42:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 95,
                          "name": "taskToOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78,
                          "src": "390:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 97,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 96,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86,
                          "src": "402:2:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "390:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 98,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125,
                          "src": "408:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 99,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "408:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "390:28:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 101,
                    "nodeType": "ExpressionStatement",
                    "src": "390:28:2"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 103,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86,
                          "src": "441:2:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 104,
                          "name": "_title",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 80,
                          "src": "445:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 105,
                          "name": "_price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 82,
                          "src": "453:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 102,
                        "name": "NewTask",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "433:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                          "typeString": "function (uint256,string memory,uint256)"
                        }
                      },
                      "id": 106,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "433:27:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 107,
                    "nodeType": "EmitStatement",
                    "src": "428:32:2"
                  }
                ]
              },
              "documentation": null,
              "id": 109,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_createTask",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 83,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 80,
                    "name": "_title",
                    "nodeType": "VariableDeclaration",
                    "scope": 109,
                    "src": "284:20:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 79,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "284:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 82,
                    "name": "_price",
                    "nodeType": "VariableDeclaration",
                    "scope": 109,
                    "src": "306:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 81,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "306:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "283:35:2"
              },
              "returnParameters": {
                "id": 84,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "328:0:2"
              },
              "scope": 110,
              "src": "263:204:2",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            }
          ],
          "scope": 111,
          "src": "35:435:2"
        }
      ],
      "src": "0:470:2"
    },
    "legacyAST": {
      "absolutePath": "/Users/laurendutton/dev/karma_coin/contracts/Tasks.sol",
      "exportedSymbols": {
        "Task": [
          110
        ]
      },
      "id": 111,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 58,
          "literals": [
            "solidity",
            ">=",
            "0.5",
            ".0",
            "<",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:31:2"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 110,
          "linearizedBaseContracts": [
            110
          ],
          "name": "Task",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "documentation": null,
              "id": 66,
              "name": "NewTask",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 65,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 60,
                    "indexed": false,
                    "name": "TaskId",
                    "nodeType": "VariableDeclaration",
                    "scope": 66,
                    "src": "70:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 59,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "70:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 62,
                    "indexed": false,
                    "name": "title",
                    "nodeType": "VariableDeclaration",
                    "scope": 66,
                    "src": "83:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 61,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "83:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 64,
                    "indexed": false,
                    "name": "price",
                    "nodeType": "VariableDeclaration",
                    "scope": 66,
                    "src": "97:10:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 63,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "97:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "69:39:2"
              },
              "src": "56:53:2"
            },
            {
              "canonicalName": "Task.Task",
              "id": 71,
              "members": [
                {
                  "constant": false,
                  "id": 68,
                  "name": "title",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "135:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "135:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 70,
                  "name": "price",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "155:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 69,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "155:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Task",
              "nodeType": "StructDefinition",
              "scope": 110,
              "src": "115:63:2",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 74,
              "name": "tasks",
              "nodeType": "VariableDeclaration",
              "scope": 110,
              "src": "184:19:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Task_$71_storage_$dyn_storage",
                "typeString": "struct Task.Task[]"
              },
              "typeName": {
                "baseType": {
                  "contractScope": null,
                  "id": 72,
                  "name": "Task",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 71,
                  "src": "184:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Task_$71_storage_ptr",
                    "typeString": "struct Task.Task"
                  }
                },
                "id": 73,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "184:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Task_$71_storage_$dyn_storage_ptr",
                  "typeString": "struct Task.Task[]"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 78,
              "name": "taskToOwner",
              "nodeType": "VariableDeclaration",
              "scope": 110,
              "src": "210:44:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 77,
                "keyType": {
                  "id": 75,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "219:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "210:25:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 76,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "227:7:2",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 108,
                "nodeType": "Block",
                "src": "328:139:2",
                "statements": [
                  {
                    "assignments": [
                      86
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 86,
                        "name": "id",
                        "nodeType": "VariableDeclaration",
                        "scope": 108,
                        "src": "338:7:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 85,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "338:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 94,
                    "initialValue": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 90,
                              "name": "_title",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 80,
                              "src": "364:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 91,
                              "name": "_price",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 82,
                              "src": "372:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 89,
                            "name": "Task",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71,
                            "src": "359:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_Task_$71_storage_ptr_$",
                              "typeString": "type(struct Task.Task storage pointer)"
                            }
                          },
                          "id": 92,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "359:20:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Task_$71_memory",
                            "typeString": "struct Task.Task memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Task_$71_memory",
                            "typeString": "struct Task.Task memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 87,
                          "name": "tasks",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 74,
                          "src": "348:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Task_$71_storage_$dyn_storage",
                            "typeString": "struct Task.Task storage ref[] storage ref"
                          }
                        },
                        "id": 88,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "348:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Task_$71_storage_$returns$_t_uint256_$",
                          "typeString": "function (struct Task.Task storage ref) returns (uint256)"
                        }
                      },
                      "id": 93,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "348:32:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "338:42:2"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 95,
                          "name": "taskToOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 78,
                          "src": "390:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 97,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 96,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86,
                          "src": "402:2:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "390:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 98,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125,
                          "src": "408:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 99,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "408:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "390:28:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 101,
                    "nodeType": "ExpressionStatement",
                    "src": "390:28:2"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 103,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86,
                          "src": "441:2:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 104,
                          "name": "_title",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 80,
                          "src": "445:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 105,
                          "name": "_price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 82,
                          "src": "453:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 102,
                        "name": "NewTask",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 66,
                        "src": "433:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                          "typeString": "function (uint256,string memory,uint256)"
                        }
                      },
                      "id": 106,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "433:27:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 107,
                    "nodeType": "EmitStatement",
                    "src": "428:32:2"
                  }
                ]
              },
              "documentation": null,
              "id": 109,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_createTask",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 83,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 80,
                    "name": "_title",
                    "nodeType": "VariableDeclaration",
                    "scope": 109,
                    "src": "284:20:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 79,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "284:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 82,
                    "name": "_price",
                    "nodeType": "VariableDeclaration",
                    "scope": 109,
                    "src": "306:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 81,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "306:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "283:35:2"
              },
              "returnParameters": {
                "id": 84,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "328:0:2"
              },
              "scope": 110,
              "src": "263:204:2",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            }
          ],
          "scope": 111,
          "src": "35:435:2"
        }
      ],
      "src": "0:470:2"
    },
    "compiler": {
      "name": "solc",
      "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.2.5",
    "updatedAt": "2020-10-14T00:09:53.325Z",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
  }
]