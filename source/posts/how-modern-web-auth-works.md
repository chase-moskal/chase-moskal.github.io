
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

### "User logs in and performs admin task"

1. **First, the Auth and API servers must initially conspire together**

	When the two servers are deployed, they share a secret key. They leave the Frontend out of this exchange, to establish trustworthy communication (you can't trust the Frontend)

1. **Second, our user wants to login as an admin**

	- the frontend runs the login routine
		- frontend uses crosscall in an iframe to consult token storage
		- if there is a valid token, user is now logged in
		- if no valid token, login button spawns an auth server popup window
			- google oauth routine occurs in the popup
			- google tokens will be exchanged at the auth server for an access token
			- access token is returned back from the popup, which terminates
			- user is now logged, token is given to token storage for next time
		- user's name, and capabilities are encoded in the z-token
			- for our running example, the capability `"admin"` is present for our admin user

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

## How to integrate google sign-in

1. The frontend application initiates and completes an OAuth2 routine with google

2. The frontend application recieves a google token, and then sends this token to the auth server

3. The auth server verifies the token to extract the user's google id

4. The auth server links the user's account to the google id
