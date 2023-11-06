var point = new Decimal("0.0").toPrecision(3)
var ppc = new Decimal("1.0")

var apuc = new Decimal("50.0")
var apuv = new Decimal("0.0")
var apul = new Decimal("19.0")



function addPoint() {
	point = Decimal.add(point, ppc);
	document.getElementById("point").innerHTML = point.toPrecision(3);
}

function addPointUpgrade(x) { 
if (apuv.lte(apul)) {
	if (point.gte(apuc)) { //
	point = Decimal.minus(point, apuc);
	ppc = Decimal.mul(ppc, x);
	apuc = Decimal.round(Decimal.mul(apuc, 2.2));
	apuv = Decimal.add(apuv, 1);	
	
	document.getElementById("ppc").innerHTML = ppc.toPrecision(3);
	document.getElementById("apuv").innerHTML = apuv.toPrecision(3);
	document.getElementById("apuc").innerHTML = apuc.toPrecision(3);
	document.getElementById("point").innerHTML = point.toPrecision(3);
	}
	}
}

bv = new Decimal(12323323)

console.log(bv.toPrecision(3))