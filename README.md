# WDI Project One: Whack-A-Mole

## Technologies
<ul>
	<li>HTML5</li>
	<li>CSS3</li>
	<li>SCSS</li>
	<li>Javascript, including ES6</li>
	<li>JQuery</li>
	<li>Atom</li>
</ul>

<a href="https://wallergoble.github.io/Whack-A-Mole/">Deployed app</a>

<a href="https://trello.com/b/MyPC1Oa6/project-1">Trello board</a>


## Overview
The prompt for this project was a front-end only browser game using HTML, CSS, and Javascript. I chose to do whack-a-mole because I thought it would be funny, and it would provide a good opportunity to work with event handlers, CSS animations, and DOM manipulation.

My original wireframe: 


![Wireframe](/assets/wireframe.jpg)

My main goals were: 
<ul>
	<li>Dynamically updated score and timer</li>
	<li>Moles, animated using CSS</li>
	<li>Game logic which made the moles spawn randomly</li>
</ul>

## Roadblocks

I had a few major impediments to my progress while writing this application.

### Timer funcitonality
To construct a timer, I used the window.setInterval method, which had a few follies. One just understanding how the method worked and the syntax it required. Secondly, understanding that I had to define a variable with it in global scope in order to clear the interval took a lot of reserach.

### Game Logic
Originally, the logic which defined when the moles popped up was based on window.setTimeout, and a convoluted function which generated the amount of milliseconds it would take for the timeout to complete randomly.

That was scrapped in favor of a system that used control flow to check if a hide class was present on the mole, and then generated a random number to decide whether or not the class should be removed. 

Fine tuning these numbers is still a work in progress.

### jQuery Objects
jQuery is a tantalizing solution because it makes grabbing nodes on the DOM very easy. However, working with what it grabs actually convolutes the process. In my project, I grabbed all of the elements with the mole class and tried to use .forEach on them. As I soon realized, I was not working with a simple array, but a jQuery object. I tried to learn "the jQuery way" of working with them, but finally resorted to just converting it to an array and working with it with vanilla Javascript. 

## Retrospective
Looking back on how the project went, I wish I had not used jQuery. I feel like the project would have been a better honing of my Javascript skills if I had tried to work in vanilla Javascript. 

I also learned the value of plotting out your project and working on a MVP before adding features. Had I started working on random features like a high score board at the beginning, there would have been no way I could have finished in the alloted time. 

Luckily, there's always the future, and I can come back and refactor this project as I have time to, adding some of the extra features in my trello board.
