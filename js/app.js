const loadData = () => {
    const searchField = document.getElementById('search');

    const msgWarning = document.getElementById('msg-1');
    searchText = searchField.value;
    searchField.value = "";

    if (searchText === "" | searchText === " ") {
      msgWarning.innerText = "Search field can not be empty";
    }

    const url = ` https://openlibrary.org/search.json?q=${searchText}`;
    
    
    fetch(url)
        .then(res=> res.json())
        .then(data => {

          displayBook(data.docs)
          displayNum(data)
        
        });

}
    


  const displayNum = d => {
    console.log(d);
    const bookNum = document.getElementById('msg-1');
    bookNum.innerText = `Total Book found: ${d.numFound}`;
  }


const displayBook = books => {
    //console.log(books.length);
    const bookShows = document.getElementById('msg-2');
    bookShows.innerText = `Total Book shown: ${books.length}`;
    
    const searchResult = document.getElementById('div');
    searchResult.textContent = "";
    
    books.forEach(book => {
     console.log(book);

        const div = document.createElement('div');
        div.classList.add('col');
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        div.innerHTML = `
        <div class="card h-100  ">
        <img src="${imgUrl}" class="card-img-top" alt="img">
        <div class="card-body">
        <h2 class="card-title"> ${book.title} </h2>
          <h5> <span class = "text-secondary" >Written by </span>: ${book.author_name} </h5>
          <p class="card-text"> ${book.publish_year} </p>
        </div>
      </div>
        `;

        searchResult.appendChild(div);
    



        
     });
}