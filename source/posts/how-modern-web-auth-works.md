
# How Modern Web Authentication and Authorization Works

&nbsp;*stateless, crossdomain, jwt, tokens, logins, user account management, node*

"authentic" means "this is the right guy"

"authorized" means "this guy is allowed to arrest you"

I wrote this article to digest what I've learned on the topic

## How authentication and authorization works

### There should be at least three servers involved

- **Frontend app** — `example.com` — single page application
- **Auth server** — `auth.example.com` — performs logins and signs tokens
- **API server** — `api.example.com` — has secured backend functionality

### Conceptually understand the story: "User logs in and performs admin task"

1. **First, the Auth and API servers must initially conspire together**

	This happens before the servers are deployed

	They share a secret key. They leave the Frontend out of this exchange, to establish trustworthy communication. You'll see in a moment:

1. **Second, our user wants to login as an admin**

	- the frontend makes a login call to the auth server
	- frontend sends credentials (username and password) in the login request
	- auth server validates the credentials and retrieves the user's public data
		- here the server either consults a user database and compares password hashes, or initiates an oauth2 third-party login flow with google or facebook or github or whatever
		- for our example, this user's public data has the role `"admin"` included
	- auth server packs the user's public data into a token ***signed with the secret key***, and sends that back to the frontend
	- the frontend stores the token for later use

1. **Third, our user wants to perform an admin-level action**

	- the frontend makes a call to the api server
	- the frontend sends its request, proudly presenting its token
	- the api server ***verifies the token against the secret key***, and now knows the token is authentic
	- the api server extracts user's public data from the token
	- the api server sees that the role `"admin"` is present, and now knows the user is authorized
	- the api server performs the authorized action
	- the api server reports success back to the frontend

### You see what's going on here?

- the frontend is not trusted, and is not given the secret key
- with the secret key, the auth and api servers can prove that the token payload (user data) has not been tampered with by the frontend
- tokens can contain data with guaranteed authenticity, despite an untrusted "man-in-the middle" like the frontend transporting the data
