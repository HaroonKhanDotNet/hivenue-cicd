### Sign up: Create a tenant (hivenuetenant# - replace # with a random number)

* Make a GET call to https://mailnesia.com/mailbox/hivenue*** (this will create a temp email hivenue***@mailnesia.com)
* Go to https://***.hivenue.ca/en
        Click on button: Sign up
* On https://***.hivenue.ca/en/login?redirect=%2Fen&redirectParam=%7B%7D&action=signUp
* Fill sign up form with:
   - First name: `hivenue***`
   - Last name: `tenant***`
   - Email: `hivenue***@mailnesia.com`
   - Password: `Hivenue***`
   - Confirm Password: `Hivenue***`
* Click on: Accept and continue
* Popup message should show: “Please check your email to confirm your account.”
* Goto https://mailnesia.com/mailbox/hivenue***
* Open latest email with subject: “Hivenue - Confirm your email / Confirmez votre adresse email”
* Copy the included link e.g. https://hivenue.ca/fr/login?action=confirm&token={id}&email=hivenue***@mailnesia.com
* Add “***.” after “http://” 
* Click on the updated link
* A popup should open with text: “Votre courriel a été confirmé ! Vous pouvez maintenant vous connecter.” TODO: is this message always in FR?
* On the popup click on button: OK

### Sign-in as created tenant:

* On https://***.hivenue.ca/fr/login
* Fill the sign-in form:
Email: hivenue***@mailnesia.com
Password: Hivenue***
* Click on: `Se connecter`
   * The App should redirect to https://***.hivenue.ca/fr/onboarding 
* On https://***.hivenue.ca/fr/onboarding 
   * Click on: user `icon/photo`
   * On dropdown, select: `Log Out`

### Create an apartment

* Sign-in to as owner (reuse pre-created account for this):
https://mailnesia.com/mailbox/hivenue*** 
hivenue***@mailnesia.com
Hivenue***


* On https://***.hivenue.ca/en clicon on button: For Property Owners
* On https://***.hivenue.ca/en/host, click on button: List your unit 
* On https://***.hivenue.ca/en/share/newapartment, clicnk on button: Private Bedroom
* On https://***.hivenue.ca/en/share/apartment , 
   * Select dropdown: Montreal
   * Enter address: **7 Rue de Castelnau East, Montreal, QC, Canada
   * Click on button: Next
   * On https://***.hivenue.ca/en/share/apartment?step=1
      * Available Rooms: 1
      * Bathrooms: 2
      * Amenities, select: High Speed WiFi
      * Home Rules, select: Pet Friendly
      *  Click on: Next 
   * On https://***.hivenue.ca/en/share/apartment?step=2
      * Available from, select: 1st of the current month 
      * Available to, select last day of the month e.g. 11/01/2024
      * Minimum stay, select: one year later e.g. 11/30/2025
      * Click on: Next
   * On https://***.hivenue.ca/en/share/apartment?step=3
      * Monthly price: 1000
      * Bed Type: Queen
      * Room Accommodations, select: Bedding
   * On https://***.hivenue.ca/en/share/apartment?step=4
      * Upload 3 photos
         * Click on: Add a photo
         * Select 3 photos and click upload
         * Click on: Next
   * On https://***.hivenue.ca/en/share/apartment?step=5
      * Who would you prefer to live in the property?, select Male
      * And their current status?, select: Employee
      * Click on: Next
   * On https://***.hivenue.ca/en/share/apartment?step=5
      * Listing Title: “devops test {date/time}”
      * Description: “devops test {date/time} lorem epsom”
      * Click on: Next
   * On https://***.hivenue.ca/en/share/apartment?step=8
      * Property Access, select: Guest can self-sheck-in
      * On Select a preferred time for move-in, select: Morning - Between 8 a.m to 12 p.m
      * Additional Note: “Devops test Move-in / Move-out Details”
   * On https://***.hivenue.ca/en/share/apartment?step=9
      * Phone Number *, type: 514 243 7482
      * Government-Issued ID *, if empty
         * Click on Uplad document
         * Select a file
         * Click upload
      * Proof of Residency *, if empty
         * Click on Uplad document
         * Select a file
         * Click upload
      * Payout Method *, Interac E-transfer: hivenue***@mailnesia.com
      * Click on: Publish you listing
   * On https://***.hivenue.ca/en/share/apartment?step=9
      * Popup message should show: “Your listing has been successfully created.”
      * Click on: Ok
      * App should navigate to https://***.hivenue.ca/en/myprofile/sharings
   * On https://***.hivenue.ca/en/myprofile/sharings
      * Validate there is an apartment with name: “devops test {date/time}”
   * On https://***.hivenue.ca/en/myprofile/sharings
      * Click on: user icon/photo
      * On dropdown, select: Log Out 

### Book a room - Short-term stay

* Sign-in as created tenant: 
   * Go to https://***.hivenue.ca/en
Click on: login
Enter Username: hivenue***@mailnesia.com / password:Hivenue***
* On https://***.hivenue.ca/en 
Select the city: Montreal
* On https://***.hivenue.ca/en/montreal/apartments 
Select apartment with name “devops test {date/time}”
* On https://***.hivenue.ca/en/apartments/{id}
* set move-in date e.g. November 1, 2024 
* set move-out date e.g. November 30, 2024
* Click on: Request to book
* On https://***.hivenue.ca/en/application-summary
   * If phone number empty, type: *** *** ****
   * If Identity verification empty, click on Upload
      * Select a document from the file system
   * If Other document empty, click on Upload
      * Select a document from the file system
   * If Emergency contact phone, type: *** *** ****
   * If Emergency contact email, type: hivenue***@mailnesia.com
   * On Add a message, type: message to property owner {date/time} message to property owner {date/time} message to property owner {date/time} message to property owner {date/time}
* Click `next`
* On https://***.hivenue.ca/en/payment
* Fill Card information
   * Card number: **** **** **** ****
   * Exp date: 12 / 34
   * CVC: ***
   * Name on card: Hivenue guest
   * Country: canada
   * Zip code: 123abc
   * Click on button: Confirm reservation 
* On https://***.hivenue.ca/en/payment
* Popup message should show: “Your request has been sent to the property owner successfully. We will inform you once the property owner approves your request.”
* On the popup, 
* Click on: Ok
* Website should redirect to https://***.hivenue.ca/en/myprofile/applications
* First application on the list should be for apartment “devops test {date/time}” and move-in/move-out dates should be {move-in date - move-out date}

### Approve a Request

* Goto https://mailnesia.com/mailbox/hivenue***
* On https://mailnesia.com/mailbox/hivenue***
   * Open last email with the subject “Demande de location” or “Rental Request” 
   * Validate apartment name (e.g. devops test {date/time})
   * Validate move-in date (e.g. November 1, 2024)
   * Validate move-out date (e.g. November 30, 2024)
   * Click on: Documents 
* If Admin already logged-in, the app should redirect to https://hivenue.ca/en/login?redirect=en/rent-request-details/{id} - go to step A
* If Admin not logged-in already, the app should redirect to https://hivenue.ca/en/login 
   * On https://hivenue.ca/en/login 
      * Enter Username: hivenue***@mailnesia.com / Hivenue***
      * Click on: Send
      * Goto https://mailnesia.com/mailbox/hivenue***
         * Copy the verification code
   * On https://hivenue.ca/en/login
      * Paste the verification code
      * Click on: Login
      * The app should redirect to https://***.hivenue.ca/user
      *  Click on Booking Requests menue open
      * On https://dev***.hivenue.ca/booking-request
         * Click on the first booking request with the listing title “devops test {date/time}”
* A - On https://dev***.hivenue.ca/booking-request/{id}
   * Validate status is: Pending Admin
   * Validate apartment name (e.g. devops test {date/time})
   * Validate move-in date (e.g. November 1, 2024)
   * Validate move-out date (e.g. November 30, 2024)
   * Validate price
   * Validate guest’s (tenant) FirstName LastName 
   * Open Identity dropdown
      * Click on the doc and validate it’s downloading
   * Open Other Document dropdown
      * Click on the doc and validate it’s downloading
   * Click on View Request
      * The App should redirect to https://dev***.hivenue.ca/en/login?redirect=en%2Frent-request-details/{id}
   * Login with admin
      * Enter Username/password: use this ***@gmail.com / *** ( hivenue***@mailnesia.com / Hivenue*** has a bug so you cannot approve with it)
      * Click on: Log in
   * On https://***.hivenue.ca/en/rent-request-details/{id}
      * Validate apartment name (e.g. devops test {date/time})
      * Validate move-in date (e.g. November 1, 2024)
      * Validate move-out date (e.g. November 30, 2024)
      * Validate 1st payment: is a number >0 <price (si ple test for now but we have a logic for this)
      * Click on: Approve
      * On the popup “Have you verified tenant documents ?”, 
         * click on : Yes
      * On the result popup, validate text “Rent request approved successfully” 
      * Click on: OK
   * Goto https://mailnesia.com/mailbox/hivenue*** 
      * Open last email with the subject “Demande de location” or “Rental Request”
      * Click on See Application (or Voir l'application)
      * If the owner if logged-in the app will redirect to https://***.hivenue.ca/fr/rent-request-details/{id} - continue to step B.
      * If the owner if not logged-in, the App will redirect to https://***.hivenue.ca/fr/login?redirect=fr/rent-request-details/{id}
         * Type in owner userName/Password: hivenue***@mailnesia.com / Hivenueowner1#
         * Click on: Log in
         * The App should redirect to https://***.hivenue.ca/fr/rent-request-details/{id} 
   * B- on https://***.hivenue.ca/fr/rent-request-details/{id}
      * Click on: Approve (or Approuver)
      * In the message box type: “You are approved. Welcome!”
      * Click on: “Send Message”
      * Popup should show with message “Rent request approved successfully.”
      * Click on: Ok
      * The app should redirect to https://***.hivenue.ca/en/myprofile/reservations
      * Logout 
                
* The owner should get an email confirming the reservation (script steps TBD but the same step as above just the content of the email is different) 
* The tenant should get a welcome email confirming the reservation (script steps TBD but the same step as above just the content of the email is different)
* A payment should be verified on Stripe but the account has 2FA with sms so it’s not easy to automate right now unless I change the login. 

=====================

#### Approve request - Admin
- Admin account to use:
   - https://mailnesia.com/mailbox/hivenue***
   - User: `hivenue***@mailnesia.com`
   - PW: `Hivenue***`


#### Approve request - Property owner
- Property owner account to use
   - https://mailnesia.com/mailbox/hivenue*** 
   - User: `hivenue***@mailnesia.com`
   - PW: `Hivenue***`