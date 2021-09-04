let Page = function(){
    this.leftSideSkills = [
        {
            title : "CONTACT DETAILS",
            items : [
                "Email : josefgchdid@gmail.com", 
                "Phone : +961 76 989 427",
                "Github : github.com/josephgchdid",
                "Linkedin : linkedin.com/in/joseph-chdid/"
            ] 
        },
        {
            title : "TECHNICAL SKILLS",
            items : [
                 "FULL STACK DEVELOPMENT",
                 "WEB AND CROSS PLATFORM MOBILE",
                 "DATA MODELING",
                 "DATA CLEANING",
                 "DATA PROCESSING",
                 "DATA VISUALIZATION"
            ] 
        },

        {
            title : "SOFTWARE",
            items : [
               "JAVA",
               "JAVASCRIPT",
               "NODE.JS",
               "SQL",
               "NOSQL",
               "HTML",
               "PYTHON",
               "LINUX AND BASH",
               "FLUTTER"
            ] 
        },
        {
            title : "PERSONAL SKILLS",
            items : [
                "Self-starting attitude",
                "Great sociability",
                "Versatility",
                "Adaptability",
                "Agility",
                "Analytical",
                "Time management"
                
            ] 
        },
        {
            title : "LANGUAGES",
            items : [
                "English - Native",
                "Arabic - Native",
                "French - Intermediate",
                
            ] 
        }
    ]
    this.rightSideSkills = [
        {
           title  : "ABOUT",
           sections : [
               {
                element : "div",
                year : "",
                content : ["Dedicated and efficient Full Stack developer who creates high-performing applications with organized architecture. Keen interest in Data Science and the translation of data to power organizations, by uncovering hidden relations using innovative data exploration/visualization tools and methods."] ,      
                style : { } 
               }
           ]
        },
        {
            title : "EDUCATION",
            sections : [
                {
                    element : "div",
                    year : "2020- 2021 (Full time - 2 months)",
                    content : ["TECH FOR YOUTH PROGRAM - USAID"],
                    style : {"font-weight"  : "bold"}
                },
                {
                    element : "div",
                    year : "",
                    content : ["Data Science course"],
                    style : {}
                },

                {
                    element : "div",
                    year : "2016- 2020",
                    content : ["Umar al-Mukhtar Technical College"],
                    style : {"font-weight"  : "bold"}
                },

                {
                    element : "li",
                    year : "",
                    content : [
                        "Technical License Degree in Informatics Systems Programming",
                        "Technical Excellence Degree in Informatics Systems Programming",
                ],
                    style : {
                         "display": "list-item",
                        "list-style-type": "disc",
                    }
                }
            ]
        },
        {
            title  : "WORK EXPERIENCE",
            sections : [
                {
                    element : "div",
                    year : "2020- 2021",
                    content : ["Freelance - Full Stack developer"],
                    style : {"font-weight"  : "bold"}
                },
                
                {
                    element : "div",
                    year : "",
                    content : ["Inventory Managment System"],
                    style : {}
                },
                {
                    element : "li",
                    year : "",
                    content : [
                        "Analyzed and diagnosed one-user desktop system for small to medium sized business",
                        "Re-designed said system for multi-user usage",
                        "Implemented and programmed the new system including the back-end database and dynamic web pages."
                ],
                    style : {
                         "display": "list-item",
                        "list-style-type": "disc",
                    }
                },
            ]
        },
        
        {
            title  : "HOBBIES",
            sections : [
                {
                 element : "div",
                 year : "",
                 content : [
                    "Hiking",
                    "Reading",
                    "Cycling",
                    "Drawing",
                 ] ,      
                 style : { } 
                }
            ]
         },
    ]

    this.leftSidePane = document.getElementById("left-side")
    this.rightSidePane = document.getElementById("right-side")
    this.profileImage = document.getElementById("profile-img-small")
    this.profileImageEnlarged = document.getElementById("profile-img-large")

    this.buildLeftPane = () => {

        var len = this.leftSideSkills.length;
        
        for(var i = 0; i < len; i++){
            var ul = document.createElement("ul");
            ul.classList.add("no-type")
 
            var h2 = document.createElement("h2")
            
            h2.innerText = this.leftSideSkills[i].title;

           ul.appendChild(h2)

            var elementLen =  this.leftSideSkills[i].items.length;

            for(var  j = 0; j < elementLen; j++){

                var li = document.createElement("li");
                li.innerText = this.leftSideSkills[i].items[j]
                ul.appendChild(li)
         
            }
 
            this.leftSidePane.appendChild(ul)
        }
    }

    this.buildRightPane = () => {

        var len = this.rightSideSkills.length;
        
        for(var i = 0; i < len; i++){
            
            var ul = document.createElement("ul");
            ul.classList.add("no-type")
 
            var h2 = document.createElement("h2")
            
            h2.innerText = this.rightSideSkills[i].title;

            ul.appendChild(h2)
            var sectionLen = this.rightSideSkills[i].sections.length;
            
            var sections = this.rightSideSkills[i].sections;

            for(var j = 0; j < sectionLen; j++){

                var elementType = sections[j].element;

                var element = document.createElement(elementType)
                     
                for(var k = 0 ; k < sections[j].content.length; k++){
                    element.innerHTML += `<${elementType}>${sections[j].content[k]}</${elementType}>`
                }

                if(sections[j].year !== ""){
                    element.innerHTML += `<br>${sections[j].year}</br>`
                }
                
                element.innerHTML += "<br/>"
                Object.assign(element.style, sections[j].style)
            
                ul.appendChild(element)
            }

        
            this.rightSidePane.appendChild(ul)

        }
    }
    
    this.manualCopy = (text) => {

        var textArea = document.createElement('textarea');
        
        textArea.value = text;

        var style = {
            'top' : "0", 
            "left" : "0",
            "position" : "fixed",
            'width' : '2em',
            'height' : '2em',
            'border' : 'none',
            'outline' : 'none',
            'boxShadow' : 'none',
            'background' : 'transparent',

        }
        
        Object.assign(textArea.stlye, style)

        document.body.appendChild(textArea);

        textArea.focus()

        textArea.select()

        try{
            var status = document.execCommand('copy');
            return status;
        }catch(err){
            console.error('Could not copy to clipboard', err)
        }
    }

    this.copyTextToClipBoard = (text, target) => {
        
        if(!navigator.clipboard){
            this.manualCopy(text)
            this.showSnackbar(target);
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            this.showSnackbar(target);
        })
    }

    this.createCopyButton = () => {

        var contactInfos =  document.querySelector('#left-side > ul:nth-child(1)').children;

        var len = contactInfos.length;

        for(var i = 1; i < len; i++){

            var button = document.createElement("button");

            button.classList.add('copy-btn');

            let image = document.createElement('img')
            
            image.src = '/img/copy.png'
            
            button.appendChild(image)
            
            let element = contactInfos[i];

            let info = element.innerText;

            let source = info.substring(0, info.indexOf(':') - 1)

            let value =  info.substring(info.indexOf(':') + 1 , info.length)
            
            button.title = `copy ${source}`

            button.addEventListener('click', () => {
                this.copyTextToClipBoard(value, source)
            });


            element.prepend(button)
        }
     
    
        
    }

    this.showSnackbar = (target) => {
     
        var snackbar = document.getElementById('snackbar');
     
        snackbar.innerText = `copied ${target} to clipboard`
     
        snackbar.className = "show-snackbar";
     
        setTimeout(() => {
            snackbar.className = snackbar.className.replace('show-snackbar', '')
        }, 3000)
    }


    let firstName = "JOSEPH CHDID";

    let occupation = "FULL STACK DEVELOPER"

    let firstNameArray = [...firstName]

    let occupationArray = [...occupation]

    let str = ""

    this.executeWordDisplay = async () => {
       
        await this.displayWord(firstNameArray, 0, firstNameArray.length,'name')
       
        setTimeout(() => {}, 1000)
       
        await this.displayWord(occupationArray, 0, occupationArray.length, 'job')
    }

    this.displayWord = (array, iter, len, elementName) => {

        let element = document.getElementById(elementName);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.displayWordRec(array, iter, len, element);
                resolve();
            }, 1000)
           
        })
    }

    this.displayWordRec = (array, iter , len, element) => {
        
        if(iter != len) {
           
            str += array[iter];

            element.innerText = str;

            iter++

            setTimeout((f) =>  f(array, iter , len, element ) , 50, this.displayWordRec);
        }else {

            element.innerText = str
            
            str = ""
        }

    }

    let isProfilePicClicked = false;
   
    let hiddenStyle = {
        display : "none"
    }

    let shownStyle = {
        display : "block"
    }


    this.onImageClick = () => {

        Object.assign(this.profileImage.style, hiddenStyle);
       
        Object.assign(this.profileImageEnlarged.style, shownStyle)
       
        isProfilePicClicked = true;
    }

    this.onImageHide = () => {


        Object.assign(this.profileImage.style, shownStyle);
        
        Object.assign(this.profileImageEnlarged.style, hiddenStyle)
        
        isProfilePicClicked = false;

    }
}

let p = new Page()
p.buildLeftPane()
p.buildRightPane()
p.createCopyButton()
document.addEventListener('readystatechange', event => { 


    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        p.executeWordDisplay();
    }
});
p.profileImage.addEventListener('click', p.onImageClick);
p.profileImageEnlarged.addEventListener('click', p.onImageHide)
