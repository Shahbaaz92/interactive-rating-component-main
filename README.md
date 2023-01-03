# Frontend Mentor - Interactive rating component solution

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

A

### Links

- Solution URL: [Add solution URL here](https://github.com/Shahbaaz92/interactive-rating-component-main)
- Live Site URL: [Add live site URL here](https://interactive-rating-component-shahbaaz.netlify.app/)

## My process

First structuring the html components : Rating card and Thank you card
STYLING the project
Creating events in script.js file

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

```html

```

```css

```

```js
for (let i = 0; i < rateBtns.length; i++) {
  rateBtns[i].addEventListener("click", function () {
    activeBtns[0].className = activeBtns[0].className.replace(" active", "");
    this.className += " active";
  });
}
submitBtn.addEventListener("click", function () {
  for (let i = 0; i < rateBtns.length; i++) {
    if (rateBtns[i].classList.contains("active")) {
      selected.innerHTML = `You selected ${i + 1} out of 5`;
      mainContainer.style.display = "none";
      subContainer.style.display = "block";
    }
  }
});
```

### Continued development

Improving all aspects of web development

### Useful resources

- [1](https://https://www.w3schools.com/) - Lot of help from html to js
- [Example resource 2](https://stackoverflow.com)

## Author

- Website - [Shahbaaz Athhar](https://github.com/Shahbaaz92)
- Frontend Mentor - [@Shahbaaz92](https://www.frontendmentor.io/profile/Shahbaaz92)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
