function validaCampos(){


	setTimeout(function(){ validaCampos(); }, 500);
	
	document.getElementById('nome').placeholder = 'Seu nome';
	document.getElementById('telefone').placeholder = 'Seu telefone';
	document.getElementById('endereco').placeholder = 'Seu endereço';
	
	var campo1 = document.getElementById('nome').value;
	var campo2 = document.getElementById('telefone').value;
	var campo3 = document.getElementById('endereco').value;
	
	
	if(campo1 != ""){document.getElementById('sp1').style = 'display: none;';}else{document.getElementById('sp1').style = 'display: block;';}
	if(campo2 != ""){document.getElementById('sp2').style = 'display: none;';}else{document.getElementById('sp2').style = 'display: block;';}
	if(campo3 != ""){document.getElementById('sp3').style = 'display: none;';}else{document.getElementById('sp3').style = 'display: block;';}
	
	
	if(campo1 == "" || campo2 == "" || campo3 == ""){
		document.getElementById('botao').disabled = true;
		var bt = 'display: none;';
		document.getElementById('botao').style = bt;
	}else{
		var bt = 'width: 150px; height: 50px; background-color: #fff; font-family: arial; color: #000; border-radius: 10px;';
		document.getElementById('botao').disabled = false;
		document.getElementById('botao').style = bt;
		document.getElementById('msg').style = 'display: none;';
		document.getElementById('btReseta').style = 'display: none;';
	}
};

/*function mudaCor(){
	
	setTimeout(function(){ }, 3000);
	document.getElementById('formu').style = 'background-color: orange';	
	
};

function mudaCor2(){
	
	setTimeout(function(){ }, 3000);
	document.getElementById('formu').style = 'background-color: red';
};
*/