
'use strict';

function titleClickHandler(event){

  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);


  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  console.log(activeLinks);

  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
  console.log('ClassActiveRemoved');
  }

   /* add class 'active' to the clicked link */
   clickedElement.classList.add('active')
   console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */
   const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
    console.log('activeArticleRemoved');
  }
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) Czy ja tu nie musze wskazac jaka czesc html chce przeszukac?*/
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle)

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles';


function generateTitleLinks(){
    console.log('titleLinks');

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    console.log(titleList);
    function clearMessages(){
	  titleList.innerHTML = '';

}
     /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);

    let html = '';

    for(let article of articles){
      /* get the article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);
      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);
      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);
      /* insert link into titleList */
     html = html + linkHTML;
     console.log(html);
    }

  titleList.innerHTML = html;

}

generateTitleLinks();
