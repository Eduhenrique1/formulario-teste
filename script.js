(function(){
	var marcados = 0;


	var verifyCheckeds = function($checks) {
		if( marcados>=3 ) {
			loop($checks, function($element) {
				$element.disabled = $element.checked ? '' : 'disabled';
			});
		} else {
			loop($checks, function($element) {
				$element.disabled = '';
			});
		}
	};
	var loop = function($elements, cb) {
		var max = $elements.length;
		while(max--) {
			cb($elements[max]);
		}
	}
	var count = function($element) {
		return $element.checked ? marcados + 1 : marcados - 1;
	}
	window.onload = function(){
		var $checks = document.querySelectorAll('input[type="checkbox"]');
		loop($checks, function($element) {
			$element.onclick = function(){
				marcados = count(this);
				verifyCheckeds($checks);
			}
			if($element.checked) marcados = marcados + 1;
		});
		verifyCheckeds($checks);
	}
}());


function continuarForm(){
    var q1 = document.getElementById('continuarForm');
    window.location.replace("/formulario.html");  
}

function menorDeIdade(){
    var q1 = document.getElementById('menor');
    window.location.replace("/finalizacao.html");
}
