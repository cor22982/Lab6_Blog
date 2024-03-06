# Lab6_Blog Guatepedia
## Descripcion 
Guatepedia es un blog personal que muestra todas las personalidades de internet de la cultura guatemalteca.
## API
### GET '/'
- Descripcion: Entras a la pagina principal del api
### GET '/posts'
- Descripcion: Obtienes toda la informacion de los posts en formato json
```json
{
      "Pearson": "nombre_persona",
      "Fewdescription": "Breve Descripcion",
      "History": "Historia de la persona",
      "Crucialevents": "Eventos cruciales de la persona",
      "Curiosities": "Curiosidades",
      "AlternativeText": "Un titulo alternativo",
      "AlternativeDescription": "Descripcion del titulo",
      "Textreferences": "referencia usadas",
      "images": "imagen en formato base64"
}
```
### GET '/posts/postId'
- Descripcion: Este metodo obtiene un post en especifico
- parametros: postId: id del post a obtener
```json
{
      "Pearson": "nombre_persona",
      "Fewdescription": "Breve Descripcion",
      "History": "Historia de la persona",
      "Crucialevents": "Eventos cruciales de la persona",
      "Curiosities": "Curiosidades",
      "AlternativeText": "Un titulo alternativo",
      "AlternativeDescription": "Descripcion del titulo",
      "Textreferences": "referencia usadas",
      "images": "imagen en formato base64"
}
```

### POST '/posts'
- Description: Con este metodo se crea un nuevo post
- body: json de la informacion de la persona
```json
{
      "Pearson": "nombre_persona",
      "Fewdescription": "Breve Descripcion",
      "History": "Historia de la persona",
      "Crucialevents": "Eventos cruciales de la persona",
      "Curiosities": "Curiosidades",
      "AlternativeText": "Un titulo alternativo",
      "AlternativeDescription": "Descripcion del titulo",
      "Textreferences": "referencia usadas",
      "images": "imagen en formato base64"
}
```
### PUT  '/posts/:postId '
- Descripcion: Con este metodo se modifica un elemento de un post
- parametros: postId: id del post a modificar
- body: json de el dato a modificar
```json
{
      "columna": "Nombre de la columna a modificar",
      "valor": "Valor a modificar"
}
```
### DELETE  '/posts/:postId '
- Descripcion: Con este metodo se elimina un post
- parametros: postId: id del post a editar
## Respuestas
### 200
Devuelve OK que se realizo el metodo de manera correcta
### 400
Es devuelto cuando se visito un endpoint no existente. O se mandan datos incorrectos en el body del PUT y POST
### 500
Es devuelto si hubo un error de codigo o en el servidor
### 501
Es devuelto si se trate de utilizar un metodo no implementado de http
## Instrucciones
Para poder ejecutar este codigo debe de hacer lo siguiente en su consola y en la carpeta de clonacion
- Crear imagen del docker
```
 docker build -t mysql-blog-image .
```
- Crear el contenedor del docker
```
  docker run --name mysql-blog-container -d -p 3306:3306 mysql-blog-image
```
- Hacer la instalacion de node modules con npm. Recuerde tener una version no tan vieja de node
```
  npm install
```
- Ejecutar el codigo
```
  npm start
```
- Visitar el sitio
```
http://127.0.0.1:22982/
```
- Tambien puede visitar la pagina donde esta publica la api
```
https://api.tiburoncin.lat/22982/
```
## Link API publicada
https://api.tiburoncin.lat/22982/
