var items = $('#movies'), likeInfo = $('likeInfo'), id = $('#id'), counter = 0;

function countUpLike(id) {
  $('.like a').on('click', function() {
    //e.preventDefault();
    console.log(id);
    $(id).html(counter++);
  });
}

function listMovies() {
  for (let i = 0; i < movies.length; i++) {
    var media = `
      <div class="col-lg-5 media item m-2 p-2" id="` + movies[i].id + `">
        <img src="` + movies[i].pic + `" class="align-self-start" alt="` + movies[i].name + `">
        <div class="media-body">
          <h5 class="mt-0">` + movies[i].name + `</h5>
          <p>` + movies[i].discr + `</p>
          <h4 class="like"><a href="#">Like</a></h4>
          <div class="likeInfo text-center align-self-center">` + counter + `</div>
        </div>
      </div>
      `;
    items.append(media);
  }

}
