/* FAQ */
$(".FAQ").each((i, el) => {
    $(el).find(".question").click(() => {
        $(el).find(".answer").slideToggle()
        $(el).find("img").toggleClass("rotate-180")
    })
})