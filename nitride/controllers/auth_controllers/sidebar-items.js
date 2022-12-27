window.SIDEBAR_ITEMS = {"constant":[["ACCESS_TOKEN_VALIDITY","the bearer token validity set to 10 minutes"],["REFRESH_TOKEN_VALIDITY","refresh token set to 25 minutes"]],"fn":[["_request_new_token","request new token (OTP) to request new OTP, it must be that the user account has not been confirmed or in the case of password reset at any rate, the token will accept email to return a JWT token to the user the returned JWT will contain the required information needed by the server for further processing the server will also send new token to the user’s email if the email as found"],["get_refresh_token","get refresh token"],["login","Login a New User : to login a user, fetch the request body and the database pool use the pool to query the database for the user details in the request body return result or error"],["reset_password","reset user password"],["sign_up","basic auth sign_up"],["update_user_profile","Get the user profile fom the database. to do this Get the jwt token fom the header, Validate the token then get the user_id from the validated token go on to destructure the payload, use SQL COALESCE($1, a)  to update the fields return the user details if no error else return the appropriate error code and response"],["user_profile","Get the user profile fom the database. To do this, Get the jwt token fom the header, Validate the token then get the user_id from the validated token"],["verify_email","verify email to verify email retrieve the bearer token fo=rom the auth header, retrieve the otp from request body validate token and updates account status return error or success response"]],"opaque":[["",""]],"static":[["JWT_SECRET","fetch the JWT defined environment and assign it’s value to a life call on the new method of JwtEncryption keys to accept and pass down the secret to the jsonwebtoken crate EncodingKey and DecodingKey modules"]]};