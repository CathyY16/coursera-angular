(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController )
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

//  one controller using controller as syntax
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
	var toBuyCtrl = this;

	toBuyCtrl.list = ShoppingListCheckOffService.getItems();
	toBuyCtrl.clicks = function (itemIndex) {
		return ShoppingListCheckOffService.click(itemIndex);
	}
	
}

// another controller using controller as syntax
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
	var BoughtCtrl = this;
	BoughtCtrl.list = ShoppingListCheckOffService.getBoughtItem();
 	
}

//service which injected into above two controllers
function ShoppingListCheckOffService () {
	var service = this;
	
    service.ToBuy = [ { name: "cookies", quantity: 10 },
	                  { name: "pepsies", quantity: 2 },
	                  { name: "apples", quantity: 8 },
	                  { name: "milk", quantity: 1 },
	                  { name: "candies", quantity: 50 }
	                ];
    service.getItems = function () {

    	return service.ToBuy;
      
	}

	// function  service.getItems () {
	// 	return service.ToBuy;
	// }  //this is wrong! have to use angular's way !!!


  	service.boughtItem = [];

  	service.click = function (itemIndex){
  		service.boughtItem.push(service.ToBuy[itemIndex]);
  		service.ToBuy.splice(itemIndex,1);
  	}  // remove items from ToBuy array and add it to boughtItem array in the same time

  	service.getBoughtItem = function(){
  		return service.boughtItem;
  	}  
}
})();