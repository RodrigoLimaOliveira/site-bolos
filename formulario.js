function formulario () {
	var erro = "";
	if (document.getElementById('Inome').value == "")
		erro = "Você precisa inserir seu nome";
	if (document.getElementById('Iemail').value == "")
		erro += "<br>Você precisa inserir seu email"
	if (document.getElementById('Imensg').value == "")
		erro += "<br>Você precisa inserir a mensagem"
	if (erro == ""){
		document.getElementById('mostraerro').innerHTML = "";
		alert("Sua mensagem foi enviada");
		return true;
	}
	else{
		document.getElementById('mostraerro').innerHTML = erro;
		return false;	
	}
}