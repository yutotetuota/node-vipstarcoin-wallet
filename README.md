A VIPSTARCOIN Wallet based on NodeJS and VIPSTARCOINd RPC API

![Screenshot](http://s22.postimg.org/sa9eq44wt/sc3.jpg)

Plan:

1. RPC proxy
2. use https
3. login/logout feature ()
4. readonly mode (so that user can only view the wallet, but can not make transaction)
5. multiple account mode (developed for merchats to view balance and transactions for multiple accounts)


How to use it:

1. install VIPSTARCOINd

2. config VIPSTARCOINd to accept RPC call

```
vim ~/.VIPSTARCOIN/VIPSTARCOIN.conf
```

3. git clone https://github.com/yutotetuota/nodewallet.git

4. copy config.sample.js to config.js and edit config.js add your username password to it

```
cp config.sample.js config.js
vim config.js
```

5. edit auth.js username and password

6. npm install

7. node app and then visit: https://yourserver:8080
