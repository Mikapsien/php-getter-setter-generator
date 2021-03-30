const generateButton = document.getElementById("generate-button");
const inputClass = document.getElementById("class-input");

var classText;
generateButton.addEventListener("click", (e) => {
	inputClass.value = `class Session {
        private $id;
        private $safSessionId;
        private $msisdn;
        private $serviceCode;
        private $ussdString;
        private $userType;
        private $status;
        private $additionalData;
        private $createdOn;
        private $createdBy;
        private $lastUpdatedOn;
        private $lastUpdatedBy;
    }`;
	classText = inputClass.value;
	getterSetter = generate(classText);
    alert(getterSetter);
    
});

function generate(classText) {
	//return classText.match(/class [A-Za-z]+ \{/);
    var properties = classText.match(
		/(private|public|protected) *\$[A-Za-z_]+[1-9]*[A-Za-z_]* *;/gi
	);
    for (n in properties) {
        console.log(properties[n])
    }
	return "Nothing";
}
