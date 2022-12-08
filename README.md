# Microsoft-Immersive-Escape-Room
An Immersive Escape Room that is web base phone friendly AR escape room

## Table of contents

1. [Team](#Team)
1. [Instructions](#Instructions)
1. [Changes](#Changes)
1. [Issues](#Issues)
1. [Discussions](#Discussions)

## Team

| Team Name    | Date and Time       |
| ------------ | ------------------- |
|     |    |

| #   | Member Name            |
| --- | ---------------------- |
| 1.  | |
| 2.  | |
| 3.  | |

## Instructions

### One team member only

One team member is to complete the following steps in the remote repository on the GitHub web site:

#### Clone remote to local repository

In GitHub:

1. Select the `<> Code` link.
1. Select the green `Code` button.
1. Ensure **HTTPS** is selected and click the copy button to copy the remote repository URL.

In Git Bash (Windows) or Terminal (Mac, Linux)

1. Navigate to the folder where the repository should be cloned into.
1. Issue the `git clone` command followed by pasting the previously copied remote repository URL.
1. Set your user name and email using the `git config` command. e.g., `git config user.name "your name"` and `git config user.email "your email address"`.
1. Check that the correct username and email is set using the `git config -l` command.
1. Setting and checking `user.name` and `user.email` needs to be done every time the remote repository is cloned to a local repository.

Create a **develop** branch. (Only needs to be done once in a repository.)

1. Create a branch named **develop** off the main branch. e.g., `git branch develop`
1. Push the branch to the remote repository. e.g., `git push -u origin develop` Creation of files should not start until the **develop** branch has been pushed to the remote repository.
1. Switch to the **develop** branch. e.g., `git checkout develop`
1. Edit the README.md file in the local repository, **Replace with the current date and time** with the current date/time (e.g., Monday January 10, 2022 - 11:45 AM) and replace the first **Replace with full name** words with your full name. Save the changes. **DO NOT replace the name of other team members** as they will each update this document with their own name.
1. Stage the changes. e.g., `git add README.md`
1. Commit the changes. e.g., `git commit -m "Replace course number, team date/time and name"`
1. Push the changes to the remote repository. e.g., `git push`

Merge the **develop** branch to the **main** branch.

1. Switch to the **main** branch. e.g., `git checkout main`
1. Merge the **develop** branch into the **main** branch. e.g., `git merge develop`
1. Push the changes to the remote repository. e.g., `git push`
1. Switch to the **develop** branch. e.g., `git checkout develop`

Notify other team members that the lab repository is setup and they can join the repository.

### Other team members

Wait until **ALL** the steps above done by one team member have been completed.

In GitHub:

1. Select the `<> Code` link.
1. Select the green `Code` button.
1. Ensure **HTTPS** is selected and click the copy button to copy the remote repository URL.

In Git Bash (Windows) or Terminal (Mac, Linux)

1. Navigate to the folder where the repository should be cloned into.
1. Issue the `git clone` command followed by pasting the previously copied remote repository URL.
1. Set your user name and email using the `git config` command. e.g., `git config user.name "your name"` and `git config user.email "your email address"`.
1. Check that the correct username and email is set using the `git config -l` command.
1. Setting and checking `user.name` and `user.email` needs to be done every time the remote repository is cloned to a local repository.

Replace name in **Member Name** column. **ONLY replace one name with your name**

1. Switch to the **develop** branch. e.g., `git checkout develop`
1. Edit the README.md file in the local repository, then at the top, replace the next words **Replace with full name** with your full name. Save the change.
1. Stage the change. e.g., `git add README.md`
1. Commit the change. e.g., `git commit -m "Replace name"`
1. Push the changes to the remote repository. e.g., `git push`

Merge the **develop** branch to the **main** branch.

1. Switch to the **main** branch. e.g., `git checkout main`
1. Merge the **develop** branch into the **main** branch. e.g., `git merge develop`
1. Push the changes to the remote repository. e.g., `git push`
1. Switch to the **develop** branch. e.g., `git checkout develop`

## Changes

Steps to make changes

In GitHub:

1. Assign the issue that will be worked on to yourself. See [Issues](#Issues) below.
1. If no issue exists, open a new issue and assign it to yourself. e.g., `Create site home page` \*(Ensure that the title is unique and succinct. A detailed description of what work is be completed must be entered.)

In Git Bash (Windows) or Terminal (Mac, Linux):

1. Navigate to the folder where the repository was cloned into.
1. Check that the correct username and email is set using the `git config -l` command.
1. Switch to the **develop** branch and execute a `git pull` to get the latest code from the remote repository.
1. Create a new feature branch and switch to the new branch. e.g., `git branch feature/homepage` **Note**: Replace _homepage_ with a word the succinctly describes the issue.
1. Add, modify and/or delete a file(s).
1. When the changes are complete:
   1. test the changes
   1. add the file(s) to the staging area
   1. commit the changes ensuring that the commit message is unique and summarizes the change
   1. switch to the **develop** branch
   1. execute a `git pull` to get the latest code from the remote repository
   1. merge the changes to the **develop** branch from the new branch previously created
      1. resolve merge conflicts if there are any
      1. test that the code still works after the merge conflict is fixed
      1. add the file(s) fixed from the merge conflict to the staging area
      1. commit the fixed file(s)
   1. push the **develop** branch to the remote repository
   1. create a pull request on the remote repository (GitHub) from the **develop** branch to the **main** branch.
   1. review the pull request and merge to the main branch on the remote repository
1. Delete the branch previously created for coding the changes from the local and remote repositories.
1. Close the issue after all required changes have been committed.

Repeat these steps each time changes are to be made. **NOTE**: Ensure that a `git pull` is regularly executed while checked out on the **develop** branch to get any changes that have been pushed to the develop branch by other team members.

To keep the **develop** and **main** in sync, complete the following steps in the local repository:

1. Switch to the **main** branch. e.g., `git checkout main`
1. Pull the changes from the remote repository. e.g., `git pull`
1. Switch to the **develop** branch. e.g., `git checkout develop`
1. Merge the **main** branch into the **develop** branch. e.g., `git merge main`
1. Push the changes to the remote repository. e.g., `git push`
1. On the remote repository the develop branch will be even with the main branch.

## Issues

### Open an Issue

1. In the repository, select the `Issues` link.
1. Choose `New issue`.
1. Enter a `Title` for the issue.
1. Enter details in the `Write` tab. Be very specific.
1. Choose `Submit new issue`.

### Assign an Issue

1. In the repository, select the `Issues` link.
1. Select the issue that needs to be assigned.
1. Choose the `Assignees` option.
1. Select your name as the assignee to add to the issue.

### Filter issues assigned to you

1. In the repository, select the `Issues` link.
1. Choose the `Assignee` drop down.
1. Select your username from the list.

### Close an Issue

1. In the repository, select the `Issues` link.
1. Select the issue that needs to assigned to one or more group members.
1. Enter closing details in the `Write` tab.
1. Choose `Close and comment`.

### Reopen a Closed an Issue

1. In the repository, select the `Issues` link.
1. Ensure `Closed` issues are displayed.
1. Select the issue that needs to be reopened.
1. Enter reopening details in the `Write` tab.
1. Choose `Reopen issue`.

See [About issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) for more help.

## Discussions

Discussions are the official method of communication via electronic means for this lab. If the professor is asked to resolve a dispute between team members, only communications between the team members made in the repository discussions will be reviewed.

### Start a discussion

1. When in the repository, select the `Discussions` link. If the Discussions link is not shown, contact the professor and request that discussions be enabled for the repository.
1. Choose the `New discussion` button.
1. Select a category.
1. Enter a title for the discussion at the top of the page.
1. Enter details in the `Write` tab. Use Markdown if applicable.
1. To @ mention a team member, use the `@` symbol in the comment to bring up a list of repository members and choose a team member. **Note:** All team members of the repository and a team comprising **ALL** students in the class are listed. Ensure that the correct team member is being @ mentioned. **Do not** select the class team.
1. Choose `Start discussion`.

### Reply to a discussion

1. When in the repository, select the `Discussions` link.
1. Select the title of the discussion to be replied to.
1. If replying to a comment in the discussion, enter details into the `Write a reply` field and then choose the `Reply` button.
1. If no previous comment or not replying to a comment, enter details in the `Write` tab. Use Markdown if applicable. Then choose the `Comment` button.

See [About team discussions](https://help.github.com/articles/about-team-discussions/) for more help.
