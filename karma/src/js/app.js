App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load tasks. task
    $.getJSON('../tasks.json', function(data) {
      var tasksRow = $('#tasksRow');
      var taskTemplate = $('#taskTemplate');

      for (i = 0; i < data.length; i ++) {
        taskTemplate.find('.panel-title').text(data[i].title);
        taskTemplate.find('.task-date').text(data[i].date);
        taskTemplate.find('.task-value').text(data[i].value);
        taskTemplate.find('.task-distance').text(data[i].distance);

        tasksRow.append(taskTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    // Modern dapp browsers...
if (window.ethereum) {
  App.web3Provider = window.ethereum;
  try {
    // Request account access
    await window.ethereum.enable();
  } catch (error) {
    // User denied account access...
    console.error("User denied account access")
  }
}
// Legacy dapp browsers...
else if (window.web3) {
  App.web3Provider = window.web3.currentProvider;
}
// If no injected web3 instance is detected, fall back to Ganache
else {
  App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() { 
    $.getJSON('Neighbors.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var NeighborsArtifact = data;
      App.contracts.Neighbors = TruffleContract(NeighborsArtifact);
    
      // Set the provider for our contract
      App.contracts.Neighbors.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the adopted tasks
      return App.markAdopted();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function() {
    var NeighborsInstance;

App.contracts.Neighbors.deployed().then(function(instance) {
  NeighborsInstance = instance;

  return NeighborsInstance.getAdopters.call();
}).then(function(adopters) {
  for (i = 0; i < adopters.length; i++) {
    if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
      $('.panel-task').eq(i).find('button').text('Success').attr('disabled', true);
    }
  }
}).catch(function(err) {
  console.log(err.message);
});
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var taskId = parseInt($(event.target).data('id'));

    var NeighborsInstance;

web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

  var account = accounts[0];

  App.contracts.Neighbors.deployed().then(function(instance) {
    NeighborsInstance = instance;

    // Execute adopt as a transaction by sending account
    return NeighborsInstance.adopt(taskId, {from: account});
  }).then(function(result) {
    return App.markAdopted();
  }).catch(function(err) {
    console.log(err.message);
  });
});

  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
