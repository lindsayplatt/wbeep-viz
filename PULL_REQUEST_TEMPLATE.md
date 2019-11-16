Before making a pull request
----------------------------
First . . .
- [ ] Clean the code the way Vue likes it - run 'npm run lint --fix'        
- [ ] Make sure all tests run

Then check for accessibly compliance
- [ ] Run WAVE plugin 508 compliance tool

Then run Browserstack; check that application works on . . .
- [ ] Chrome
- [ ] Safari
- [ ] Edge
- [ ] Firefox
- [ ] Samsung Internet

Finally . . .
- [ ] Update the changelog appropriately

Title
-----------
Brief description of changes. Reference the JIRA ticket if appropriate

Description
-----------
If no ticket is referenced, describe the changes made. Note anything that you want the reviewers to know while
reviewing your pull request

After making a pull request
---------------------------
- [ ] If appropriate, put the link to the PR in the ticket
- [ ] Assign someone to review unless the change is trivial