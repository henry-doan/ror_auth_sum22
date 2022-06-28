
Rails Authentication / Flash Messages


Adding users to Rails
Display Messages to the screen

rails engine, be able to do the same things in the app

Rails::Application < Rails Engine




  









Cryptography


Cyber Security
  - making sure our user's information is safe.











  "my password"

  "$2a$12$K0ByB.6YI2/OYrB4fQOYLe6Tv0datUVf6VZ/2Jzwm879BW5K1cHey"












  Hashing
    - takes in your password
    - throws it into a hashing algorithm
      - caesar cipher
      - 32 bit
      - 64 bit
        bit are strentghs of the hashing in terms of character 
        sets it uses
    - digital fingerprint












    Caesar Cipher
   
    Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    Cipher:   XYZABCDEFGHIJKLMNOPQRSTUVW

             DOG
             ALD













def caesar_cipher(password)
  @password = password
  .
  .
  .
  10.times do
    caesar_cipher(@password)
  end
end





- not reversible






store the hash and checks anothers hashes of the real password

"$2a$12$K0ByB.6YI2/OYrB4fQOYLe6Tv0datUVf6VZ/2Jzwm879BW5K1cHey".password
- password


















Salt

adds a small data before it is hashed


password: 'p@ssword'
salt: smallData

hash(salt + "aadvark") => <really unique gibberish>


brypt gem








Session
Each user will have own session
Keep track of session



User
User info










Devise

- Devise runs as a fully functional authentication 
rails engine for your application.
- customizable by overwriting views and controllers,
 or use 3rd party plugins
- Cookies
  Sessions


Benefits of Devise:  

- Full MVC solution as a rails engine
- Multiple models signed in at once
- Active user
- Contributor community


Database Authenticatable
 - Encrypts and stores passwords in the database
  - brcypt

 Omniauthable
 - Multi-provider authentication

 Confirmable
 - Email confirmation for account

 Recoverable
 - Resets passwords and sends reset instructions

 Registerable
 - Signs up users

 Rememberable
 - remember login info

 Trackable
 - Tracks sign in count, ip address
  Http request

 Timeoutable
 - Expires sessions

 Validatable
 - Creates all needed validations for a user email and password
  - Automatically validate if the email is present, unique 
    and its format is valid
  - Tests presence of password, confirmation and length

 Lockable
 - Locks an account after a specified number of failed login attempts


 Devise Helpers

 current_user - returns the whole user object who is logged in
 user_signed_in? - boolean 
 user_session - able session object

 current_admin
 current_customer

- Takes care of the MVC of the User
- Then everything is a child of the user in most cases


 MVP 

 minimum viable product




 flash messages 
  Error handling
  &
 messages displayed to the browser

 in rails they are key value pairs 

 flash = { success: "it worked", error: "it didn't work" }
flash[:success]

 User 
  Devise 
  email
  encrypted password

  first_name
  last_name
 Account
  account_name
  balance float 
  user_id

 Items
  title 
  amt float
  deposit boolean
  account_id

User has many accounts 
Accounts belongs to user, account has many items
items belongs to account
Bob  has a savings account with $100, payday $200 deposit true savings, 
dinner $30 deposit false checking 