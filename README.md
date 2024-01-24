### GameStore - [PL T-Mobile] HTML for DIMOCO ###

Markup project created by figma design.


Figma link [url](https://www.figma.com/file/QYwKAQAwoG7fxvW6XRJj3M/PL-T-Mobile?type=design&node-id=1-776&mode=design&t=7CZA7GIedXAygiXN-0 "Figma link")

Demo 3g link [url](https://pw-int.github.io/game-s-t-mobile/ "Demo 3g link")

Demo otp link [url](https://pw-int.github.io/game-s-t-mobile/otp.html "Demo otp link")


## Project structure ##

*src* directory contains source files, like styles, js, and html. Once project is compiled, the *dist* directory will be created and it should be used for the production project.

### Install nodeenv ###

**nodeenv** used to isolate the node versions on the system 

    pip3 install nodeenv

Create a virtualenv with the 18 nod version

    nodeenv -n 18.12.1 env

Active it 

    . env/bin/activate

### How to start the dev server for development? ###

    npm ci
    npm run dev


### How to build the assets? ###

    npm run build

