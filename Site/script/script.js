
let addMessage = document.querySelector('.message'),
	addButton  = document.querySelector('.addcomment'),
	Comments = document.querySelector('.Comments');
	console.log(addMessage);
let	CommentList = [];



	addButton.addEventListener('click', function(){
		
		let newComm = {
			Comments: addMessage.value
		};
		CommentList.push(newComm);
		displayMessages();
	});
	
	 function displayMessages(){
 
	 	let displayMessages ='';
	 	var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
 	if (mm == 01) {
 		mm = "января";
 	}else if (mm == 02) {
 		mm = "февраля";
 	}else if (mm == 03) {
 		mm = "марта";
 	}else if (mm == 04) {
 		mm = "апреля";
 	}else if (mm == 05) {
 		mm = "мая";
 	}else if (mm == 06) {
 		mm = "июня";
 	}else if (mm == 07) {
 		mm = "июля";
 	}else if (mm == 08) {
 		mm = "августа";
 	}else if (mm == 09) {
 		mm = "сентября";
 	}else if (mm == 10) {
 		mm = "октября";
 	}else if (mm == 11) {
 		mm = "ноября";
 	}else if (mm == 12) {
 		mm = "декабря";
 	}
today = dd + ' ' + mm + ' ' + yyyy;
let	Numbercomment = document.getElementById("numbercomment").innerHTML;
	Numbercomment++;
	
	document.getElementById("numbercomment").innerHTML = Numbercomment;
	 	CommentList.forEach(function(item, i){
	 		displayMessages += `
	 		<div class= "namedate">
	 		<div class= "namedateComm">
	 		<div class="namecomment">Аноним</div>
	 		<div class="date">${today}</div>
	 		</div>
	 		
	 		
 			<p>
 			${item.Comments}
 			</p>
			</div>
	 		`;
  			document.getElementById("textInput").value = "";
  			  
	 		Comments.innerHTML = displayMessages;
	 	});
	 };

