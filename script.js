var _a;
// Listing element
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addElement = document.getElementById("add");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    // Make a condition to get output
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var add = addElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // /picture element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Creat Resume Output
        var resumeOutput = " <h1>Dynamic Resume <br> By CodeWithFairy</h1>\n     \n     <h2>Personal Information</h2>\n     ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong> Name: </strong> ").concat(name_1, " <p>\n        <p><strong> Email: </strong> ").concat(email, " <p>\n        <p><strong> Contact: </strong> ").concat(phone, " <p>\n        <p><strong> Address: </strong> ").concat(add, " <p>\n        \n\n\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n        \n\n        <h2>Experience</h2>\n        <p>").concat(experience, "</p>\n        \n\n        <h2>Skills</h2>\n        <p>").concat(skills, "</p>\n        \n\n        <footer>\n        <div class=\"center\">\n          Copyright &copy; reserved by CodeWithFairy\n        </div>\n      </footer>\n\n      ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("the resume output elements are missing!!");
        }
    }
    else {
        console.error('one or more output elements are missing!!');
    }
});
