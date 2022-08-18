const faqs = document.querySelectorAll(".faq");


for (const el of faqs) {


    el.addEventListener('click', function() {

        el.firstElementChild.lastElementChild.classList.toggle('img-invert');

        if (el.lastElementChild.style.display != "block") {
            el.firstElementChild.classList.add('active');
            el.lastElementChild.style.display = "block";
        } else {
            el.lastElementChild.style.display = "none";
            el.firstElementChild.classList.remove('active')
        }
    })
}

// const para = document.createElement('p');
// const ans = document.createTextNode("This is additional text");
// para.appendChild(ans);

// function displayAnswer(qNo) {
//     console.log(this);
//     this.classList.toggle('active');
//     const div = document.createElement('div');
//     div.innerHTML = answerText[qNo];
//     this.appendChild(div);
//     div.classList.add('answer');
// }

// answerText = [
//     "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",

//     "No more than 2GB. All files in your account must fit your allotted storage space.",

//     "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you",

//     "Yes! Send us a message and we’ll process your request no questions asked.",

//     "Chat and email support is available 24/7. Phone lines are open during normal business hours."
// ]


// for (i = 0; i <= faqs.length; i++) {
//     faqs[i].addEventListener('click', function(i) {
//         faqs[i].classList.toggle('active');
//         const div = document.createElement('div');
//         div.innerHTML = answerText[i];
//         faqs[i].appendChild(div);
//         div.classList.add('answer');
//     });
// }