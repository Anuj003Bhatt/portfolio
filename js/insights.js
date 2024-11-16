const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
    {
        photo:
            'url("assets/img/testimonials/neha.png")',
        name: "Neha Sheth",
        profession: "Founder/CEO @ Musikaar",
        description:
            "Anuj is enthusiastic and self-motivated. He is always capable of adapting to new working environment and challenges. Very positive attitude towards work!! It was very nice to work with him."
    },
    {
        photo:
            'url("assets/img/testimonials/Axel.jpeg")',
        name: "Axel Tessier",
        profession: "CTO @ Purplemet",
        description: 'This has been a great pleasure working with Anuj, not only thanks to his coding skills in the various languages the company has to deal with, but also thanks to his involvement in the project lifecycle, by thoroughly reviewing specifications and designing solutions. Keep the great job, Anuj!'
    },
    {
        photo:
            'url("assets/img/testimonials/TejasShah.jpeg")',
        name: "Tejas Shah",
        profession: "Senior Manager @ ServiceNow",
        description:
            "It was my pleasure to work with Anuj during my tenure at Oracle. Anuj quickly came up to the speed and take on the most complex tasks. He worked on technical integration and gained in-depth knowledge on ADF. Apart from being an exceptional performer, the 2 Key quality that I find strongest in Anuj are: <br>- His ability to perform detailed comparative analysis for solving a problem.<br>- He possesses a great resilience which helps him achieve performance with perfection regardless of time pressure.<br>I am sure he can add extraordinary contribution to any team he joins."
    },
    {
        photo:
            'url("assets/img/testimonials/DeepakNagadi.jpeg")',
        name: "Deepak Bharadwaj Nagadi",
        profession: "Senior Software Engineer @ Tenable",
        description:
            "I had the pleasure of working with Anuj within our org and I highly recommend Anuj as a Senior/Staff Engineer/Architect with a strong focus on Product Development and cloud technologies, particularly within the AWS ecosystem. Anuj has demonstrated exceptional proficiency in working with services like DynamoDB, Elasticsearch, and AWS Lambda, consistently delivering solutions that are both scalable and performant. His ability to write efficient code in any JVM language is outstanding. He consistently incorporates scalability and performance considerations into his development process, ensuring that the software is robust and can handle growth seamlessly. His design-thinking approach enables him to architect systems that are not only functional but also intuitive and maintainable. What truly sets Anuj apart is his commitment to writing clean, understandable code. He ensures that any engineer, regardless of their experience level, can easily grasp the logic and flow of his implementations. This quality, combined with his effectiveness in getting things done, makes him an invaluable asset to any development team. Anuj is not just a coder but a holistic engineer who understands the bigger picture. He balances the need for innovation with practical design choices, always keeping the end user and future maintainers in mind. I have no doubt that he will continue to excel and bring significant value to any project or organization he is part of. Thank you for all the hard and smart work, Anuj. Keep going!"
    },
    {
        photo:
            'url("assets/img/testimonials/Jim.jpeg")',
        name: "Jim Braman",
        profession: "Cloud Software Engineer @ Reflexive Concepts",
        description:
            "Anuj worked as a contractor on my team for several major initiatives. He is a fearless, no excuses developer that will jump right into your gnarliest legacy code and hand it back a new shiny feature in record time. Unlike most contractors I've worked with, he can scope and architect relatively independently, learning the existing code himself as he goes. I've been thoroughly impressed and know he will build some awesome software in his career. I only wish he was a permanent FTE on my team!!!"
    },
    {
        photo:
            'url("assets/img/testimonials/Ranjana.jpeg")',
        name: "Ranjana Sisodia",
        profession: "Senior Software Engineer 4 @ Grab",
        description:
            "Anuj is an ace programmer with excellent problem solving skills. We worked on multiple projects together at AppPerfect and his capability to handle variety of tasks across multiple projects was amazing. When I led the designing of the frontend of cryptoz.ai, he led the development of the backend. We worked on variety of technologies together like Java, AngularJS. It was always fun working with him."
    },
    {
        photo:
            'url("assets/img/testimonials/Mayank.jpeg")',
        name: "Mayank Sareen",
        profession: "Solution Specialist @ Deloitte",
        description:
            "It was a wonderful experience working with Anuj. I had the pleasure of working with him at AppPerfect Corporation. Anuj led the development of a Java backend integrations framework which I was also a part of. After I completed my initial training I worked with him to assist in development. He was my mentor and I learned a lot from him. He guided me, showed me the aspects of development that I was unaware of. He always motivated me and taught me ways to do my job better. He has the ability to work on multiple projects and still be focused and deliver high quality work. He was always a great mentor to me and a good friend as well. He always highly encouraged me and was supportive. It was great knowing and working with him."
    },
    {
        photo:
            'url("assets/img/testimonials/Sumit.jpeg")',
        name: "Sumit Suthar",
        profession: "Lead Software Engineer @ New Relic Inc.",
        description:
            "I was mentor to Anuj. He learns things very quickly. His positive attitude makes him to view solutions instead of problems. For him the work is always the most important thing to do. Very positive attitude towards work. Great person, wonderful man."
    }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
    let reviewWrapWidth = document.getElementById("reviewWrap").offsetWidth + "px";
    let descriptionHeight = people[personNumber].description.offsetHeight + "px";
    //(+ or -)
    let side1symbol = whichSide === "left" ? "" : "-";
    let side2symbol = whichSide === "left" ? "-" : "";

    let tl = gsap.timeline();

    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 0,
        translateX: `${side1symbol + reviewWrapWidth}`
    });

    tl.to(reviewWrap, {
        duration: 0,
        translateX: `${side2symbol + reviewWrapWidth}`
    });

    setTimeout(() => {
        imgDiv.style.backgroundImage = people[personNumber].photo;
    }, 400);
    setTimeout(() => {
        description.style.height = descriptionHeight;
    }, 400);
    setTimeout(() => {
        personName.innerText = people[personNumber].name;
    }, 400);
    setTimeout(() => {
        profession.innerText = people[personNumber].profession;
    }, 400);
    setTimeout(() => {
        description.innerHTML = people[personNumber].description;
    }, 400);

    tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 1,
        translateX: 0
    });
}

function setNextCardLeft() {
    if (currentPerson === 0) {
        currentPerson = 7;
        slide("left", currentPerson);
    } else {
        currentPerson--;
    }

    slide("left", currentPerson);
}

function setNextCardRight() {
    if (currentPerson === 7) {
        currentPerson = 0;
        slide("right", currentPerson);
    } else {
        currentPerson++;
    }

    slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

window.addEventListener("resize", () => {
    description.style.height = "100%";
});
