# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author: Rendrol](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- JavaScript
- JQuery

### What I learned

Creating Linear Gradient Background using CSS

```css
background: linear-gradient(
  180deg,
  rgba(37, 45, 55, 1) 0%,
  rgba(37, 45, 55, 0.8) 50%,
  rgba(37, 45, 55, 0.7) 70%,
  rgba(37, 45, 55, 0.5) 90%,
  rgba(37, 45, 55, 0.3) 100%
);
```

Using JQuery .index() method to store the rating point.

```js
let rating = $(".rating").index(this) + 1;
$(".rating-result").text("You selected " + rating + " out of 5");
```

Nesting the event handler for Redirecting page inside the event handler of rating, so that user could only submit and redirect after clicking the rating point.

```js
$(".rating").click(function (e) {
  $("button").click(function (e) {
    $(".rating-result").text("You selected " + rating + " out of 5");
  });
});
```

## Author

- Github - [Rendrol](https://github.com/Rendrol)
- Frontend Mentor - [@Rendrol](https://www.frontendmentor.io/profile/Rendrol)
