
![Site Langing Page](./public/images/work-remote-logo.png)

## Technology Used 
<p float="left">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white">
<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
<img src="https://img.shields.io/badge/Handlebars%20js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black">
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white">
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3Eh">
<img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white">
<img src="https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white">
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
</p>

## Description 

[Visit the Deployed "Work Remote" site](https://youtu.be/BFyeuLhjcPY) 👀


The Global Remote Workplace Services Market size is estimated to grow from USD 20.1 billion in 2022 to USD 58.5 billion by 2027, at a Compound Annual Growth Rate (CAGR) of 23.8% during the forecast period, according to a report by MarketsandMarkets.  This is a HUGE market (currently 20.1 Billion),  that is increasing at a staggering rate (23.8% annually).  

How does a person find remote work opportunities? There needs to be a way for people needing remote work to be done to find people capable of doing that work. 

This project which we have named “Work Remote” provides the ability for people who need remote work to be done to post their projects.  And for people looking to do remote work, to find those projects and contact the person who posted it. "Work Remote" is a job board for remote workers.


![Site Langing Page](./site.gif)


## Table of Contents 

* [How To Install](#how-to-install)
* [Usage & Features](#usage-and-features)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [License](#license)
* [Badges](#badges)


## How To Install

1. Copy this GitHub repository down to your local drive. 
2. Open the folder where you placed the files from this repository on your local drive with your Git terminal. Make sure you can see the server.js file and also the package.json file.
3. Type “npm install” to install all the necessary dependencies that are called out in the package.json file.
4. Type “node server” If you have everything set up correctly you will see the message “now listening on http://localhost:3001” This means that your MySQL server database is up and ready to send and receive information from your browser.
5. Open your browser and go to http://localhost:3001 and you will be able to use your own instance of Work Remote.

## Usage and Features

This project has three separate users in mind:

1. All Users
2. The Job Post User (Client)
3. The Job Viewer User (Worker)

#### Concerning All Users:

All users can go to the site and are limited to viewing the 6 most recent project posts without being logged in.  In order to see all the job posts or to make a job post a user must make an account by entering their user name, email, and password. This information is saved to the server.  For security purposes, the user's password is made into a hash by using npm bcrypt and is stored on the server not as a raw password but as a hash.

When a user is a returning user (coming back to the site for a 2nd or more time) when they enter their username and password, bcrypt hashes the password they entered and then looks for a matching hash and username on the server. If a match is found they are logged in.  Once logged in the users behavior defines if they are now a Client or Worker.

#### Concerning Client Users
Once logged in, a Client User can go to “My Job Listing” or “Post Job” if they would like to view and edit their existing job posts or make a new job post respectively. If a Client clicks on “My Job Listing” they are taken to a list of all of their current job posts.  Once there, each job has the option to “Learn More” (Which shows the entirety of that job post as it is, and is not editable). “Edit” (Which shows the job in an editor where ALL of the job properties are editable. This is really nice if a user wants to modify the requirements of a job, maybe even change the type of job, and can of course modify their budget).

#### Concerning Worker Users
Once logged in, a Worker User can go to “See Jobs” and the entire list of all available jobs will be shown to them.  At the same time, a drop-down sort function is given to them at the top of the page where they can select the jobs to be displayed to them by category, where only the category of job they choose will then be shown to them. 

The Worker User can then select a job to view by clicking on “Learn More”.  That will display for them the listing of the job with all of the details including a contact email at the bottom where if they are interested in the work they can email the job poster.  If they click on the email button their e-mail editor will automatically open and the Clients email will be automatically populated. 

## Learning Points 

## Author Info
If you made it this far "thank you!" 😁🙏👍 We appreciate you taking such a thorough look at our work.  If you would like to contact us or see more of our work please use the links below.

### Jorge Castro

<a href="mailto: jorgecastro619@gmail.com" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="https://www.linkedin.com/in/jorge-castro-2a9545177/" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://github.com/Jacastro619" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>

### Nhi Hoang

<a href="mailto: evie.h0325@gmail.com" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="https://www.linkedin.com/in/ynhihoang/" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://github.com/eviehoang" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>

### Steven Sills II

<a href="mailto: stevensills2@gmail.com" target="_blank"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="paperpatch"/></a>
<a href="https://www.linkedin.com/in/steven-sills-ii-90781b53/" target="_blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="paperpatch"/></a>
<a href="https://apixa25.github.io/steven-sills-portfolio/" target="_blank"><img align="center" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="paperpatch"/></a>


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges


