// Listing element
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // type assertion

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addElement = document.getElementById("add") as HTMLInputElement;

    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    
    // Make a condition to get output
    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      addElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const add = addElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
    
      // /picture element
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) :'';


    // Creat Resume Output
    const resumeOutput =
     ` <h1>Dynamic Resume <br> By CodeWithFairy</h1>
     
     <h2>Personal Information</h2>
     ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ''}
        <p><strong> Name: </strong> ${name} <p>
        <p><strong> Email: </strong> ${email} <p>
        <p><strong> Contact: </strong> ${phone} <p>
        <p><strong> Address: </strong> ${add} <p>
        


        <h2>Education</h2>
        <p>${education}</p>
        

        <h2>Experience</h2>
        <p>${experience}</p>
        

        <h2>Skills</h2>
        <p>${skills}</p>
        

        <footer>
        <div class="center">
          Copyright &copy; reserved by CodeWithFairy
        </div>
      </footer>

      `;
    

    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.error("the resume output elements are missing!!");
    }
    }else{
        console.error('one or more output elements are missing!!')
    }
  });

  