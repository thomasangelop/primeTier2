console.log('client js works');

$(document).ready(onReady);

function onReady() {
    console.log('woot');
    getAllSongs();
    $('#songs').on('click', '.btn-delete', function (){
        console.log('what did I click on???', $(this));
        let row = $(this).parentUntil('tr');
        let songId = $row.data('id');
        deleteSong(songId);
        console.log('you clicked delete', row);
    });
    $('#songs').on('click', '.btn-upvote', function() {
        console.log('upvote button was clicked');
        let songId = $(this).closest('tr').data('id');
        voteOnSong(songId, 'up');
    });
    $('#songs').on('click', '.btn-downvote', function() {
        console.log('downvote button was clicked');
        let songId = $(this).closest('tr').data('id');
        voteOnSong(songId, 'down');
    });
}

function voteOnSong(songId, voteDirection){
    $.ajax({
        method: 'PUT',
        url: `/songs/rank/:${songId}`,
        data: {
            voteDirection
        }
    }).then( function(response){
        getAllSongs();
    }).catch( function(error) {
        alert('error on vote on song', error);
    });
}

// let newRow = $(`
//         <tr>
//             <td>${aSong.artist}</td>
//             <td>${aSong.track}</td>
//             <td>${aSong.published}</td>
//             <td>${aSong.rank}</td>  
//             <td>
//               <button class="btn-delete">Delete</button>
//               <button>Edit</button>
//             </td>
//         </tr>
//         `);

function getAllSongs() {
    $.ajax({
        method: 'GET',
        url: '/songs'
    }).then(function(response) {
        console.log('in get all songs', response);
        $('#songs').empty();
        for(let aSong of response){
            let newRow = $(`
        <tr>
            <td>${aSong.artist}</td>
            <td>${aSong.track}</td>
            <td>${aSong.published}</td>
            <td>${aSong.rank}</td>  
            <td>
              <button class="btn-delete">Delete</button>
              <button class="btn-upvote">Up Vote</button>
              <button class="btn-downvote">Down Vote</button>
            </td>
        </tr>
        `);
        
        $('#songs').append(newRow);
        newRow.data('id', aSong.id);
        }
    })
}

function deleteSong(songID) {
   $.ajax({
        medthod: 'DELETE', 
        url: `/songs/${songID}`
    }).then( function(response){
        console.log('deleted it');
        getAllSongs();
    }).catch( function(error) {
        alert('error on delete');
    });
}