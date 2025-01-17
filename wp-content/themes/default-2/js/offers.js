$(document).ready(function () {
  $.ajax({
    url: "https://api.adkey-seo.com/api/website/get-website/656",
    type: "GET",
    dataType: "json",
    success: function (response) {
      const allMainLinks = $(".js-href-main");
      const allSecondLinks = $(".js-href-second");
      const allVisitLinksFirst = $("#content .visitLink");
      const allVisitLinksSecond = $(".newsColumns .visitLink");
      const allDownloadLink = $(".newsColumns .downloadLink");
      let j = 0;
      for (let i = 0; i < allSecondLinks.length; i++) {
        j += 1;
        if (j >= response.offers.length) {
          j = 0;
        }
        allSecondLinks[i].setAttribute("href", response.offers[j].link);
        allVisitLinksFirst[i].setAttribute("href", response.offers[j].link);
      }
      for (let i = 0; i < allDownloadLink.length; i++) {
        j += 1;
        if (j >= response.offers.length) {
          j = 0;
        }
        allDownloadLink[i].setAttribute("href", response.offers[j].link);
        if (allVisitLinksSecond[i]) {
          allVisitLinksSecond[i].setAttribute("href", response.offers[j].link);
        }
      }
      allMainLinks.each((index, el) => {
        const $el = $(el);
        $el.attr("href", response.offers[0].link);
      });
    },
    error: function (xhr, status, error) {
      console.error("Ошибка запроса:", error);
    },
  });
});
