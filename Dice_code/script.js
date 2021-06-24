

let passCode = []
let passWord = []
let numList = {11: 0, 12: 6, 13: 2, 14: 8, 15: 4, 21: 1, 22: 7, 23: 3, 24: 9, 25: 5,
31: 2, 32: 8, 33: 4, 34: 0, 35: 6, 41: 3, 42: 9, 43: 5, 44: 1, 45: 7, 51: 4, 52: 0, 53: 6, 54: 1, 55: 7,
61: 5, 62: 1, 63: 7, 64: 3, 65: 9 }

let charList = {111: "A", 112: "G", 113: "M", 114: "S", 115: "Y", 116: 4, 121: "B", 122: "H", 123: "N", 124: "T",
125: "Z", 126: "5", 131: "C", 132: "I", 133: "O", 134: "U", 135: 0, 136: 6, 141: "D", 142: "J", 143: "P", 
144: "V", 145: 1, 146: 7, 151: "E", 152: "K", 153: "Q", 154: "W", 155: 2, 156: 8, 161: "F", 162: "L", 163: "R", 164: "X", 165: 3,
166: 9, 311: "a", 312: "g", 313: "m", 314: "s", 315: "y", 321: "b", 322: "h", 323: "n", 324: "t", 325: "z", 331: "c", 332: "i", 333: "o", 334: "u", 335: '~',
341: "d", 342: "j", 343: "p", 344: "v", 345: '_', 351: "e", 352: "k", 353: "q", 354: "w", 355: '^', 361: "f", 362: "l", 363: "r", 364: "x", 365: '%' ,
511: '!', 512: '&', 513: "+", 514: '|', 515: '<', 521: '@', 522: '*', 523: "[", 524: "`", 525: ">", 531: "#", 532: "(", 533: "]",
534: ";", 535: "/", 541: "$", 542: ")", 543: "{", 544: ":", 545: "?", 551: "%", 552: "-", 553: "}", 554: "'", 555: ".", 561: "^", 562: "=", 563: "\\", 564: '"', 565: ","}
let word = ""
function changeForm() {
	$("select").change(i => {
		i.preventDefault();
		$("#select").hide()
		$("#generate").show()
		$("#amount").show()
		$("#home").show()



		
	});
};

changeForm();


function numGen () {
    
    
    
       
    
    let first = Math.floor((Math.random() * 6) + 1);
	let second = Math.floor((Math.random() * 5) + 1);
    first = first.toString()
    second = second.toString()
    rep = first.concat(second)
    
    let cool = numList[rep]
    word = word.concat(cool)
    

     

    
   
    return word
  
    }
    
  


function type()	{
$("select").change(i => {


	 e = document.getElementById("type").value;
	 return e
		


		
});	
}

		
		

function result() {
$("#generate").submit (e => {
	e.preventDefault();
	x = document.getElementById('number-input').value;
	
  for (let i = 0; i < x; i++) {

  	numGen()
  	numGen()
  	numGen()
  	numGen()
  	numGen()
  	numGen()
  	word = word.concat(" ")
  	passWord.push(word)


  }



	for (var i = 0; i < passWord.length; i++)
	document.querySelector("#password-results").innerHTML = passWord[i]

	});
if (passWord.length != x) {
	passWord = 0
}

}

	



