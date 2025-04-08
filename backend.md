# Backend
Looking in the database to 

# API

build on top of TCP
http REQUEST -> front end send the request
http RESPONSE -> backend send a response

User make requests and the backend send a response

- http protocols 

Client                           Application/Transport                                       IP layer
html, css web api, js             TLC, TCP 

Ex of http request GET     /    http/1.1
                   method path protocol version

                   host: developer.mozzilla.org
                   Accept-language: fr

http cats - to see http status code

# Intro to Express

Js use -> Node.js -> Express

- every computer has his unique ip adress + local host 127.0.0.1:3000

- the server connect with the ip adress 

**HTTP status code**
2xx - all ok
3xx - redirection
4xx - your fault
5xx - our fault

# Architecture Patterns

Used for:
- scaling
- teamwork
- testing/ debugging -
 Separation of concerns -> how we structure our files? index.html, script,js, styles.css
 Separation of components -> every button or form have their own index.jsx, styles.css (in react for exemple)

 **Data managemet**
 - in/out -> APIs (good design for Apis)
 - around applications -> state & models (good management)

**MVC Pattern** = Model View Controller
M - handles data logic + interract with database
C - like a middle man, controll the information 

**Microservices**
Tiny services (fb, insta, whatsup, threads) => break them down into more microservices

**Monolithic** like microservices but in chain or a cascade, with a main database

## Restful APIs
= Set of architecture concerns
- use it to create an API
- rely on http methods
- they are scalable
- it has to have :
1. request need to be http
2. treat an error request like a new one
3. http methods - GET
                - Post
                - PUT
                - PATCH
                - DELETE, + status code

 ## CRUD operations - insteadd of keep in mind the http methods
 - C -> POST
 - R -> GET
 - U -> PATCH
 - D -> DELETE

 **RESTFUL ENDPOINTS**
  METHOD BASE_URL/RESOURCE/ID
  
   
