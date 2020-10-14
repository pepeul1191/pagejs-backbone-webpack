# Webpack Page JS

### Ejecución de la Aplciación

Instlación de dependencias:

    $ npm install

Arrancar backend modo de desarrollo:

    $ npm run start:dev

Arrancar webpack modo producción:

    $ npm run webpack:build   

Arrancar webpack modo desarrollo:

    $ npm run webpack:dev

Solucionar problema nodemon ENOSPC

    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

Video Tutorial:

    https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1

### Migraciones

Migraciones con DBMATE - accesos:

    $ dbmate -d "db/migrations" -e "DB" new <<nombre_de_migracion>>
    $ dbmate -d "db/migrations" -e "DB" up
    $ dbmate -d "db/migrations" -e "DB" new <<nombre_de_migracion>>
    $ dbmate -d "db/migrations" -e "DB" up
    $ dbmate -d "db/migrations" -e "DB" rollback

---

Fuentes:

+ https://github.com/pepeul1191/webpack-aprendiendo3
+ https://github.com/visionmedia/page.js/blob/master/examples/basic/index.html
+ https://stackoverflow.com/questions/11557526/deserialize-query-string-to-json-object
+ https://visionmedia.github.io/page.js/