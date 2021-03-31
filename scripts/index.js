const generateButton = document.getElementById("generate-button");
const inputClass = document.getElementById("class-input");
const outputText = document.getElementById("output-text");
const copyButton = document.getElementById("copy");

var classText;
generateButton.addEventListener("click", (e) => {

	classText = inputClass.value;
	getterSetter = generate(classText);
	outputText.value = getterSetter;
});

function generate(classText) {
	var result = "";
	var properties = classText.match(
		/(private|public|protected) *\$[A-Za-z_]+[1-9]*[A-Za-z_]* *;/gi
	);
	for (n in properties) {
		property = properties[n];
		var nameWithDollarSign = property.match(
			/\$[A-Za-z_]+[1-9]*[A-Za-z_]* */gi
		)[0];
		var nameWithoutDollarSign = nameWithDollarSign.match(
			/[A-Za-z_]+[1-9]*[A-Za-z_]* */gi
		)[0];

		camelCaseName = nameWithDollarSign.replace(
			/\$[a-zA-Z]|_[a-zA-Z0-9]|_+/gi,
			(x) => {
				letters = x.match(/[A-Za-z0-9]/gi);

				if (letters == null || letters.length <= 0) {
					return "";
				}
				return letters[0].toUpperCase();
			}
		);

		var getter =
			` public function get` +
			camelCaseName +
			`()
    {
        return $this->` +
			nameWithoutDollarSign +
			`;
    }`;

		var setter =
			`public function set` +
			camelCaseName +
			`(` +
			nameWithDollarSign +
			`)` +
			`
    {
        $this->` +
			nameWithoutDollarSign +
			` =` +
			nameWithDollarSign +
			`;
    }`;

		

		result += setter + "\n" + getter + "\n";
	}
	return result;
}

copyButton.addEventListener("click", (e) => {
    document.querySelector("#output-text").select();
	document.execCommand("copy");
});
