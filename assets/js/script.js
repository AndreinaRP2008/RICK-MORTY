function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");


results
   .then(response=> response.json())
   .then(data=> {
    done(data)
   });

}

getCharacters(data => {

    const article = document.createRange().createContextualFragment(/*html*/
    <article>

    <div class="image-container">
        <img src="https://rickandmortyapi.com/api/character/avatar/44.jpeg" alt="Personajes"/>
    </div>

    <h2>Personaje</h2>
    <span>Estado de personajes</span>

</article>
)
})
