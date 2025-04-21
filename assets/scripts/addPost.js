// wait for dom to fully load
document.addEventListener('DOMContentLoaded', function(){
    
    // click event listener to blog reset button
    document.querySelector('button[type="reset"]').addEventListener('click', function (e) {
        // confirm popup
        if(!confirm('Are you sure you want to clear the form?')){
            e.preventDefault(); // prevent form reset
        }
    });

    // submit button listener
    document.querySelector('form').addEventListener('submit', function (e){
        // references to input fields
        const title = document.getElementById('title');
        const content = document.getElementById('content');
        let isValid = true;

        // function to temporarily highlight the input field
        function flashHighlight(element){
            // add then remove the class
            element.classList.add('highlight');
            setTimeout(() => element.classList.remove('highlight'), 2500);
        }

        // check if field is empty. highlight if so
        if(!title.value.trim()){
            flashHighlight(title);
            isValid = false;
        }

        if(!content.value.trim()){
            flashHighlight(content);
            isValid = false;
        }

        // if any field is empty stop form submission 
        if(!isValid){
            e.preventDefault();
            alert('Please fill in all fields.');
        }
    });
});
