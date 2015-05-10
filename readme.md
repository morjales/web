Recently, I played D&D with my friends. One of them was new to the game and had to be guided through then entire process of building a character.  I built this site so I could see how other similar sites could be put together, and possibly even for my own use in the future.

Breakpoints:
	On all pages, the nav will change depending on the sides
	On cc.html, the entire layout of the page changes
		Changes happen on 699px and 1000px

Flexbox:
	On all pages, the nav was secured through use of flexbox
		Used Columns
	On cc.html there is extensive use of flexboxes to ensure positioning
		Usage of both columns, rows, justifying, and more

Background image:
	Background image of site, found in puzzles.css
		Background behind text made transparent through rgba

Animation:
	On index.html, under the short introduction
		Use of webkit-keyframes and setting opacities
		There are 6 images, and the transformation takes 4 seconds with 2 seconds of overlap.  So the total time is 24 seconds.
		Delays are put in for 4 second intervals to ensure they happen at the right time.

Toggle Visibility:
	Extensive use of this on cc.html to make alignments, race, class, and stats visibile/invisible on selection.
	
## Grading

1. **Readme** 5 points
2. **Wireframes** 10 points
3. **HTML** 10 points
  1. Validation errors: -1pt
  2. You included one of the four common Aria landmark roles. Two you mis-coded as `aria-label` instead of `role`: -1pt
  3. The pages all have the same title, and one is just "D": -1pt
  4. I could not find any instances of `srcset` or `picture`: -2pt
4. **CSS** 6 points
  1. You used `max-width` media queries instead of mobile first `min-width`: -2pt
  2. Could not find an instance of a 3-up layout (nothing documented in the readme): -2pt
5. **Javascript** 5 points
  1. Page width is not output on load or resize: -1pt
  2. Missing jQuery animation: -2pt
  3. Missing required `Toggle an elements visual (css) style`: -2pt

**Total:** 36

