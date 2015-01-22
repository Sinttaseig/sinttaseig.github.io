Environnement de développement :

Nom du Github :

https://github.com/Sinttaseig


VM :

Pour Virtual Box, transférer les VM'S du dossier pour les lancer sur une autre machine.


Install : 

afin d'être en mode administrateur pour pouvoir installer les logiciels, tapez sudo -s.

apt-get install mysql-server

apt-get install apache2

apt-get install ruby

apt-get install jekyll

apt-get install git


Editer :

apt-get install gedit

cd ./etc/apache2/sites-available

gedit 000-degault.confs


Git :

cd git

git clone https://github.com/Sinttaseig/sinttaseig.github.io.git

cd CMS

echo "message" > Readme.md

git add --all

git commit -m "commit1"

git config --global user.email "dumort.pierre_emmanuel@yahoo.fr"

git config --global user.name "Sinttaseig"

git push


Recevoir de GitHub :

cd sites


git clone https://github.com/Sinttaseig/sinttaseig.github.io.git


Envoyer vers GitHub :

Il faut se mettre dans le répertoire du dépôt :

git add --all

git commit -m "Initial commit"

git push


Ruby install :

apt-get install ruby-dev


Jekyll install :

Télécharger le paquet jekyll

sudo -s

apt-get install gem

gem install jekyll-2.4.0.gem

jekyll serve -w




bertrand.keller@gmail.com


