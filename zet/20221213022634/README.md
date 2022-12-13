# What is a commit?

*A commit is a code snapshot*
- What the project looked like at that point of time and it is a
  combination of changes & of the stages of the previous commit.

  `git cat-file (?-t?) -f HASH` - print the type
  `git cat-file -p HASH` - print the contents

*Why can't we change commits?*
- If you change any data about the commit the commit will have a new
  SHA1 hash.
- Even if the files don't change the created date will (result = new
  SHA1)

        #git #commit
