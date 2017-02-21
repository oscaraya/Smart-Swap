function initWishListPage(){
	$("#myWishPage").show();
	$("#addWishPage").hide();
	
	$("#addWishButton").click(function(event){
		$("#myWishPage").hide();
		$("#addWishPage").show();
	});
	
	$("#wishSaveButton").click(function(event){
		$("#myWishPage").show();
		$("#addWishPage").hide();
	});
}