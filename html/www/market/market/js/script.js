function main() {
	const generateBtn = document.getElementById("generateBtn");
	const dataBox = document.getElementById("dataBox");
	const downloadBtn = document.getElementById("downloadBtn");
	const qrcode = document.getElementById("qrcode");
	const qrdiv = document.getElementById("qrdiv");

	const errorClassName = "error";
	const shakeClassName = "shake";
	const dataBoxClassName = "dataBox";
	const toHideClassName = "hide";
	const qrdivClassName = "qrdiv";

	var QR_CODE = new QRCode("qrcode", {
		width: 260,
		height: 260,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H,
	});

	generateBtn.onclick = function (e) {
		const data = dataBox.value;
		if (data) {
			generateQRCode(data);
		} else {
			markDataBoxError();
		}
	};

	dataBox.onfocus = function (e) {
		const classList = dataBox.classList;

		if (classList.contains(errorClassName)) {
			// Removing error class
			dataBox.className = dataBoxClassName;
		}
	};

	function markDataBoxError() {
		const prevClassName = dataBox.className;
		dataBox.className =
			prevClassName + " " + errorClassName + " " + shakeClassName;
		vibrate();
		setTimeout(() => {
			// Reset class
			dataBox.className = prevClassName + " " + errorClassName;
		}, 500);
	}

	function generateQRCode(data) {
		QR_CODE.clear();
		QR_CODE.makeCode(data);
		// Show QRCode div
		qrdiv.className = qrdivClassName;
	}

	function vibrate() {
		if (Boolean(window.navigator.vibrate)) {
			window.navigator.vibrate([100, 100, 100]);
		}
	}

	function downloadImage(image, filename) {
		// Creating hidden <a> tag to download
		var element = document.createElement("a");
		element.setAttribute("href", image);
		element.setAttribute("download", filename);
		element.setAttribute("class", toHideClassName);
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}
}

main();