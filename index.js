$(document).ready(function () {
    // TODO: Use https://api.github.com/users/Shetty073/repos for getting the list of my repos
    fetch('https://api.github.com/users/Shetty073/repos')
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            let starGazers = `⭐${repo.stargazers_count}`;
            if (starGazers === '⭐0') {
                starGazers = '';
            }
            let row = '<tr>' +
            '<td>' +
                `<a class="table-links" href="${repo.html_url}">${repo.name}</a>` +
                `<span class="stargazers">${starGazers}</span>` +
            '</td>' +
            `<td>${repo.description}</td>` +
            '</tr>';
            if(!repo.fork) {
                $('#myTable').append(row);
            }
        });
    });


    $('#myInput').on('keyup', function () {
        var value = $(this).val().toLowerCase();

        $('#myTable tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

    });

    $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
    });



});
