var click = 0;
var flg = 0;
var flg1 = 0;
var a = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];
var b = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];
$(document).ready(function(){
	$(".col-sm-4 #x").hide();
	$(".col-sm-4 #o").hide();
$(".col-1").click(function(){
	click++;
	if(click & 1) {
		$(".col-1 #x").show("slow");
		$(".col-1 #o").hide();
		a[0] = 1;
	}
	else{
		$(".col-1 #x").hide();
		$(".col-1 #o").show("slow");
		b[0] = 1;
	}
	if(funa() == 1) {
		setTimeout(function(){ alert("X won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
		
	}
	else if(funb() == 1) {
		setTimeout(function(){ alert("O won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
	}
	else if(click == 9) {
	setTimeout(function(){ alert("YOU BOTH ARE LOOSERS"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
}
});
$(".col-2").click(function(){
	click++;
	if(click & 1) {
		$(".col-2 #x").show("slow");
		$(".col-2 #o").hide();
		a[1] = 1;
	}
	else{
		$(".col-2 #x").hide();
		$(".col-2 #o").show("slow");
		b[1] = 1;
	}
	if(funa() == 1) {
		setTimeout(function(){ alert("X won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
		
	}
	else if(funb() == 1) {
		setTimeout(function(){ alert("O won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
	}
	else if(click == 9) {
	setTimeout(function(){ alert("YOU BOTH ARE LOOSERS"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
}
});
$(".col-3").click(function(){
	click++;
	if(click & 1) {
		$(".col-3 #x").show("slow");
		$(".col-3 #o").hide();
		a[2] = 1;
	}
	else{
		$(".col-3 #x").hide();
		$(".col-3 #o").show("slow");
		b[2] = 1;
	}
	if(funa() == 1) {
		setTimeout(function(){ alert("X won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
		
	}
	else if(funb() == 1) {
		setTimeout(function(){ alert("O won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
	}
	else if(click == 9) {
	setTimeout(function(){ alert("YOU BOTH ARE LOOSERS"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
}
});
$(".col-4").click(function(){
	click++;
	if(click & 1) {
		$(".col-4 #x").show("slow");
		$(".col-4 #o").hide();
		a[3] = 1;
	}
	else{
		$(".col-4 #x").hide();
		$(".col-4 #o").show("slow");
		b[3] = 1;
	}
	if(funa() == 1) {
		setTimeout(function(){ alert("X won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
		
	}
	else if(funb() == 1) {
		setTimeout(function(){ alert("O won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
	}
	else if(click == 9) {
	setTimeout(function(){ alert("YOU BOTH ARE LOOSERS"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
}
});
$(".col-5").click(function(){
	click++;
	if(click & 1) {
		$(".col-5 #x").show("slow");
		$(".col-5 #o").hide();
		a[4] = 1;
	}
	else{
		$(".col-5 #x").hide();
		$(".col-5 #o").show("slow");
		b[4] = 1;
	}
	if(funa() == 1) {
		setTimeout(function(){ alert("X won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
		
	}
	else if(funb() == 1) {
		setTimeout(function(){ alert("O won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
	}
	else if(click == 9) {
	setTimeout(function(){ alert("YOU BOTH ARE LOOSERS"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
}

});
$(".col-6").click(function(){
	click++;
	if(click & 1) {
		$(".col-6 #x").show("slow");
		$(".col-6 #o").hide();
		a[5] = 1;
	}
	else{
		$(".col-6 #x").hide();
		$(".col-6 #o").show("slow");
		b[5] = 1;
	}
	if(funa() == 1) {
		setTimeout(function(){ alert("X won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
		
	}
	else if(funb() == 1) {
		setTimeout(function(){ alert("O won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
	}
	else if(click == 9) {
	setTimeout(function(){ alert("YOU BOTH ARE LOOSERS"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
}

});
$(".col-7").click(function(){
	click++;
	if(click & 1) {
		$(".col-7 #x").show("slow");
		$(".col-7 #o").hide();
		a[6] = 1;
	}
	else{
		$(".col-7 #x").hide();
		$(".col-7 #o").show("slow");
		b[6] = 1;
	}
	if(funa() == 1) {
		setTimeout(function(){ alert("X won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
		
	}
	else if(funb() == 1) {
		setTimeout(function(){ alert("O won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);

	}
	else if(click == 9) {
	setTimeout(function(){ alert("YOU BOTH ARE LOOSERS"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
}
});
$(".col-8").click(function(){
	click++;
	if(click & 1) {
		$(".col-8 #x").show("slow");
		$(".col-8 #o").hide();
		a[7] = 1;
	}
	else{
		$(".col-8 #x").hide();
		$(".col-8 #o").show("slow");
		b[7] = 1;
	}
	if(funa() == 1) {
		setTimeout(function(){ alert("X won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
		
	}
	else if(funb() == 1) {
		setTimeout(function(){ alert("O won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);

	}
	else if(click == 9) {
	setTimeout(function(){ alert("YOU BOTH ARE LOOSERS"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
}
});
$(".col-9").click(function(){
	click++;
	if(click & 1) {
		$(".col-9 #x").show("slow");
		$(".col-9 #o").hide();
		a[8] = 1;
	}
	else{
		$(".col-9 #x").hide();
		$(".col-9 #o").show("slow");
		b[8] = 1;
	}
	if(funa() == 1) {
		setTimeout(function(){ alert("X won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);
		
	}
	else if(funb() == 1) {
		setTimeout(function(){ alert("O won"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000);

	}
	else if(click == 9) {
	setTimeout(function(){ alert("YOU BOTH ARE LOOSERS"); }, 500);
		setTimeout(function(){ document.location.reload(); } , 1000); 
}
});
});
function funa() {
for (var i = 0; i < 9; i++) {
	if(a[i] === 1 && a[i + 1] === 1 && a[i + 2] === 1 && (i === 0 || i === 3 || i === 6)) {
		flg = 1;
		break;
	}
	if(a[i] == 1 && a[i + 3 ] == 1 && a[i + 6] == 1 && (i == 0 || i == 1 || i == 2)) {
		flg  = 1;
		break;
	}
	if(((a[i] == 1 && a[i + 4] == 1 && a[i + 8] == 1) && i == 0) || ((a[i] == 1 && a[i + 2] == 1 && a[i + 4] == 1) && i == 2)) {
		flg = 1;
		break;
	} 
  }
  return flg;
}
function funb() {
for (var i = 0; i < 9; i++) {
	if(b[i] == 1 && b[i + 1] == 1 && b[i + 2] == 1 && (i == 0 || i == 3 || i == 6)) {
		flg1 = 1;
		break;
	}
	if(b[i] == 1 && b[i + 3 ] == 1 && b[i + 6] == 1 && (i == 0 || i == 1 || i == 2)) {
		flg1  = 1;
		break;
	}
	if(((b[i] == 1 && b[i + 4] == 1 && b[i + 8] == 1) && i == 0) || ((b[i] == 1 && b[i + 2] == 1 && b[i + 4] == 1) && i == 2)) {
		flg1 = 1;
		break;
	} 
  }
  return flg1;
}
