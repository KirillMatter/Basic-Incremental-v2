var point = new Decimal("0.0")
var ppc = new Decimal("1.0")

var ppget = new Decimal("0.0")
var pp = new Decimal("0.0")

var apuc = new Decimal("50.0")
var apuv = new Decimal("0.0")
var apul = new Decimal("29.0")

var apuc2 = new Decimal("1e7")
var apuv2 = new Decimal("0.0")
var apul2 = new Decimal("1e6")

function addPoint() {
	point = Decimal.add(point, ppc);
	document.getElementById("point").innerHTML = point.toPrecision(3);
}

function addPointUpgrade(x) { 
if (apuv.lte(apul)) {
	if (point.gte(apuc)) { 
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


function addPointUpgrade2(x) { 
if (apuv2.lte(apul2)) {
	if (point.gte(apuc2)) {
	point = Decimal.minus(point, apuc2);
	ppc = Decimal.mul(ppc, x);
	apuc2 = Decimal.round(Decimal.mul(apuc2, 3.2));
	apuv2 = Decimal.add(apuv2, 1);	
	
	document.getElementById("ppc").innerHTML = ppc.toPrecision(3);
	document.getElementById("apuv2").innerHTML = apuv2.toPrecision(3);
	document.getElementById("apuc2").innerHTML = apuc2.toPrecision(3);
	document.getElementById("point").innerHTML = point.toPrecision(3);
	}
	}
}


function viewPrestige() {
	if (point.gte("9e23")) {
	document.getElementById("prestigeButton").style.display = "block";
	}
}

function viewPP() {
	ppget = Decimal.floor(Decimal.pow(Decimal.log10(point) - 20, 1.1).mul(2)).add(10);
	document.getElementById("ppget").innerHTML = ppget.toPrecision(3);
	document.getElementById("pp").innerHTML = pp.toPrecision(3);
}

setInterval("viewPP(), viewPrestige()", 1000);

function justRefreshValues() {
	document.getElementById("point").innerHTML = point.toPrecision(3);
	document.getElementById("ppc").innerHTML = ppc.toPrecision(3);
	document.getElementById("apuc").innerHTML = apuc.toPrecision(3);
	document.getElementById("apuc2").innerHTML = apuc2.toPrecision(3);
	document.getElementById("apuv").innerHTML = apuv.toPrecision(3);
	document.getElementById("apuv2").innerHTML = apuv2.toPrecision(3);
	document.getElementById("ppget").innerHTML = ppget.toPrecision(3);
}

function prestige() {
	document.getElementById("pp").innerHTML = pp.toPrecision(3);
	document.getElementById("prestigeButton-3").style.display = "block";
	document.getElementById("prestigeButton").style.display = "none";
	pp = Decimal.add(pp, ppget);
	point = new Decimal("0.0");
	ppc = new Decimal("1.0");
	ppget = new Decimal("0.0");
	apuc2 = new Decimal("1e7");
	apuc = new Decimal("50.0");
	apuv2 = new Decimal("0.0");
	apuv = new Decimal("0.0");
}