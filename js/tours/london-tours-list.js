(function () {

    const tours = [
        {
            id: "1",
            tourImg: "img/tours/tours-royal-london.png",
            tourImgAlt: "tours-royal-london",
            tourTitle: "Royal London",
            tourPrice: 45,
            tourDescription: "The 5-hour journey during which you uncover royal history of the city and travel through time and culture. Feel an incredible atmosphere of ancient London and enjoy every moment."
        },
        {
            id: "2",
            tourImg: "img/tours/tours-london-pubs-img.png",
            tourImgAlt : "tours-london-pubs-img",
            tourTitle: "London Pubs",
            tourPrice: 30,
            tourDescription: "Beer or whiskey? We offer them both for our tourists. We will take you to the most popular bars and pubs with a unique British atmosphere. Just remember to drink responsibly!"
        },
        {
            id: "3",
            tourImg: "img/tours/tours-london-gastro.png",
            tourImgAlt : "tours-london-gastro",
            tourTitle: "London Gastro Tour",
            tourPrice: 35,
            tourDescription: "They say, the British have awful cuisine: it's too hearty and peasant. Well, that's not true in 2021. We will guide you through the best restaurants and cafes in London and will introduce you to the real modern local cuisine."
        },
        {
            id: "4",
            tourImg: "img/tours/tours-exploratory-quest.png",
            tourImgAlt : "tours-exploratory-quest",
            tourTitle: "Exploratory Quest",
            tourPrice: 50,
            tourDescription: "Who said that excursions should be long and boring? We believe in the whole other approach to exploring a new place — that's why we prepared a game for those who want to exercise their logical thinking and have fun. "
        }
    ];

    function createLondonTour(tours) {
        const tourContainer = document.querySelector('.tours-block');
        tourContainer.innerHTML = '';
        for (const tour of tours) {
            tourContainer.innerHTML += `
            <div class="tour-container">
                <div class="tours-img-block">
                    <img src="${tour.tourImg}" alt="${tour.tourImgAlt}" class="tour-img">
                </div>
                <div class="tour-text-block">
                    <div class="tour__title-block">
                        <div class="title-text-block">
                            <span class="tour-title">${tour.tourTitle}</span>
                            <span class="tour-divide-line">|</span>
                            <span class="tour-price">now $${tour.tourPrice}</span>
                        </div>
                    </div>
                    <span class="tours__common-text">${tour.tourDescription}</span>
                </div>
          </div>`
        }
    }
    createLondonTour(tours);

})();