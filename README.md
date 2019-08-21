# Employee Rails / React App

This is a simple CRUD app allowing users to add/ edit/ delete employees

### Local Install Instructions

1.  clone repository  `https://github.com/BlinkVonDoom/employee-app.git`
2.  navigate to repository  `cd employee-app`
3.  install postres (skip if you already have this)  `brew install postgresql`
    -   note: installing postgres via brew can create some issues out-of-the box. Recommend following instructions here to get up and running:  [https://bit.ly/2IvXXDB](https://bit.ly/2IvXXDB)
4.  install rails dependancies  `bundle install`
5.  install node dependences with `cd client` &&  `npm install`
6.  `bundle exec rake db:create`
7.  `bundle exec rake db:migrate`

to run locally  `foreman start -f Procfile.dev`

#### Next steps 
- write unit tests for react w/ jest / enzyme
- write unit tests for rails controllers and models w/ rspec / factory_bot
- add in regex validation for email / phone numbers
- add sorting to columns by name, id, ect
- restrict use of non-unique emp ids 