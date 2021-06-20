# APIREST
API REST para el proyecto de TSCU

El archivo sensoroutes contiene las rutas para el proyecto
Resumen de las rutas funcionales:

GET: /getAll .. Responde con todos los registros historicos de la base de datos, un flag "successfull" y count para contar el numero de registros que se obtuvieron.

GET: /getRecent: .. Responde con los registros hechos en SOLO LA ULTIMA HORA TRANSCURRIDA DESDE QUE SE HACE LA PETICION, un flag "successfull" y count para contar el numero de registros que se obtuvieron.

GET: /getRecentEntries: .. Responde con las ENTRADAS registradas SOLO EN LA ULTIMA HORA TRANSCURRIDA DESDE QUE SE HACE LA PETICION y un flag "successfull" y count para contar el numero de registros que se obtuvieron.

GET: /getRecentExits: .. Responde con las SALIDAS registradas SOLO EN LA ULTIMA HORA TRANSCURRIDA DESDE QUE SE HACE LA PETICION y un flag "successfull" y count para contar el numero de registros que se obtuvieron.
