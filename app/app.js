import * as MODEL from "../model/model.js";

function initial(){

    console.log("")
    $("nav a").click(function(e){
        let btnId = this.id;
        let contentId = btnId + "Content";

        //updates hero image and page content
        $(".hero")

        //update the nav bar
        updateNav(btnId);
       
        $(".page-name").html(btnId);

        MODEL.getPageContent(contentId);

        $("#app .promo-tours a").click(function(e){
            let countryId = this.id;
        
            MODEL.getPageContent("emptyTour");
            updateNav('tours');
            generateTourItinerary(countryId);
        })

        $(".tours a").click(function(e){
            let countryId = this.id;

            MODEL.getPageContent("emptyTour");
            generateTourItinerary(countryId);
        })
    })
} 

function generateTourItinerary(countryId){
    let countryAcronym = countryId;

    let countries = ["israel","usa","aus","nz","france","egypt","japan","canada","uae",];

    let prices = ["1000","1500","1800","1200","2500","900","1300","2000","3000",];


    //update banner image
    $("#banner").addClass(countryId);

    //update price on Itnerary page
    $(".price").html(prices[countries.indexOf(countryId)]);

    
    //updating abbrv. countries

    //refine USA and UAE to acronym
    if(countryAcronym=="usa"){
        countryAcronym="u.s.a."
    }else if(countryAcronym=="uae"){
        countryAcronym="u.a.e."
    } else{};

    //update country on Itnerary page
    $(".country").html(countryAcronym);

    //update country images
    for(var i=1; i<=3; i++){

        //create photo divs
        var addImages = document.createElement("div");

        addImages.className = `ph${i}`;

        addImages.style.backgroundImage = `url('../assets/tour/tour-${countryId}/${countryId}-tour-0${i}.jpg')`;
        
        document.getElementById("subbanner").appendChild(addImages);
    };
}

function updateNav(btnId){
    if(btnId == "home"){
        //hero container
        $('.heroContainer').removeClass('hero');
        $('.heroContainer').addClass('hero');

        //update colors
        $('.black').addClass('white');
        $('.black').removeClass('black');

        //update logo
        $('.blk').addClass('wht');
        $('.blk').removeClass('blk');

        //show intro
        $('div.introContainter').show();

    } else{
        //hero container
        $('.heroContainer').removeClass('hero');

        //update colors
        $('.white').addClass('black');
        $('.white').removeClass('white');

        //update logo
        $('.wht').addClass('blk');
        $('.wht').removeClass('wht');

        //hide intro
        $('div.introContainter').hide();
    }
}





$(document).ready(function(){
    initial();
    // touring();
    MODEL.getPageContent("homeContent");
})
