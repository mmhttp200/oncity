# About
A MERN stack project to companies share content like as an yellow page.

# On Heroku
https://oncity.herokuapp.com

# Documentation on Heroku
https://oncity.herokuapp.com/api/documentation

# API routes

## Account

| METHOD | ROUTE | BODY / PARAMS |
|-|-|-|
|POST|/api/public/accounts/create-new-account|``{sessionStatus, sessionIP, accountStatus, email, password, cellphone, fullname, gender, officialDocument, city, address, zipcode}``|
|POST|/api/public/accounts/login|``{email, password, sessionIP}``|
|GET|/api/private/accounts/account-information|``header: token``|
|DELETE|/api/private/accounts/delete-account|``{email, password}``|
|PUT|/api/private/accounts/update-account-email|``{newEmail}``|
|PUT|/api/private/accounts/update-account-password|``{newPassword}``|

## Page

| METHOD | ROUTE | BODY / PARAMS |
|-|-|-|
|GET|/api/public/pages/page/:uri||
|POST|/api/private/pages/create-new-page|``{category_id, status, name, keywords, city, about}``|
|PUT|/api/private/pages/update-page|``{page_id, updated_data}``|
|DELETE|/api/private/pages/delete-page|``{page_id}``|

# Returned JSON

## Error

``{success: false, message: String, context: String, data: Object}``

## Success

``{success: Boolean, message: String, data: Object}``