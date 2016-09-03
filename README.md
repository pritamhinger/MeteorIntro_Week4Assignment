# MeteorIntro_Week4Assignment
## A Social website aggregator

This repository contains Week4 Assignment Code of Course 'Introduction to Meteor.js Development' which is part of 'Responsive Website Development and Design Specialisation'

### Problem Statement
You are to make a website aggregator application. The purpose of the application is to allow users to share, discuss and rate pages they find on the internet. 

Features:

1. Users can register and login.
2. Users can post new websites if they are logged in. Websites posted by users should have an URL and a description.
3. Users can up and down vote webpages by clicking a plus or a minus button.
4. Websites should be listed with the most up voted site first.
5. The listing page shows when the website was added and how many up and down votes it has.
6. Users can move to a detail page for a website (using routing).
7. On the detail page, users can post comments about a webpage, and they are displayed below the description of the webpage.

Extra Credits:
#### 1. Automatic information
Can you use the HTTP package for Meteor to pull in information about the posted web links automatically, so the user does not need to enter anything other than the URL?

#### 2. Search function
Implement a search function that allows the user to search within the listed sites for key words

#### 3. Website recommender
Can you recommend websites to users based on things they have up voted and commented on? E.g. if I up vote a site entitled ‘Tofu recipes’, it would recommend other sites with ‘tofu’ and ‘recipe’ in their titles or descriptions.

## How to use the code

To checkout and use this repository follow steps as listed below:
```
$ git clone https://github.com/pritamhinger/MeteorIntro_Week4Assignment.git
$ cd MeteorIntro_Week4Assignment
$ meteor
```

> If there is a compilation error regarding bcrypt library then run below command before running `meteor` command

```
$ meteor update
$ meteor
```

## License

`MeteorIntro_Week4Assignment` is released under an [MIT License] (https://opensource.org/licenses/MIT). See `License` for details
