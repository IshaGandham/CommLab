

let makeQuote1Appear = () => {
    document.getElementById("quote-1").innerText = "I love trees";
}

let makeQuote1Disappear = () => {
    setTimeout(() => {
        document.getElementById("quote-1").innerText = "";
    }, )

}

let image1 = document.getElementById("image-1");
image1.addEventListener('mouseenter', makeQuote1Appear);
image1.addEventListener('mouseleave', makeQuote1Disappear);

let makeQuote2Appear = () => {
    document.getElementById("quote-2").innerText = "I love Al Yousef Centre";
}

let makeQuote2Disappear = () => {
    setTimeout(() => {
        document.getElementById("quote-2").innerText = "";
    },)

}

let image2 = document.getElementById("image-2");
image2.addEventListener('mouseenter', makeQuote2Appear);
image2.addEventListener('mouseleave', makeQuote2Disappear);

let makeQuote3Appear = () => {
    document.getElementById("quote-3").innerText = "I love Antonia";
}

let makeQuote3Disappear = () => {
    setTimeout(() => {
        document.getElementById("quote-3").innerText = "";
    },)

}

let image3 = document.getElementById("image-3");
image3.addEventListener('mouseenter', makeQuote3Appear);
image3.addEventListener('mouseleave', makeQuote3Disappear);

let makeQuote4Appear = () => {
    document.getElementById("quote-4").innerText = "I love Maggie Rogers";
}

let makeQuote4Disappear = () => {
    setTimeout(() => {
        document.getElementById("quote-4").innerText = "";
    },)

}

let image4 = document.getElementById("image-4");
image4.addEventListener('mouseenter', makeQuote4Appear);
image4.addEventListener('mouseleave', makeQuote4Disappear);
