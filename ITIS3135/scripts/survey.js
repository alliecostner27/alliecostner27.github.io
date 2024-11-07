
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('intro-form');
    const addCourseBtn = document.getElementById('add-course-btn');
    const courseContainer = document.getElementById('course-container');

    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            const formData = new FormData(form);
            displayFormData(formData);
        }
    });

    
    form.addEventListener('reset', function() {
        setTimeout(() => {
            const courseEntries = document.querySelectorAll('.course-entry');
            for (let i = 1; i < courseEntries.length; i++) {
                courseEntries[i].remove();
            }
        }, 0);
    });

    
    addCourseBtn.addEventListener('click', addCourseField);

    
    function validateForm() {
        const requiredInputs = form.querySelectorAll('input[required]');
        for (let input of requiredInputs) {
            if (!input.value) {
                alert('Please fill out all required fields.');
                return false;
            }
        }

        const imageInput = document.getElementById('image');
        if (imageInput.files.length > 0) {
            const file = imageInput.files[0];
            const fileType = file.type;
            if (fileType !== 'image/png' && fileType !== 'image/jpeg') {
                alert('Please upload a PNG or JPG image.');
                return false;
            }
        } else {
            alert('Please upload an image.');
            return false;
        }

        return true;
    }

    
    function addCourseField() {
        const courseEntry = document.createElement('div');
        courseEntry.className = 'course-entry';
        courseEntry.innerHTML = `
            <input type="text" class="course" name="course[]" required>
            <button type="button" class="delete-course-btn">Delete</button>
        `;
        courseContainer.appendChild(courseEntry);

        
        courseEntry.querySelector('.delete-course-btn').addEventListener('click', function() {
            courseEntry.remove();
        });
    }

    
    function displayFormData(formData) {
        let html = '<div style="text-align: center;"><h2>Your Introduction</h2>';
        
        
        const imageFile = formData.get('image');
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '300px';
                img.style.display = 'block';
                img.style.margin = '0 auto 20px';
                document.querySelector('#intro-content').insertBefore(img, document.querySelector('#intro-content').firstChild);
            }
            reader.readAsDataURL(imageFile);
        };

        
        for (let [key, value] of formData.entries()) {
            if (key !== 'image' && key !== 'agree') {
                html += `<p><strong>${key}:</strong> ${value}</p>`;
            }
        }

        html += '<a href="#" id="reset-link">Reset</a></div>';

        
        const mainElement = document.querySelector('main');
        mainElement.innerHTML = '<div id="intro-content" style="max-width: 600px; margin: 0 auto;">' + html + '</div>';

        
        document.getElementById('reset-link').addEventListener('click', function(e) {
            e.preventDefault();
            location.reload();
        });
    }
});