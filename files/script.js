var point = new Decimal("0.0")
var ppc = new Decimal("1.0")

var apuc = new Decimal("50.0")
var apuv = new Decimal("0.0")

function addPoint() {
	point = Decimal.add(point, ppc);
	document.getElementById("point").innerHTML = point;
}

function addPointUpgrade(x) { 
	if (point.gte(apuc)) { //
	point = Decimal.minus(point, apuc);
	ppc = Decimal.mul(ppc, x);
	apuc = Decimal.round(Decimal.mul(apuc, 2.2));
	apuv = Decimal.add(apuv, 1);	
	
	document.getElementById("ppc").innerHTML = ppc;
	document.getElementById("apuv").innerHTML = apuv;
	document.getElementById("apuc").innerHTML = apuc;
	document.getElementById("point").innerHTML = point;
	}
}
