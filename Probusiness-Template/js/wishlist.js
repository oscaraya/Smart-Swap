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
	
	$(".deleteline").on('click', function(event){
		var parent = $(this).parent().parent().remove();
	});
	
	$(".editline").on('click', function(event){
		var parent = $(this).parent().parent();
		parent.children('td').each(function () {
			if(this.textContent != undefined && this.textContent != ""){
				if(this.cellIndex == 0){
					$("#itemName").val(this.textContent);
				}
				if(this.cellIndex == 1){
					$('#category').val(this.textContent);
					$('#category').selectpicker('refresh');
				}
				if(this.cellIndex == 2){
					$('#exchangeItem').val(this.textContent);
					$('#exchangeItem').selectpicker('refresh');
				}
				if(this.cellIndex == 3){
					$('#datepicker').data({date: this.textContent}).datepicker('update').children("input").val(this.textContent);
				}
				if(this.cellIndex == 4){
					$("#comment").val(this.textContent);
				}
			}
		});
		$("#myWishPage").hide();
		$("#addWishPage").show();
	});
}