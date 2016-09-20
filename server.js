var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
 'article-one' :{
    title: "Article One By Ganesan Rajendra",
    heading: "Article One",
    content: ` <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>
                <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>
                <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>`,
    
},
 'article-two' :{
    title: "Article One By Ganesan Rajendra",
    heading: "Article Two",
    content: ` <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>
                <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>
                <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>
                <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>`
    
},
 'article-three' :{
    title: "Article Three By Ganesan Rajendra",
    heading: "Article Three",
    content: ` <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>
                <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>
                <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p> <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>
                <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p> <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>
                <p>
                    Webtrendz Technologies India Pvt. Ltd(http://www.web-trendz.com) is a privately held company, consisting of a creative and multi-talented team comprised of web designers, web developers and graphic designers.  We provide a wide range of services including web design, web development, mobile application development, web hosting, and consulting.  
    
                </p>`,
    
}
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate =
 `<html>
    <head>
        ${title}
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
        
         <style>
         
      
        </style>
    </head>
   
    
    <body>
        <div class="container">
            <div>
                <a href="/">home</a>
            </div>
            <hr/>
            <div>
              ${heading}
            </div>
            <div>
              ${content}
            </div>
        </div>
    </body>
</html>
`;

return htmlTemplate;
}
    


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
 res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
