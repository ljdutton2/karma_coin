pragma solidity ^0.5.0;

contract Task {
    event NewTask( string title, uint price, uint distance,);

	struct Task {
		string title;
		uint price;
		uint32 distance;
	}

    //

    Task[] public tasks;
    function _createTask(string memory title, uint value) public {
    uint id = tasks.push(Task(_title, _value);
    TaskToOwner[id] = msg.sender;
    emit NewTask(id, _title, _value);
  }
}