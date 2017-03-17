# MetroMeets
A single page application helping subway riders discover other interesting people who share similar commutes. [Try it out here.](http://metromeets.herokuapp.com/)

The back-end Ruby on Rails API repository [is available here](https://github.com/mjfender/mtyay-api).

Created by: [Patty SantaCruz](https://github.com/pattysc/), [Matt Fender](https://github.com/mjfender/) and [Joe Sasson](https://github.com/joesasson).


## Summary

**Why**
People spend many hours a week commuting to and from work. We're surrounded by interesting people,
including people who share the same interests and neighbors who may live right around the corner.
We think there should be an easy way to see the people who share your commutes, invite interesting
matches to connect and form new relationships while you commute. That's why we created MetroMeets!

**Stack**

* Front-end built with ReactJS / Redux
* Back-end API built with Ruby on Rails
* Uses a PostgreSQL database

**Functionality** 
Meet Amit. Amit is new New Yorker who takes the 1 train from 238th Street downtown every day around 9:30am. Amit is an outgoing guy and wants to meet people from his neighborhood who share similar interests — he likes Harry Potter, beer and card games.

When Amit hears about MetroMeets, he signs up and adds his morning commute details to see who else shares his commute. He discovers several people who take the 1 train downtown from his station around the same time that he does. He sends a connection request to Dave because he mentions Harry Potter AND Phase 10 in his bio. After Dave accepts his request, they are able to see contact information and arrange a time to commute together. Amit and Dave hit it off on their shared commute and start meeting up regularly for a card game night -- and enjoy chatting whenever they run into each other on the train. #MetroMeets!

**Quickstart**
Want to try out MetroMeets before you sign up? Login with our demo account:
* Go to www.metromeets.co
* Login with demo@metromeets.co / metrodemo
* Click on "My Matches" to see all demo matches

Or if you sign up and your commute doesn't have any matches yet, add this one to test it out:
* 09:30AM, 1 Train, From 238th St to Christopher St - Sheridan Sq

## Technical Details (Front-end)

**Dependencies**
    "axios": "^0.15.3",
    "elemental": "^0.6.1",
    "lodash": "^4.17.4",
    "react": "^15.4.2",
    "react-addons-css-transition-group": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-dropzone": "^3.10.0",
    "react-materialize": "^0.18.1",
    "react-redux": "^5.0.2",
    "react-router": "^3.0.2",
    "redux": "^3.6.0",
    "redux-promise": "^0.5.3",
    "redux-thunk": "^2.2.0",
    "superagent": "^3.4.4"
    

## Technical Details (Back-end)

**Dependencies**
gem 'rails', '~> 5.0.1'
gem 'rack-cors'
gem 'active_model_serializers'
gem 'pg'
gem 'jwt'
gem 'bcrypt', '~> 3.1.7'
gem 'puma', '~> 3.0'


## Product Roadmap
* Add "fuzzy search" to include matches from commuters at earlier/later departure times and nearby stations
* Create messaging feature so users don't need to reveal contact information to strangers until they've chatted a bit
* Allow users to add interests and purposes (ex: networking, new friends, language practice) and sort their matches based on compatability


