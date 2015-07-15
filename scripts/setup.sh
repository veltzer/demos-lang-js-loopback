# source this file so that you will take nodejs packages
# from ~/.npm-packages
# also make sure that you have ~/.npmrc
# with:
# prefix = /home/mark/.npm-packages
# in it...
# to enable node(1) completions do something like this:
# npm completion > ~/.bash_completion.d/npm
export NPM_PACKAGES=$(path_abs ~/.npm-packages)
export PATH=$(path_prefix ~/.npm-packages/bin "$PATH")
export MANPATH=$(path_prefix ~/.npm-packages/share/man "$MANPATH")
export NODE_PATH=$(path_prefix ~/.npm-packages/lib/node_modules "$NODE_PATH")
