//Mobile Logic

document.getElementById('menuIconP').addEventListener('click', function() {
    console.log("toggling side menu");
    $("#sideMenu").slideToggle();
    $('html, body').toggleClass('noScroll');
});

  const navbarPhone= document.getElementById("menuPhone");
var stickyOffset = navbarPhone.offsetTop;

window.onscroll = function()
{

    if(window.scrollY >= stickyOffset)
        {
           
            navbarPhone.classList.add('sticky');

        }
        else
        {
            
            navbarPhone.classList.remove('sticky');
        }
}

  


//Sticky bar logic
const navbar= document.getElementById("topMenu");
var sticky = navbar.offsetTop;

window.onscroll = function()
{

    if(window.scrollY >= sticky)
        {
            console.log("up");
            navbar.classList.add('sticky');

        }
        else
        {
            console.log("down");
            navbar.classList.remove('sticky');
        }
}

//Contact form logic

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log({ name, email, message });
    const response = await fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    });

    const result = await response.json();
    if (response.ok) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('contactForm').reset();
    } else {
        alert(result.error);
    }
});



