var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    isVerified: true,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    isVerified: true,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};


// Add blue check if user is verified
window.addEventListener("load", isUserVerified);




// .header, get and add "Elon Musk" and "# Tweets" /   Area 1
var header = document.querySelector(".header");
header.innerHTML += `
    <div>
        <p class="name">${user1.displayName} <span class="verifyCheck"></span></p>
        <p class="text-style">${user1.tweets.length} Tweets</p>
    </div>
`


// Creating variable to store twitter Verified Logo
var verified = document.createElement("img");
verified.classList.add("verified");
verified.setAttribute("src", "assets/verified.png");



// If is user is verified add blue check (I added "isVerified" proterty to the user object)
function isUserVerified() {
    if (user1.isVerified) {
        var check = document.querySelectorAll(".verifyCheck");
        check.forEach(el => el.appendChild(verified.cloneNode(true)));
    } 
}




// Top Background Image /    Area 2
var backgroundImage = document.createElement("div");
backgroundImage.classList.add("bg-image");

backgroundImage.style.cssText += `
    background-image: url(${user1.coverPhotoURL});
    background-size: cover;

`

var container = document.querySelector(".container");
var dashboard = document.querySelector(".dashboard");

container.insertBefore(backgroundImage, dashboard);

// console.log(backgroundImage);





// Dashboard / Area 3

var userImage = document.createElement("div");
userImage.classList.add("user-image");
userImage.style.cssText += `
    background-image: url(${user1.coverPhotoURL});
    background-size: cover;

`
var btnImageContainer = document.querySelector(".img-and-btn");
btnImageContainer.appendChild(userImage);

// var userImage


// Follow button logic
function FollowOrNot(followButton) {
    var followText = document.querySelector(".follow-btn");
    if (followText.textContent === "Following") {
        followText.textContent = "Follow";
        followText.style.backgroundColor = "black";
    } else {
        followText.textContent = "Following";
        followText.style.backgroundColor = "#1C9BEF";
    }
}

// Follow Button
var followButton = document.querySelector(".follow-btn");
followButton.addEventListener("click", FollowOrNot);


// Basic user info
var userInfo = document.querySelector(".user-info");
userInfo.innerHTML += `
        <p class="name">${user1.displayName} <span class="verifyCheck"></span></p>
        <p class="username">${user1.userName}</p>
        <p class="calendar-flex"><span class="calendar-icon"></span> <span class="date">Joined ${user1.joinedDate}</span></p>
`;

// Calendar SVG
var calendarSVG = document.createElement("span");
calendarSVG.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="calendar"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>
`;
var calendarDisplay = document.querySelector(".user-info .calendar-icon");
calendarDisplay.appendChild(calendarSVG);


// Account follows and following
var follow = document.querySelector(".follow");
follow.innerHTML += `
        <p><span class="numbers">${user1.followingCount} </span><span class="text-style">Following</span></p>
        <p><span class="numbers">${followersDisplay(user1.followerCount)} </span><span class="text-style">Followers</span></p>
`;

// From 47900000 followers to 47.9M
function followersDisplay(follower) {
    var followers_decimal = follower / 1000000;
    var followers = String(followers_decimal.toFixed(1)) + "M";
    return followers;
}


// User menu
function activeMenuItem(item) {
    if (item.textContent === "Tweets"){
        // item.children[0].classList.toggle("menu-item-active");
        console.log(item.textContent);
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });

    } else {
        alert("You need to sign in first.")
    }
    
    
}

var menuItems = document.querySelectorAll(".menu-item");
for (const menuItem of menuItems) {
    menuItem.addEventListener("click", function(e) {
        activeMenuItem(e.currentTarget);
});

}

// Tweets display

// 1. Check how many tweets 
// 2. Create as many divs as necessary
var tweetDiv = document.querySelectorAll(".tweets-display");
// console.log(tweetDiv);

var tweetsOfUser = user1.tweets;
console.log(tweetsOfUser);

// Tweets

var tweetContainer = document.querySelector(".tweet-timeline");
// console.log(tweetContainer);


for (let tweet of tweetsOfUser) {
    var tweetDiv = document.createElement("div");
    tweetDiv.classList.add("tweet");

    // tweetDiv.appendChild(backgroundImage.cloneNode(true));
    console.log(tweetDiv);
    tweetDiv.innerHTML =   `


        <p>${tweet.text}</p>

        <div class="engagement">
            <img class = "message-icon" src="https://img.icons8.com/material-outlined/24/000000/speech-bubble.png"/>
            <img class = "retweet-icon" src="https://img.icons8.com/material-outlined/50/000000/retweet.png"/>
            <img class = "like-icon" src="https://img.icons8.com/material-outlined/32/000000/filled-like.png"/>
            <img class = "share-icon" src="https://img.icons8.com/material-two-tone/32/000000/share-rounded.png"/>
            
        
        </div>
    `


    tweetContainer.appendChild(tweetDiv);


    // console.log(tweet.text);
    // console.log(tweet.timestamp);
}

