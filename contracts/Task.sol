pragma solidity ^0.5.0;

contract Task {
    event NewTask(uint TaskId, string title, uint price);
    
    
	struct Task {
		string title;
		uint price;
		uint32 distance;
	}

    mapping (uint => address) public TaskToOwner;

    Task[] public tasks;
    function _createTask(string memory _title, uint _price, uint32 _distance) public {
    uint id = tasks.push(Task(_title, _price, _distance));
    TaskToOwner[id] = msg.sender;
    emit NewTask(id, _title, _price);
  }
}