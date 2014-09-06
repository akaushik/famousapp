define(function(require, exports, module) {
    var SlideData = {
        userId: '109813050055185479846',
        albumId: '6013105701911614529',
        localUrl:'http://localhost:1337/',
        picasaUrl: 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=amitabh%20bachhan',
        defaultImage: 'https://lh4.googleusercontent.com/-HbYp2q1BZfQ/U3LXxmWoy7I/AAAAAAAAAJk/VqI5bGooDaA/s1178-no/1.jpg'
    };

    var data = '{"responseData": {"results":[{"GsearchResultClass":"GimageSearch","width":"1152","height":"864","imageId":"ANd9GcQQigy-U6KTXke82n5hma5qvFM2UyVnkGtJme6pkZgl_1GYM--Yb90oqnOJ","tbWidth":"150","tbHeight":"113","unescapedUrl":"http://www.blirk.net/wallpapers/1152x864/fuzzy-monkey-1.jpg","url":"http://www.blirk.net/wallpapers/1152x864/fuzzy-monkey-1.jpg","visibleUrl":"stackoverflow.com","title":"\u003cb\u003efuzzy\u003c/b\u003e-\u003cb\u003emonkey\u003c/b\u003e-1.jpg","titleNoFormatting":"fuzzy-monkey-1.jpg","originalContextUrl":"http://stackoverflow.com/questions/17773949/rails-best-way-to-extract-values-from-response-hash","content":"\u003cb\u003efuzzy\u003c/b\u003e-\u003cb\u003emonkey\u003c/b\u003e-1.jpg","contentNoFormatting":"fuzzy-monkey-1.jpg","tbUrl":"http://t1.gstatic.com/images?q\u003dtbn:ANd9GcQQigy-U6KTXke82n5hma5qvFM2UyVnkGtJme6pkZgl_1GYM--Yb90oqnOJ"},{"GsearchResultClass":"GimageSearch","width":"600","height":"397","imageId":"ANd9GcRpZyXXWBk0TJuU6PCdvrgrU7QckCJQ5DP96iyLc6uLx1bQn4EvBZDFLCk","tbWidth":"135","tbHeight":"89","unescapedUrl":"http://www.acuteaday.com/blog/wp-content/uploads/2011/05/fuzzy-snub-nosed-monkey.jpg","url":"http://www.acuteaday.com/blog/wp-content/uploads/2011/05/fuzzy-snub-nosed-monkey.jpg","visibleUrl":"www.acuteaday.com","title":"snub-nosed \u003cb\u003emonkey\u003c/b\u003e » A Cute A Day","titleNoFormatting":"snub-nosed monkey » A Cute A Day","originalContextUrl":"http://www.acuteaday.com/blog/tag/snub-nosed-monkey/","content":"\u003cb\u003efuzzy\u003c/b\u003e snub nosed \u003cb\u003emonkey\u003c/b\u003e","contentNoFormatting":"fuzzy snub nosed monkey","tbUrl":"http://t1.gstatic.com/images?q\u003dtbn:ANd9GcRpZyXXWBk0TJuU6PCdvrgrU7QckCJQ5DP96iyLc6uLx1bQn4EvBZDFLCk"},{"GsearchResultClass":"GimageSearch","width":"450","height":"320","imageId":"ANd9GcT-EgNEw11TWbGmbzJEfXyPfbKcp915AMaybfjBoabF-KhY5FAvNUCTMmw","tbWidth":"127","tbHeight":"90","unescapedUrl":"http://static0.bigstockphoto.com/thumbs/9/9/4/large2/4999070.jpg","url":"http://static0.bigstockphoto.com/thumbs/9/9/4/large2/4999070.jpg","visibleUrl":"www.crystalgraphics.com","title":"Portrait of a funny looking \u003cb\u003efuzzy monkey\u003c/b\u003e the endangered Zanzibar \u003cb\u003e...\u003c/b\u003e","titleNoFormatting":"Portrait of a funny looking fuzzy monkey the endangered Zanzibar ...","originalContextUrl":"http://www.crystalgraphics.com/powerpictures/Image.Search.Details.asp?product\u003dcg4p999070c","content":"funny looking \u003cb\u003efuzzy monkey\u003c/b\u003e","contentNoFormatting":"funny looking fuzzy monkey","tbUrl":"http://t2.gstatic.com/images?q\u003dtbn:ANd9GcT-EgNEw11TWbGmbzJEfXyPfbKcp915AMaybfjBoabF-KhY5FAvNUCTMmw"},{"GsearchResultClass":"GimageSearch","width":"1772","height":"1186","imageId":"ANd9GcQ7o-G9ebpF3030rDS8Lcz1fQ7ej-HCIrWOhwcWZrgoiQgZzyj1PEUQGXCu","tbWidth":"150","tbHeight":"100","unescapedUrl":"http://cdn.attackofthecute.com/December-08-2012-23-23-51-iop.jpg","url":"http://cdn.attackofthecute.com/December-08-2012-23-23-51-iop.jpg","visibleUrl":"attackofthecute.com","title":"\u003cb\u003eFuzzy\u003c/b\u003e.","titleNoFormatting":"Fuzzy.","originalContextUrl":"http://attackofthecute.com/on/?i\u003d16374","content":"\u003cb\u003emonkey\u003c/b\u003e with a \u003cb\u003efuzzy\u003c/b\u003e face.","contentNoFormatting":"monkey with a fuzzy face.","tbUrl":"http://t2.gstatic.com/images?q\u003dtbn:ANd9GcQ7o-G9ebpF3030rDS8Lcz1fQ7ej-HCIrWOhwcWZrgoiQgZzyj1PEUQGXCu"}],"cursor":{"resultCount":"2,300,000","pages":[{"start":"0","label":1},{"start":"4","label":2},{"start":"8","label":3},{"start":"12","label":4},{"start":"16","label":5},{"start":"20","label":6},{"start":"24","label":7},{"start":"28","label":8}],"estimatedResultCount":"2300000","currentPageIndex":0,"moreResultsUrl":"http://www.google.com/images?oe\u003dutf8\u0026ie\u003dutf8\u0026source\u003duds\u0026start\u003d0\u0026hl\u003den\u0026q\u003dfuzzy+monkey","searchResultTime":"0.16"}}, "responseDetails": null, "responseStatus": 200}';
    
    SlideData.getUrl = function() {
        var url =  SlideData.picasaUrl ;
    	console.log(url);
        return url;
    };

    SlideData.parse = function() {
        var urls = [];
        data = JSON.parse(data);
        var entries = data.responseData.results;
        for (var i = 0; i < entries.length; i++) {
            var media = entries[i].url;
            urls.push(media);
        }
        return urls;
    };

    module.exports = SlideData;
});
