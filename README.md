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

Draft wireframes can be found here https://balsamiq.cloud/smhrh91/pnbf567/r8562

### Features

* Social media links
    - Embedded Tweets using the Twitter Developer page - https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview
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
* Javascript and Jquery (https://jquery.com) - used for dropdown menu (although not needed for assessment)
* Font Awesome 5 - Icon elements 
* Bootstrap (https://getbootstrap.com/docs/3.3/) used for: 
    - Repsonsive grid layout
    - Navbar & dropdown menu
    - Some button styles
* Google Fonts
    - "Lato" Font used on the site are provided from Google Fonts. 

Tools used in this project:

* For image formatting:
    - http://resizeimage.net/
    - https://www269.lunapic.com/editor/?action=transparent

### Testing

#### As an assessor you will be able to succesfully test the website: 

1. HTML validator https://validator.w3.org/
2. CSS validator https://jigsaw.w3.org/css-validator/
3. On all screen sizes/devices.

    * Tools used for screen size/device compatability:

        - Chrome dev tools
        - http://responsivedesignchecker.com/

4. On all major browsers
    * Tested on all browsers 

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

https://github.com/gitbush/milestone-1

The site has been deployed using GitHub Pages via the master branch and is available to review here:

Github Pages: https://gitbush.github.io/milestone-1/ 


#### Content

All content used on this site was obtained from wikipedia and the John Butler Trios website.
* https://en.wikipedia.org/wiki/John_Butler_Trio
* https://johnbutlertrio.com/

#### Media

Music from The John Butler Trio spotify page:
* https://open.spotify.com/artist/6fBF4MULW5yMzyGaon1kUt?si=u4RYavBiROOCNNHwun_wQw

Videos from The John Butler Trio Youtube channel:
* https://www.youtube.com/channel/UCQ0gZgLbqHywkNU_mDJKDzg

#### Acknowledgements

Full credit to fellow code institue students for positive reviews and feedback!

