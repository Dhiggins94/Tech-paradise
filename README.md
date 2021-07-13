# Project Overview

## Project Name

Tech-Paradise 

## Project Description

The user will be able to select from a category of items such as computers, keyboards, mouses, etc. and be able to put them in a shopping cart. Users should be able to leave reviews about their products of choice 

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
                "productDescription": "DESCRIPTION TEST",
                "category ": "laptop TEST",
                "name": "name TEST",
                "image": "https://nzxt.com/assets/cms/34299/1618960827-elite5grid.png?auto=format&fit=max&h=900&w=900",
                "price": 100,
                "Brand": "BRAND TEST",
                "rating": 3,
                "review": "review test"
            },
            "createdTime": "2021-07-13T15:16:30.000Z"
        },
        {
            "id": "recKSveQWfmLsiMPV",
            "fields": {
                "name": "review test",
                "Table 2": [
                    "recwZpLjs2zGloXQ6"
                ]
            },
            "createdTime": "2021-07-13T21:43:35.000Z"
        },
        {
            "id": "recdHdS7jzRXYzPjG",
            "fields": {
                "name": "2",
                "Table 2 (2)": [
                    "recwZpLjs2zGloXQ6"
                ]
            },
            "createdTime": "2021-07-13T21:43:52.000Z"
        }
    ],
    "offset": "recdHdS7jzRXYzPjG"
}
```
AirTable 2
```
{
    "records": [
        {
            "id": "recwZpLjs2zGloXQ6",
            "fields": {
                "name": "name test",
                "review": [
                    "recKSveQWfmLsiMPV"
                ],
                "rating": [
                    "recdHdS7jzRXYzPjG"
                ]
            },
            "createdTime": "2021-07-13T20:50:00.000Z"
        }
    ],
    "offset": "recwZpLjs2zGloXQ6"
}
```

#### MVP 
1. use postman to observe that the airtable api is working
2. create react app and install anything else needed like axios
3. test render data from airtable as proof information can be displayed
4. have options to go to shopping cart,home,reviews, and inventory 
5. have inventory display show categories of different kind of items
6. pressing a category should give items of that category. example (pressing mouses, should show any mouses avaliable).
7. item should show infomation like its price, brief description and the ability to put it in a shopping cart.
8. items that are in the shopping cart should also have the ability to be removed from said shopping cart
9. pressing review should take you to a form which then should let you give it a select item,give it a rating and a place to input text along with a submit button as well as edit and delete your review.
10. pressing shopping should also take you directly to your shopping cart.
11. style with flexbox and add media queries.

#### PostMVP  
1. show a quantity of items in your shopping cart, individual and in total.
2. show a total price of all items in the shopping cart.
3. when selecting an item to go to your shopping cart, show reviews of that item if any was made.
4. style with css grid

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|July 12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|July 13| Project Approval | Incomplete
|July 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|July 14-15| Pseudocode / actual code | Incomplete
|July 15-16| Initial Clickable Model  | Incomplete
|July 19| MVP | Incomplete
|July 20| Presentations | Incomplete

## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Getting the API rendering data | M | 3 hrs| N/A hrs | N/A hrs |
| writing Pseudocode | H| 3 hrs| N/A hrs | N/A hrs |
| Setting up the react folder structure| H | 3hrs| N/A hrs | N/A hrs |
| Get functionality on routes(inventory ,shopping-cart etc)| H | 3hrs| N/A hrs | N/A hrs |
| Get the Airtable to display testData | H| 3 hrs| N/A hrs | N/A hrs |
| Check Airtable for any corrections that need to be made| H| 3 hrs| N/A hrs | N/A hrs |
| implement site with working catergory buttons | H | 3 hrs| N/A hrs | N/A hrs |
| implement item selection to show info of the item (price for example)| H | 3 hrs| N/A hrs | N/A hrs |
| implement buttons to take items that are displayed into the shopping cart | H | 3 hrs| N/A hrs | N/A hrs |
| implement shopping cart to display the item and a button to delete items in shopping cart  | H | 3 hrs| N/A hrs | N/A hrs |
| Advance styling for css(flexbox) or (grid) | M | 3 hrs| N/A hrs | N/A hrs |
| Using media queries for phones/desktops | M | 3 hrs| N/A hrs | N/A hrs |
| Checking for errors in react syntax | H | 3 hrs| N/A hrs | N/A hrs |
| Checking for errors in CSS styling | M | 3 hrs| N/A hrs | N/A hrs |
| Deploy the website, ask for help using error tickets| L | 2 hrs| N/A hrs | N/A hrs |
| Practice presnetation | L | 2 hrs| N/A hrs | N/A hrs |
| Total | N/A |46 hrs| 0 hrs | N/A hrs |
## SWOT Analysis

### Strengths: I think my greatest strength is to be able to plan my process throughly with pseudocode. This helps me organize my thoughts and included everything i know i'll need so i dont get distracted adding features at the last minute. As well as learning being able to search online and my own notes for what i need when i encounter problems regarding error messages. Alot of what we did to implementing certain features happened in class so i feel confident in implementing certain features like routes and forms.

### Weaknesses: the rating system i had in mind might be a roadblock for me because i havent decided if i should settle doing ratings for numbers 1-5 or stars 1-5. Another roadblock i think i'll have trouble with is getting certain information to carry over in the shopping cart as well as implementing a shopping cart thats as close to one thats use on sites like amazon.

### Opportunities: utlizing my notes from the audubon hw, music and recipe app should give me an idea of how i should structure this website. figuring out how to implement thereact shopping cart npm features might help alot but wont use unless i decided its necessary to use it. I can also ask for advice during TA hours and use issue tickets when a big problem arise.

### Threats:# My greatest weakness is taking too much time implementing something whether its fixing errors or a new feature then only realizing later i didnt make real progress with my work. In situations where if im stuck i shoould ask for assistance i rather learn to fix it myself than have someone do it for me. Its a habit im trying to break away from.

