var itemsInfo = [
    {
        id: 0,
        text: "Unlike other services for managing reviews, CR stores all reviews in the database of your website. Reviews will remain on your site even if you decide to stop using CR."
    },
    {
        id: 1,
        text: "Accept reviews only from verified customers and prevent SPAM reviews from competitors."
    },
    {
        id: 2,
        text: "Send review invitations for as many orders as you like."
    },
    {
        id: 3,
        text: "Collect reviews about each product from an order."
    },
    {
        id: 4,
        text: "Collect reviews about general store performance indicators such as delivery, customer service, and website."
    },
    {
        id: 5,
        text: "Configure automatic sending of review invitations and receive reviews without making any effort."
    },
    {
        id: 6,
        text: "Manually send review invitations for orders that were fulfilled in the past."
    },
    {
        id: 7,
        text: "Personalize emails for each customer with built-in variables and choose custom colors."
    },
    {
        id: 8,
        text: "Customize “from” name and address on review invitations. Modify footer of emails."
    },
    {
        id: 9,
        text: "Customize email templates of review invitations with your corporate logo."
    },
    {
        id: 10,
        text: "Provide effortless reviewing experience to your customers and maximize reviews conversion rate."
    },
    {
        id: 11,
        text: "Let customers upload pictures and videos with their reviews."
    },
    {
        id: 12,
        text: "Review forms are optimized for mobile devices. Customers can submit reviews directly from their phones."
    },
    {
        id: 13,
        text: "Personalize review forms with built-in variables and custom colors."
    },
    {
        id: 14,
        text: "Customize templates of review forms with your corporate logo."
    },
    {
        id: 15,
        text: "Stimulate your customers to leave reviews and increase their lifetime value by offering discount codes."
    },

    {
        id: 16,
        text: "Offer static and dynamic coupons to reviewers after they left a review."
    },
    {
        id: 17,
        text: "Fine-tune properties of coupons according to your sales strategy."
    },
    {
        id: 18,
        text: "Personalize emails with coupons for each customer using built-in variables."
    },
    {
        id: 19,
        text: "Customize email templates with your corporate logo."
    },
    {
        id: 20,
        text: "Tools to view, manage, and reply to customer reviews."
    },
    {
        id: 21,
        text: "Enable moderation of reviews, if you would like to approve them before publication on your website."
    },
    {
        id: 22,
        text: "Reply to reviews left by your customers. Customers will receive email notifications and have an option to reply you."
    },
    {
        id: 23,
        text: "Get great unique SEO content for your store written by customers and show stars in organic Google search results."
    },
    {
        id: 24,
        text: "Accept user-generated content (UGC) such as photos and videos uploaded by your customers along with reviews."
    },
    {
        id: 25,
        text: "Visual reports to help you track collection of reviews and analyze performance of your store from customers’ point of view."
    },
    {
        id: 26,
        text: "Let customers feel more confident about shopping at your store by featuring a trust badge that shows a summary of verified customer reviews."
    },
    {
        id: 27,
        text: "Showcase verified copies of reviews on a dedicated page of your store on cusrev.com portal."
    },
    {
        id: 28,
        text: "Choose a trust badge that is a good fit for your website. Increase your store’s conversion rate by placing a trust badge on the home, checkout or any other page(s)."
    },
    {
        id: 29,
        text: "Remove advertisements from the page with verified copies of reviews for your store on cusrev.com portal."
    },
    {
        id: 30,
        text: "Customize pages with verified copies of reviews by uploading your corporate logo."
    },
    {
        id: 31,
        text: "Generate an XML feed with product reviews for Google Shopping and show star ratings in Google Shopping search results."
    },
    {
        id: 32,
        text: "User interface elements of customer-facing emails and review forms are translated into 33 languages."
    },
    {
        id: 33,
        text: "Add product reviews from external websites to your shop using this feature. Reviews will be created based on a CSV file."
    },

    {
        id: 34,
        text: "Get support when you need it."
    },
];
console.log(itemsInfo);

var featureQuestion = $(".feature_question-icon");
var tooltip = $('<div class="features-tooltip"><span></span></div>');
var tooltipText = $('<p class="features-tooltip-text"></p>')

var screenWidth = $(window).innerWidth();

$(document).ready(function () {
    featureQuestion.each(function (i, el) {
        $(el).mouseover(function () {
            var tooltipIndex = $(el).attr("data-num");
            var questionLeft = $(el).position().left;
            var qLM = questionLeft - 62;
            var qLT = questionLeft - 32;
            var qLD = questionLeft + 02;

            var item = itemsInfo.find(item => item.id == tooltipIndex);
            tooltip.append(tooltipText);
            tooltipText.append(item.text);
            $(el).parent().append(tooltip);
            console.log(screenWidth);
            if (screenWidth > 991) {
                $(".features-tooltip span").css('left', qLD);
            } else if (screenWidth > 768 && screenWidth <= 991) {
                $(".features-tooltip span").css('left', qLT);
            } else if (screenWidth > 320 && screenWidth <= 768) {
                $(".features-tooltip span").css('left', qLM);
            }



        });
        $(el).mouseleave(function () {
            tooltipText.empty();
            tooltip.remove();
        })
    })
});
