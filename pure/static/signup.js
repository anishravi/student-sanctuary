const college_dropdown = document.getElementById("college")
const course_dropdown = document.getElementById("course")

async function course_list() {
    college = college_dropdown.value
    await fetch('/course_options/' + college)
        .then(response => response.json())
        .then(data => {
            course_dropdown.innerHTML = ''
            for(let i=0;i<data.length;i++){
                let option = document.createElement("option")
                option.value = data[i]
                option.textContent = data[i]
                course_dropdown.appendChild(option)
            }
        })
}
course_list()
college_dropdown.addEventListener('change', course_list)
