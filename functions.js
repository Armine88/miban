/////////////// DIFFERENCE OF TWO ARRAYS /////////////////////
function arrayDiff(a,b){
	var rezultArray = [];
	var a_len=a.length, b_len=b.length;
	for (var i = 0; i < a_len; i++) {
		for (var j = 0; j < b_len; j++) {
			if(a[i]===b[j]) { 
				a[i] = null;
				b[j] = null;
			}
		}
	}
	for (var i = 0; i < a_len; i++) {
		if(a[i]!=null){
			rezultArray.push(a[i]);
		}
	}
	for (var i = 0; i < b_len; i++) {
		if(b[i]!=null){
			rezultArray.push(b[i]);
		}
	}
	return rezultArray;
}

/////////////// DIFFERENCE OF TWO ARRAYS /////////////////////
// (function arrayDiff(a,b){
// 	var rezultArray = [];
// 	pushInArray(a,b,rezultArray);
// 	pushInArray(b,a,rezultArray);
// 	function pushInArray(array1, array2, rezult_array) {
// 		var array1_len=array1.length;
// 		var array2_len=array2.length;
// 		var k=0;
// 		for (var i = 0; i < array1_len; i++) {
// 			for (var j = 0; j < array2_len; j++) {
// 				if(array1[i]===array2[j]) 
// 					break;
// 				else
// 					k++;	
// 			}
// 			if(k==array2.length)
// 				rezult_array.push(array1[i]);
// 			k=0;
// 		}
// 	}
// })();

/////////////// CREATING CLONE OF OBJECT //////////////////////
function objectClone(obj) {
	var clone={};
	if(typeof obj !== 'object') {
		clone=obj;
		return clone;
	}
	else {
		for(var key in obj) {
			if(typeof obj[key] !== 'object') {
				clone[key]=obj[key];
			}
			else {
				clone[key]=objectClone(obj[key]);
			}
		}
		return clone;
	}
}

//////////////// FUNCTION'S CALLS /////////////////////////////////
// (function M(fun) {
// 	var h=fun;
// 	var key=arg[0];
// 	/////////arg is the global varaibel in window, and in the function fun global varaibel arg=arguments;////////
// 	///////////////// chi stacvum ////////////////
// })();

/////////////// FINDING MAXIMAL ITOM OF ARRAY /////////////////////
function maxInArray(array){
	var a,b,c;
	var array1=[];
	var array2=[];
	var l=array.length;
	if(l==1)
		return array[0];
	else{
		if(l%2==0) c=l/2;
		else c=l/2+0.5;
		for (var i = 0; i < c; i++) {
			array1[i]=array[i];
		}
		for (var i = c; i < l; i++) {
			array2[i-c]=array[i];
		}
		a=maxInArray(array1);
		b=maxInArray(array2);
		return maximum(a,b);

	}

	function maximum (a1, a2){
		if(a1>a2)
			return a1;
		else 
			return a2;
	}

}
