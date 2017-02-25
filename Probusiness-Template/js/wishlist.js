function initWishListPage(){
	$("#myWishPage").show();
	$("#addWishPage").hide();
	
	$("#addWishButton").click(function(event){
		$("#myWishPage").hide();
		$("#addWishPage").show();
		$("#rowNum").val("");
	});
	
	$("#wishSaveButton").click(function(event){
		var rowNum = $("#rowNum").val();
		if(rowNum == ""){
			var htmlStr = '<td>'+$("#itemName").val()+'</td><td>'+$("#category").val()+'</td><td>'+$("#exchangeItem").val()+'</td><td>'+$("#expectedDate").val()+'</td><td>'+$("#comment").val()+'</td><td><div class="col-md-1 deleteline"><a style="cursor:pointer;" class="text-danger"><i class="fa fa-times"></i></a></div><div class="col-md-1 editline"><a style="cursor:pointer;" class="text-warning"><i class="fa fa-pencil"></i></a></div></td>';
			var newRow = $("<tr>");
	        newRow.append(htmlStr);
	        $("#myWishList").append(newRow);
	        newRow.on('click', function(event){
	    		var parent = $(this).parent().parent();
	    		parent.trigger('click');
	    	});
	        $( ".deleteline").unbind( "click" );
	        $(".deleteline").on('click', function(event){
	    		var parent = $(this).parent().parent().remove();
	    	});
	        $( ".editline").unbind( "click" );
	        $(".editline").on('click', function(event){
	    		var parent = $(this).parent().parent();
	    		parent.trigger('click');
	    	});
		}else if(rowNum != ""){
			$('#myWishList tbody tr').each(function() {
				var indexVal = $(this).index();
				
				if(indexVal == rowNum){
					$(this).children('td').each(function () {
						if(this.cellIndex == 0){
							this.textContent = $("#itemName").val();
						}
						if(this.cellIndex == 1){
							this.textContent = $("#category").val();
						}
						if(this.cellIndex == 2){
							this.textContent = $("#exchangeItem").val();
						}
						if(this.cellIndex == 3){
							this.textContent = $("#expectedDate").val();
						}
						if(this.cellIndex == 4){
							this.textContent = $("#comment").val();
						}
					});
				}
			});
		}
		
		
		$("#myWishPage").show();
		$("#addWishPage").hide();
	});
	
	$("#wishCancelButton").click(function(event){
		$("#myWishPage").show();
		$("#addWishPage").hide();
	});
	
	$(".deleteline").on('click', function(event){
		var parent = $(this).parent().parent().remove();
	});
	
	$("#myWishList tr").click(function(event){
		var indexVal = $(this).index();
		$(this).children('td').each(function () {
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
		$("#rowNum").val(indexVal);
		$("#myWishPage").hide();
		$("#addWishPage").show();
	});
	
	$(".editline").on('click', function(event){
		var parent = $(this).parent().parent();
		parent.trigger('click');
	});
}