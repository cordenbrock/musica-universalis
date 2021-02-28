Cory Nordenbrock
 
Name of Project: 
Musica Universalis || Musical constellations
 
Project Goal:
Set on the backdrop of a stellar night-sky are dozens of randomly plotted “stars” that individually represent a single musical note. In this music/math/astronomy-themed web app, a user will be able to target a star and any number of other stars with a click to resonate an associated note, thus eventually forming interesting chordal/harmonic relationships.

Use Case:

The project goal here has the potential to serve a couple foreseeable purposes. 

First, for the musician-user, one could perhaps quite literally draw some creative inspiration from spontaneously generating notes without any preconceived notions of what harmonies might emerge. In order to inhibit deliberation and enhance discovery, all “star-notes” will appear anonymous in the sense that they are just clickable elements on the page. But, in order to promote the later use of any captivating discoveries, the app will store current data (e.g., all active notes, those respective intervals, possible chord formations, etc.) in a toggleable modal, sidebar, or similar component that the user may view to then deliberate any musical potential of their constellation.

Secondly, for the non-musician user, just as one’s eyes naturally discover visual patterns in the night sky, this app in its full actualization would similarly create the conditions for the ears to discover emergent, aural “constellations.” This aspect of the app is certainly more qualitative in value, but ideally will stimulate user curiosity and encourage further exploration in the relations between music, math, and astronomy.

MVP:
Capability to enable/disable star-note elements both audibly (i.e., with responsive playback) and visually (i.e., with styling that indicates a whether an element is active/selected)
Latency-free(ish) web audio playback during user interaction
Randomly assigned note values to each star-note element upon every page load
Toggleable component that reveals corresponding music data from user input

MVP toolstack/languages:
React
Web Audio API
Tone.js library
CSS, look into Material-UI?

Additional Features:

Live deployment
Visually appealing animations that draw out the constellation of star-notes the user has created
User settings offering parameters to customize tone, modes, or the option to playback a melody/arpeggiate the user’s constellation
Use of a star-map-API to display a user’s realtime date/region-based star map 
Extra-exploratory: integration of Google’s Magenta.js API to add some “simple” machine-learning feature 
 
Additional toolstack/languages
Heroku
For animations, possibly three.js, react-three-fiber,js, p5.js, Canvas API
Sky-Map.org API
Magenta.js
 
Additional Info:
Ultimately, this project’s intention is to pay homage to musically-minded mathematicians from Pythagoras to Keppler and their propagation of the concept colloquially known as the music of the spheres. As a self-taught musician, I have always had peculiar feelings regarding the relationship between learning theory to increase technical proficiency and fostering methods and environment to maximize artistic creativity. Sensing the two were diametrically opposed--as explaining a joke is always detrimental to laughter, or, how, verbosely deconstructing the ineffable qualities of a well-prepared meal might come at the expense of letting the food get cold--I typically opted to put theory in the backseat and just play my instrument. Yet, in retrospect, those feelings seem a little contrived. Now, as I progress with becoming a developer and am building up a more logic-heavy, tech-oriented brain, I have been exposed to new ideas and theory and have become more open to how tech may be leveraged as a creative outlet for music and related arts. 
