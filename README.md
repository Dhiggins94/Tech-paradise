# Project Overview

## Project Name

Tech-Paradise 

## Project Description

The user will be able to select from a category of items such as computers, keyboards, mouses, etc. Users should be able to leave reviews about their products of choice 

## Wireframes

Here is my wireframe for the website. its modeled after a phone display

![WireFrame for website](https://i.imgur.com/ukviGHb.png "its wireframe of the website built for phone first")

## Component Hierarchy

![Component hierarchy for website](https://i.imgur.com/1MHGbez.png " this is the component hierarchy  of the website")


## API and Data Sample
Airtable 1
```
{
    "records": [
        {
            "id": "rec6QUnp2K3GJV8px",
            "fields": {
                "price": 100,
                "category ": "laptop TEST",
                "Brand": "BRAND TEST",
                "productDescription": "DESCRIPTION TEST",
                "image": "https://nzxt.com/assets/cms/34299/1618960827-elite5grid.png?auto=format&fit=max&h=900&w=900",
                "review": [
                    "recwZpLjs2zGloXQ6"
                ],
                "name": "nzxt "
            },
            "createdTime": "2021-07-13T15:16:30.000Z"
        },
        {
            "id": "recNGDcV46iAuzXd2",
            "fields": {
                "name": "msi-stealth-pro",
                "price": 600,
                "category ": "laptop",
                "Brand": "msi",
                "productDescription": "whole lot of cpu",
                "image": "https://images-na.ssl-images-amazon.com/images/I/71eMjQPRKoL._AC_SL1500_.jpg",
                "review": [
                    "recuRuK0mxCmVTwQ4"
                ]
            },
            "createdTime": "2021-07-13T23:08:24.000Z"
        },
        {
            "id": "recCXOK88JhaX4mXY",
            "fields": {
                "name": "macbook",
                "price": 1200,
                "category ": "laptop",
                "Brand": "mac",
                "productDescription": "expensive but good-ish",
                "image": "https://cdn.freebiesbug.com/wp-content/uploads/2014/02/macbook-pro-psd-mockup-580x400.jpg",
                "review": [
                    "rect1FAo7HnnKMs3a"
                ]
            },
            "createdTime": "2021-07-13T23:49:37.000Z"
        }
    ],
    "offset": "recCXOK88JhaX4mXY"
}
```
AirTable 2
```
{
    "records": [
        {
            "id": "recwZpLjs2zGloXQ6",
            "fields": {
                "name": "review",
                "Table 1": [
                    "rec6QUnp2K3GJV8px"
                ],
                "Rating": 4,
                "review": "its really good i like it"
            },
            "createdTime": "2021-07-13T20:50:00.000Z"
        },
        {
            "id": "recxzwHRx4TuNiGXX",
            "fields": {
                "name": "rating",
                "Rating": 2,
                "review": "its really bad i dont like it"
            },
            "createdTime": "2021-07-13T23:25:01.000Z"
        },
        {
            "id": "rect1FAo7HnnKMs3a",
            "fields": {
                "Table 1": [
                    "recCXOK88JhaX4mXY"
                ],
                "name": "macbook",
                "review": "its ok i guess",
                "Rating": 2
            },
            "createdTime": "2021-07-13T23:54:28.000Z"
        }
    ],
    "offset": "rect1FAo7HnnKMs3a"
}
```

#### MVP 
1. use postman to observe that the airtable api is working
2. create react app and install anything else needed like axios
3. test render data from airtable as proof information can be displayed
4. have options to go to home,reviews, and inventory 
5. have inventory display show categories of different kind of items
6. pressing a category should give items of that category. example (pressing mouses, should show any mouses avaliable).
7. item should show infomation like its price, brief description.
8. pressing review should take you to a form which then should let you give it a select item,give it a rating and a place to input text along with a submit button as well as edit and delete your review.
9. style with flexbox and add media queries.

#### PostMVP  
1. show a quantity of items in your shopping cart, individual and in total.
2. show a total price of all items in the shopping cart.
3. when selecting an item to go to your shopping cart, show reviews of that item if any was made.
4. style with css grid
5. 5.create shopping cart

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|July 12| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|July 13| Project Approval | complete
|July 13| Core Application Structure (HTML, CSS, etc.) | complete
|July 14-15| Pseudocode / actual code | complete
|July 15-16| Initial Clickable Model  | complete
|July 19| MVP | complete
|July 20| Presentations | W.I.P

## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Getting the API rendering data | M | 3 hrs| 3 hrs | 5 hrs |
| writing Pseudocode | H| 3 hrs| 3 hrs | 4 hrs |
| Setting up the react folder structure| H | 3hrs| 3 hrs | 2 hrs |
| Get functionality on routes(inventory ,etc)| H | 3hrs| 3 hrs | 2 hrs |
| Get the Airtable to display testData | H| 3 hrs| 3 hrs | 6hrs |
| Check Airtable for any corrections that need to be made| H| 3 hrs| 3 hrs | 4 hrs |
| implement site with working catergory buttons | H | 3 hrs| 3 hrs | 4 hrs |
| implement item selection to show info of the item (price for example)| H | 3 hrs| 3 hrs | 6 hrs |
| implement form to accept new reviews | H | 3 hrs| 3 hrs | 6 hrs |
| Advance styling for css(flexbox) or (grid) | M | 3 hrs| 3 hrs | 4 hrs |
| Using media queries for phones/desktops | M | 3 hrs| 3 hrs | 1 hrs |
| Checking for errors in react syntax | H | 3 hrs| 3 hrs | 6 hrs |
| Checking for errors in CSS styling | M | 3 hrs| 3 hrs | 2 hrs |
| Deploy the website, ask for help using error tickets| L | 2 hrs| 3 hrs | 3 hrs |
| Practice presnetation | L | 2 hrs| 2 hrs | 1 hrs |
| Total | N/A |46 hrs| 44 hrs | 54 hrs |
## SWOT Analysis

### Strengths: I think my greatest strength is to be able to plan my process throughly with pseudocode. This helps me organize my thoughts and included everything i know i'll need so i dont get distracted adding features at the last minute. As well as learning being able to search online and my own notes for what i need when i encounter problems regarding error messages. Alot of what we did to implementing certain features happened in class so i feel confident in implementing certain features like routes and forms.

### Weaknesses: the rating system i had in mind might be a roadblock for me because i havent decided if i should settle doing ratings for numbers 1-5 or stars 1-5. Another roadblock i think i'll have trouble with is getting certain information to carry over in the shopping cart as well as implementing a shopping cart thats as close to one thats use on sites like amazon.

### Opportunities: utlizing my notes from the audubon hw, music and recipe app should give me an idea of how i should structure this website. figuring out how to implement thereact shopping cart npm features might help alot but wont use unless i decided its necessary to use it. I can also ask for advice during TA hours and use issue tickets when a big problem arise.

### Threats:# My greatest weakness is taking too much time implementing something whether its fixing errors or a new feature then only realizing later i didnt make real progress with my work. In situations where if im stuck i shoould ask for assistance i rather learn to fix it myself than have someone do it for me. Its a habit im trying to break away from.

