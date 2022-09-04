# Portfolio

## Planning
Figma: https://www.figma.com/file/sz4e4HZja1kuRqoLS2SjKY/Portfolio-Site?node-id=0%3A1
  - wireframes
  - user stories
  - release plan
  
Release Plan:
- [X] Landing page with summary of me and social links.
- [X] Projects page with tech stack and learnings for each project.
- [X] Make website responsive, especially on mobile.
- [ ] Education page.
- [ ] About Me page.
- [ ] Tech stack filter (Projects page).
- [ ] 3D version. Include loader.

## Reflections
### 30/08/22
#### Obstacles / Difficulties: 
1. My computer died. RIP. Luckily I have someone wonderful in my life who is lending me their computer to work on this portfolio.
2. Tailwind CSS x Flexbox.
3. React useState hook x window.location.pathname. Still to be overcome. I have three sections to my website: education, projects, and about me, which you can access through a navigation bar. I want to embolden the relevant section link on the nav bar if the user is visiting that section.

#### Learnings:
1. Tailwind CSS x Flexbox. I'd neglected styling during my Dev Academy Aotearoa (DAA) journey, focusing on aspects that involved more complexity and problem-solving, so it's only fair that I'd struggled with styling with Tailwind CSS and Flexbox. I'm proud of myself for not banging my head against the wall, having the wisdom to step back, and research and create a mental model of how Flexbox works. I'd already used Tailwind at DAA (I'd already done the mahi and cried the tears), and along with copying the configuration from a DAA group project, this part was easy.
2. Wireframes are useful! During a styling dilemma while I was coding, I went back to my wireframes, which made decision-making easy.
3. My user stories and release plan provide clarity. Especially with what I should be doing at each moment.
4. I've still got it!

### 31/08/22
#### Obstacles / Difficulties:
1. Changing width and keeping everything centered. I tried many different centering codes with different width codes. I ended up only setting the width of paragraph elements, which avoided the issue of everything sticking to the left if I set the whole app to a certain width. The paragraph elements were the only elements where their width affected the aesthetic of my portfolio.

#### Learnings:
1. Responsive styling with Tailwind and Flexbox. Surprisingly straightforward, especially once I learned about how breakpoints work. This documentation helped: https://tailwindcss.com/docs/responsive-design, especially the section "Targeting mobile screens". Proud of myself for minimising Tailwind CSS code by seeing if components would acquire the desired effect if their parent contained the CSS code instead. Yay for DRY code! Yay for responsive styling! :D
2. My conversation with Dev Academy Aotearoa's careers team, Tom and Caryne, helped me realise what were most important to me in a job. I'm fired up by the thought of learning and growing in software development and leadership. I want to be someone who can solve more and more complex problems, provide elegant solutions, and create beautiful code. I want to work in a place where I have exposure to leadership and teamwork that I want to emulate, that is effective, inspiring, and harmonious; exemplary leadership. I want to work in an environment that is high energy and creative. I want mentorship and learning resources. I need challenge. Note to self to fully reflect this in my portfolio and to come up with questions for potential employers regarding my standards.
3. Sleep, exercise, and continuously executing fruitful actions energise me ⚡

### 01/09/22
#### Obstacles / Difficulties:
1. Project descriptions. I created a Projects component, then a Project component to format each project displayed on the Projects component. It turns out my project descriptions are too long to pass as a prop to the Project component and keep my code tidy. First I tried creating a txt file, then an HTML file, both was like trying to fit a puzzle piece from a different puzzle. Next, I tried creating another component. This seemed most promising... but my first tries of passing it as a prop failed. From googling, I was reminded of children! This failed too. I had worked with children before, so I knew this had to work. There must be a tiny mistake. So I tried renaming my project description component and file name from '**p**ortfolioDescription' to '**P**ortfolioDescription'. Suddenly, all my content, along with the project description appeared! (Thanks Vite.)

#### Learnings:
1. React components use PascalCase.
2. Reminded that React components can have children!
3. Start. I didn't particularly feel like coding this day, unlike the last couple of days. I had at most a foggy vision for what I wanted to finish by the end of the day. I just started working anyway, and a sort of muscle memory kicked in and I ended up creating the skeletons for my projects section, which I realise are also skeletons for my education section :)

### 02/09/22
#### Obstacles / Difficulties:
1. Creating React elements from an array.
2. Motivation and energy levels. 

#### Learnings:
1. Play, fun, empathy, and maintaining great relationships with loved ones are important for my energy and motivation :) 
2. Returning React elements straight from a forEach() loop doesn't work! I found out map() works in place of forEach(). I could also do this: https://codesource.io/how-to-use-foreach-loop-in-react/, but it seems map() would be more straightforward and have the same effect. Can I render an array of React elements? My guess is yes.

#### My new computer arrived! 😌
Thank you to my catalyst for all your help and support.

### 03/09/22
#### Obstacles / Difficulties:
1. Time. This day I didn't code. This day I worked a 4-hour shift at one of my three casual jobs. Then I went on a city adventure with a loved one. This helped fill up my cup a little more :) I was so tired at the end of all this that I decided that instead of my usual goal to spend my public transport time productively, I would let myself do whatever I wanted to for my 2 hours it would take to get home. I tried playing 1010! but that didn't have its usual hold on me. I didn't even want to listen to music or go down a YouTube rabbit hole. What ended up being most satisfying to me, in my tired state, was setting up my new computer for coding using Dev Academy Aotearoa's software setup instructions, and later, updating the reflections you're reading. I do wonder why I've been extra tired and low motivation in the last couple of days. I've been through more intensity at Bootcamp, and I never felt like this. Do I need community? stimulation? challenge? play? rest? Could the steep increase in exercise and decrease in sleep affect me significantly? Those few days of relationship strain? Has my extroverted self not had enough social interactions? I think I'm particularly energised by great group interactions. (I miss my DAA course mates.) I realise these could all be aggregating to my recent state. -1 -1 -1 

#### Learnings:
1. Reflecting is very helpful. Technically, it helps me remember what I learned. It also helps me recognise my progress, which probably prevents self-doubt and other nasties from coming up. Human-skilly, it helps me gain perspective, clarity, and understanding of the non-technical-knowledge-or-skill factors that get in the way of me enjoying, optimising, or doing my work... and flourishing as a human being. Realisation: I need motivation. Motivation = (Expectancy x Value) / (Impulsivity x Delay). The denominator is low, so it must be the expectancy and value. I guess I'll just have to get feedback from the real world on my portfolio? Or before the SoT Meet and Greet I could show Tom and Caryne? Or Ahmad? Or Rich?  
Nice problem-solving 🙏🏽 (me high-fiving myself). Note, I used empathy (particulary, Nonviolent Communication) and knowledge from Optimize (motivation equation). In recognising my needs, I recognise the natural goal. You could say the ultimate goal is flourishing, and the sub-goals or path to flourishing involves continuously meeting all your needs, the particular needs of the moment being the natural goal. My low motivation is the bug. Optimize is the documentation. I am the problem-solver. 👑

### 04/09/22
#### Obstacles / Difficulties:
1. No portfolio work this day. I focused on doing well on my first ever technical test. The test overview informed me there would be SQL questions, and gradnewzealand.nz contributors informed me there might be SQL joins, neither of which I was confident with, so I focused on preparing for these questions.

#### Learnings:
1. Being prepared is great. I prepared for my first ever technical test by practicing on HackerRank for a couple of weeks, knowing this is where the test would be held, and through LeetCode prior to this knowledge, for general tech test preparation... and because it was fun. I also watched and took notes of these videos on SQL and SQL Joins, respectively: https://www.youtube.com/watch?v=8kDs8QkFI2Y, https://www.youtube.com/watch?v=bLL5NbBEg2I, and practicing some SQL challenges on HackerRank. I got 5 of the 6 questions in the allocated hour, and minutes after the test, I finished solving the 1 I didn't quite get in time and sent it to the team of the company the tech test was for. Proud of myself for working so hard the last week, putting in the right mahi, and giving myself the best shot; for watering the seeds of being someone who prepares and works hard. I'm gaining my own trust! YUS. Stephen M. R. Covey would be proud.
2. Naps are great. Coffee naps are great? I was very sleepy in the morning. After a coffee nap, I felt renewed, the clouds of sleepiness had passed. Joy! Maybe this is a great remedy for tired days, intense days. How do I get myself to nap when I'm not so tired and when I'm a little wired? Great sleeping conditions?! Cool, dark, and quiet.
3. Play is sweeter after a good day's work.
