document.addEventListener('DOMContentLoaded', () => {
  const contenedorPosts = document.querySelector('.CotenedorPosts')

  // Crea un nuevo elemento div para representar un post
  const nuevoPost = document.createElement('div')

  // Agrega contenido al nuevo post (por ejemplo, un título)
  nuevoPost.textContent = 'Nuevo post agregado desde script.js'

  // Agrega clases al nuevo post (opcional)
  nuevoPost.classList.add('post')

  // Agrega el nuevo post al contenedor de posts
  contenedorPosts.appendChild(nuevoPost)
})
