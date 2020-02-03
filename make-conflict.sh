touch my_code.sh
git add my_code.sh
echo "echo Hello" > my_code.sh
git commit -am 'initial'
git checkout typos
echo "echo \"Hello World\"" > my_code.sh
git commit -am 'first commit on typos'
git checkout typos
echo "echo \"Hello World!\"" > my_code.sh
git commit -am 'second commit on master'
git merge dev
