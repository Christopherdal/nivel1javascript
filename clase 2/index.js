<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
</head>

<body>
<script>
	var notaExamen = 30+Math.random()*70;
	var notaDesafio= 30+Math.random()*70;
	
	console.log("nota examen:"+notaExamen.toFixed(0));
	console.log("nota desafio:"+notaDesafio.toFixed(0));

	if (notaExamen >=80){
		console.log("aprobo el examen");

		if(notaExamen >=90)
			console.log("Felicitaciones");

	}else
		console.log("reprobo el examen");


	if (notaDesafio >= 80){
		console.log("aprobo los desafios");
	else
		console.log("")









</script>
</body>
</html>