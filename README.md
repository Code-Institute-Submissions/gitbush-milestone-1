# The John Butler Trio

Front end only website built for Code Institutes Full Stack Web Development course (User Centric Front End module).

The John Butler Trio are an Australian roots/rock band. The band were chosen as the subject for this project due to their availability of a
varied selection of images, videos, music and color pallete to allow for greater flexibility in design.

### UX

This website was created for two reasons:

1. The primary purpose of showcasing the skills I have learn't in the first 3 module of Code Institutes Full Stack Web Development course where:

    - As an accessor you will be able to:
        - Easily browse and test all functionality of the 4 page website.
        - View the code written behind the website 

2. This website, once deployed live, will provide any fans of The John Butler Trio with information relaiting to the band where:

    - As a fan of The John Butler Trio you will be able to:
        - Browse latest news such as tour dates, videos, photos, music, social media, band bios etc 
        - Contact the band for promotional or fan based queries

#### Wireframes

Draft wireframes can be found <a href= "https://github.com/gitbush/milestone-1/blob/master/assets/wireframes/wireframes-JBT.pdf" target="_blank">here</a> 


### Features

* Social media links
    - Embedded Tweets using the Twitter Developer page - <a href= "https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview" target="_blank">Twitter Developer</a>
    - All social media icons will send the user to the relevant band or band member social media pages.
* Music page Album/Spotify Embed
    - Checkbox set to display none with a label in its place. When "checked" updates the max-height of the ".wrap" 
      container to 0 - showing the spotify iframe underneath. 
    - Although this could have been achieved much easier with Javascript - using only HTML and CSS - showcases my 
      understanding of the technologies taught in the User Centric Frontend Modules.
* Contact form and email navbar form
    - All forms are validated with HTML5 validation. This prevents a user from submitting an invalid input.
    - A confirmation modal with appear on succesful submit of form. 
    
#### Feautures to Implement

* Social Feed
    - Improve on the Twitter Tweet embed and add a live Twitter/Instagram Timeline feed. 
* Contact Forms
    - Add request proccessing functionality to all forms.

### Technologies Used

Tehnologies used in this project:

* HTML5- for markup.
* CSS3 - for static styling.
* Javascript and Jquery - for dropdown menu (although not needed for assessment)
* Font Awesome 5 - Icon elements 
* Bootstrap (3.3.7) for: 
    - Repsonsive grid layout
    - Navbar & dropdown menu
    - Some button styles
* Google Fonts
    - "Lato" Font used on the site are provided from Google Fonts. 

Tools used in this project:

* For image formatting:
    - <a href = "http://resizeimage.net/" target="_blank">Image resizer</a>
    - <a href = "https://www269.lunapic.com/editor/?action=transparent" target = "_blank">Image Editor</a>

### Testing

#### As an assessor you will be able to succesfully test the website: 

1. HTML validator - <a href = "https://validator.w3.org/" target="_blank">Here</a>
2. CSS validator - <a href = "https://jigsaw.w3.org/css-validator/" target= "_blank">Here</a>
3. On all screen sizes/devices.

    * Tools used for screen size/device compatability:

        - Chrome dev tools
        - <a href = "http://responsivedesignchecker.com/" target= "_blank">Responsive Design Checker</a>

4. On all major browsers
    * Google Chrome - no issues.
    * Microsoft Edge - Latest news section was pushed down the page. Removed float-none to resolve.
    * Firefox - no issues.
    * Safari - form validation is not supported on safari without Javascript. Modals will load with an empty field.
    As this is a HTML and CSS project I left as is.
    * Opera - no issues.

5. All forms are validated with relevant messages and submits are validated with modals.

6. All links to social media functional eg:
    * Instagram
    * Twitter
    * Spotify 
    * Facebooks
    * Youtube

#### As fan of The John Butler Trio you will be able to navigate the website:

1. Each page loads correctly.

2. Youtube embedded videos play succesfully. Youtube link takes users to the bands Youtube page.

3. Spotify embed/album cover (using checkbox hack) allows users to see the album cover before listening to relevant tracks.

4. Social media icons will take user to the bands relevant social media platforms.

5. Contact form will submit user information (currently form is front end only for this course module)

### Deployment
 
Deployment and source control was handled by git and github. The repository can be found here:

<a href = "https://github.com/gitbush/milestone-1" target= "_blank">Milestone 1 repo</a>


The site has been deployed using GitHub Pages via the master branch and is available to review here:

<a href = "https://gitbush.github.io/milestone-1/ " target= "_blank">Github Pages</a>
 
 
#### Content

All content used on this site was obtained from wikipedia and the John Butler Trios website.
* <a href = "https://en.wikipedia.org/wiki/John_Butler_Trio" target= "_blank">John Butler Trio Wikipedia</a>
* <a href = "https://johnbutlertrio.com/" target= "_blank">John Butler Trio Website</a>

#### Media

Music from The John Butler Trio spotify page:
* <a href = "https://open.spotify.com/artist/6fBF4MULW5yMzyGaon1kUt?si=u4RYavBiROOCNNHwun_wQw" target= "_blank">John Butler Trio Spotify</a>


Videos from The John Butler Trio Youtube channel:
* <a href = "https://www.youtube.com/channel/UCQ0gZgLbqHywkNU_mDJKDzg" target= "_blank">John Butler Trio YouTube</a>


#### Acknowledgements

Full credit to fellow code institute students for positive reviews and feedback!

