// document.querySelectorAll('.story-btn').forEach(btn => {
//     btn.addEventListener('click', () => {
//         btn.classList.toggle('change')
//         btn.nextElementSibling.classList.toggle('change')
//     })
// })


// document.querySelector('.story-btn').addEventListener('click', function () {
//     this.classList.toggle('change');
//     document.querySelector('.story').classList.toggle('change');
// });

// document.querySelectorAll('.story-btn').forEach(function (btn) {
//     btn.addEventListener('click', function () {
//         this.classList.toggle('change');
//         this.nextElementSibling.classList.toggle('change');
//     });
// });

// window.addEventListener('scroll', function () {
//     if (window.scrollY > 50) {
//         document.body.classList.add('scrolled');
//     } else {
//         document.body.classList.remove('scrolled');
//     }
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const sections = document.querySelectorAll('.section-2, .section-3');
//     const options = {
//         threshold: 0.1
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('section-visible');
//             } else {
//                 entry.target.classList.remove('section-visible');
//             }
//         });
//     }, options);

//     sections.forEach(section => {
//         observer.observe(section);
//     });

//     const customers = document.querySelectorAll('.customer');
//     customers.forEach((customer, index) => {
//         customer.classList.add('fade-in', `delay-${index + 1}`);
//     });

//     const teamMembers = document.querySelectorAll('.team-member');
//     teamMembers.forEach((member, index) => {
//         member.classList.add('fade-in', `delay-${index + 1}`);
//     });

//     const observerItems = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('fade-in-visible');
//             } else {
//                 entry.target.classList.remove('fade-in-visible');
//             }
//         });
//     }, options);

//     customers.forEach(customer => {
//         observerItems.observe(customer);
//     });

//     teamMembers.forEach(member => {
//         observerItems.observe(member);
//     });
// });

// document.querySelectorAll('.story-btn').forEach(function (btn) {
//     btn.addEventListener('click', function () {
//         this.classList.toggle('change');
//         this.nextElementSibling.classList.toggle('change');
//     });
// });

// // Combine both '.story-btn' and '.projects-btn' in a single query
// document.querySelectorAll('.projects-btn').forEach(function (btn) {
//     // btn.addEventListener('click', function (event) {
//     //     event.preventDefault(); // Prevent the default action of the <a> tag
//     //     this.classList.toggle('change');
//     //     this.nextElementSibling.classList.toggle('change');
//     // });
//     btn.addEventListener('click', function () {
//         this.classList.toggle('change');
//         this.nextElementSibling.classList.toggle('change');
//     });
// });


// Combine both '.story-btn' and '.projects-btn' in a single query
document.querySelectorAll('.story-btn, .projects-btn').forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the <a> tag if clicked
        this.classList.toggle('change');

        // Find the closest .team-member ancestor
        var teamMember = this.closest('.team-member');
        if (teamMember) {
            // Toggle the change class on the .story element within this .team-member
            var story = teamMember.querySelector('.story');
            if (story) {
                story.classList.toggle('change');
            }
        }
    });
});


window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section-2, .section-3, .section-1, .hero-section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            } else {
                entry.target.classList.remove('section-visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const customers = document.querySelectorAll('.customer');
    customers.forEach((customer, index) => {
        customer.classList.add('fade-in', `delay-${index + 1}`);
    });

    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.classList.add('fade-in', `delay-${index + 1}`);
    });

    const observerItems = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            } else {
                entry.target.classList.remove('fade-in-visible');
            }
        });
    }, options);

    customers.forEach(customer => {
        observerItems.observe(customer);
    });

    teamMembers.forEach(member => {
        observerItems.observe(member);
    });
});
