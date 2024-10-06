

function Copy() 
            {
                urlCopied.innerHTML = window.location.href;
            }


    // Basic form submission handling (without a backend)
    document.querySelector('#contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
    });
