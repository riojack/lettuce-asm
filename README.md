# Lettuce Assembly
A seriously silly assembly language whose "machine" is built in JavaScript.

### Docker it up
If you are on *Windows* and want to play around with the code, you can use Docker
to build an image can then be used for development.  It will install Yarn for you.
You need only run commands from within the Docker shell.  Code changes can be made
with your favorite editor.

Build a new image: `docker build -t riojack/lettuce-asm:dev .`.  Note that the Dodckerfile
specifies an instruction that will remove Git from the Docker image.  I did this because
I kept accidentally committing from within Docker.  This would be fine except the author and
author's email had not been set.

Run the new image: `docker run -v path/to/lettuce-asm:/workspace -it riojack/lettuce-asm:dev /bin/bash`.

### Language specification

An assuredly informal set of ever-changing specifications can be found in the [`docs/`](/docs) directory.
