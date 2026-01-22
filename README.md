# crudy-frontend
 
Simple CRUD Frontend for RAP

## Getting Started

### Dependencies

This app relies on a backend api, it is implemented in [crudy-backend](https://github.com/mdemore2/crudy-backend) using Django.

It also requires NodeJS.

### Running the app (locally)

1. Clone this repository
`git clone git@github.com:mdemore2/crudy-frontend.git`

2. Install required packages
`npm install`

3. Run the server
`npm run dev`

## Built With

- React
- Bootstrap

Deployed using Cloudflare Pages

## Notice

Icons by [Pictogrammers](https://pictogrammers.com/) licensed under Apache 2.0.

Favicon from [twemoji](https://github.com/twitter/twemoji) licensed under CC-BY 4.0.

## User Story Navigation

The following are instructions for navigating the app to meet the user story requirements listed below.

1. As an inventory manager I want to be able to create an account so that I can track my inventory.
   - Go to the login page along the navbar, then click register and create an account.
     
2. As an inventory manager I want to be able to log into my account so that I can see my inventory of items.
   - Login using the page linked in the navbar, you will be redirected to the My Items page also accessible from the navbar once signed in.

3. As an inventory manager I want to be able to create a new item so that I can share my item details with the world.
   - Once logged in, go to the Create Item page using the navbar and complete the form.
  
4. As an inventory manager I want to be able to see my entire inventory of items.
   - Navigate to the All Items page using the navbar.

5. As an inventory manager I want to be able to see any individual item I have added.
   - Full item details are available for user created items on the My Items page.
   - From the All Items page, click on any item card to access a pop-up of the full item details. Click anywhere to close the pop-up.

6. As an inventory manager I want to be able to edit an item so that I can fix any mistakes I made creating it.
   - Navigate to the My Items page. Click on the Pencil icon for any item you wish to edit. Submit the form when you are finished to save any changes.
   - Users can only edit items they created.

7. As an inventory manager I want to be able to delete an item so that I can remove any unwanted content.
   - Navigate to the My Items page. Click on the Trash Can icon for any item you wish to delete.
   - Users can only delete items they created.
     
8. As a visitor, who is not logged in, I want to be able to view all items created by every inventory manager so that I can browse every item.
   - Unauthenticated users can view all items on the main page, and can return there by clicking the All Items link in the navbar at the top of the page.

9. As a vistior, who is not logged in, I want to be able to view a specific item created by any user so that I can see all of its details.
    - From the All Items page, click on any item card to view the full details in a pop-up. Click anywhere to close the pop-up.
      
10. As an inventory manager I want to be able to view all items created by every inventory manager so that I can browse every item.
    - From the All Items page, click on any item card to view the full details in a pop-up. Click anywhere to close the pop-up.

   
