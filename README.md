CRDPPF Portal
============

# Getting started

Create an empty folder on your disk and prepare it for the git project from your console

    $ cd [path to the crdppf project folder]
    $ git init
    
Checkout the source code:

    $ git clone https://github.com/sitn/crdppf.git

or when you're using ssh key (see https://help.github.com/articles/generating-ssh-keys):

    $ git clone git@github.com:sitn/crdppf.git

Bootstrap and buildout

    $ python bootstrap.py --version 1.5.2 --distribute --download-base \
        http://pypi.camptocamp.net/distribute-0.6.22_fix-issue-227/ --setup-source \
        http://pypi.camptocamp.net/distribute-0.6.22_fix-issue-227/distribute_setup.py

Create your own buildout file by:
* Copy-paste `buildout.cfg`
* Rename the new file `buildout_<user>.cfg`
* Open this file in a text editor
* Erase all sections except the `[vars]` section
* In the `[vars]` section, delete all lines which do not contain `overwrite_me`
* At the top of the file, add the extend instruction:

```
[buildout]
extends = buildout.cfg
```

Adapt the `overwrite_me` values to your environment:
* `mapproxyurl` has to be a single or a list of WMTS URLs (like 'http://wmts1', 'http://wmts2', ...)
* If you do not set `proxy_enabled` to True, then you do not need to set the four remaining (`proxy_user`, `proxy_pass`, `proxy_server`, `proxy_port`).

Run buildout

    $ ./buildout/bin/buildout -c buildout_<user>.cfg

To upgrade an existing version of the project go into the root folder of your project
Make sure your on the master branch or the branch you want to be on:

to get the list of your local branches:
    $ git branch

change on master if needed:   
 
    $ git checkout master

or create a new branch of your choice if you don't want to overwrite the master:

    $ git checkout -b [mynewbranch]
    
Fetch the global application part:

    $ git fetch upstream
    $ git merge upstream/master
 
if you are updating the inital install to the generalized version you probably get a message 'could not remove crdppf/.../ext' or so. Just delete the folder by

    $ rm -r crdppf

Get the submodule crdppf_core

    $ git submodule update --init
    
Once it is installed get all the libraries of the submodule (ext, openlayers, ...)

     $ cd crdppf_core
     $ git submodule update --init
     
Now you should be up to date and ready to (re)build the application. Don't forget to include the project in the Apache configuration and to restart.