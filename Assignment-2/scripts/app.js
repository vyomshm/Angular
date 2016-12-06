(function(){
"use strict";

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$inject=["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService){
	var buyList = this;

	console.log(ShoppingListCheckOffService);

	buyList.items= ShoppingListCheckOffService.getbuyItems();

	buyList.itemBought= function(itemIndex){
		ShoppingListCheckOffService.itemBought(itemIndex);
	};
}

AlreadyBoughtController.$inject=["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var boughtList= this;
	boughtList.items= ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
	var shoppingList= this;
	var buyItems=[
	{
		name: "Cookies",
		quantity: "5 bags"
	},
	{
		name: "Chips",
		quantity: "3 bags"
	},
	{
		name: "pizza",
		quantity: "10 slices"
	},
	{
		name: "DumbBells",
		quantity: "1 pair"
	},
	{
		name: "basketballs",
		quantity: "3"
	},
	{
		name: "spare balls",
		quantity: "3 pairs"
	}];

	var boughtItems=[];

	shoppingList.getbuyItems= function(){
		return buyItems;
	};

	shoppingList.itemBought= function(itemIndex){
		var newItem= buyItems[itemIndex];
		boughtItems.push(newItem);
		buyItems.splice(itemIndex,1);
	};

	shoppingList.getBoughtItems= function(){
		return boughtItems;
	};

	return shoppingList;

}
})();