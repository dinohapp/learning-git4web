This is the project built from the course by Brad Schiff on Udemy.
To run the project, run npm install, then
make sure gulp-cli is installed.
and run gulp build.
The project dev files are located in app folder and the production version is in the docs folder.

if gulp does not work, create npm-shrinkwrap.json in the root folder and paste the following: 

{
  "dependencies": {
    "graceful-fs": {
        "version": "4.2.2"
     }
  }
}

then run npm install.