'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  console.log('Link was clicked!');
  console.log(event);
  const clickedElement = this;

  /*remove class 'active' from all article links*/
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /*add class 'active' to the clicked link*/
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);
  /*remove class 'active' from all articles*/
  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
    console.log('activeArticleRemoved');
  }
  /*get 'href' attribute from the clicked link*/
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);
  /*find the correct article using the selector (value of 'href' attribute)*/
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);
  /*add class 'active' to the correct article*/
  targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector ='.post-author';

function generateTitleLinks() {
  /*remove contents of titleList*/
  const titleList = document.querySelector(optTitleListSelector);
  console.log(titleList);
  function clearMessages() {
    titleList.innerHTML = '';
  }
  /*for each article*/
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  /*jak zmienie na to const articles = document.querySelectorAll(optArticleSelector + customSelector);
  to mam komuniktt,ze customSelector is not defined i znika list artykulow po lewej*/

  let html = '';

  for (let article of articles) {
    /*get the article id*/
    const articleId = article.getAttribute('id');
    console.log(articleId);
    /*find the title element*/
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);
    /*create HTML of the link*/
    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      '</span></a></li>';
    console.log(linkHTML);
    /*insert link into titleList*/
    html = html + linkHTML;
    console.log(html);
  }
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log('links', links);

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();



/*6.2. Dodajemy tagi do artykułu*/
function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll('.posts .post');
  console.log(articles);

  /* START LOOP: for every article: */
  for (let article of articles) {
    console.log(article);

    /* find tags wrapper */
    const wrapper = article.querySelector(optArticleTagsSelector);
    console.log('wrapper', wrapper);

    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('tags', articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('array', articleTagsArray);

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log('tag', tag);
      /* generate HTML of the link */
      const linkTag =
        '<li><a href="#tag' + '-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log('linktag', linkTag);

      /* add generated code to html variable */
      html = html + linkTag;
      console.log('html tag', html);
    }

    /* insert HTML of all the links into the tags wrapper  Houston we have a problem*/
    wrapper.innerHTML = html;
    console.log('wrapper', html);
    /* END LOOP: for each tag */
  }

  /* END LOOP: for every article: */
}

generateTags();

/*Dodajemy akcję po kliknięciu w tag*/
function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  console.log('Tags Link was clicked!');
  console.log(event);

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);
  /*   make a new constant "tag" and extract tag from the "href" constant use substring to get the value only
  wg tutoriala mamy uzyc funkcji replace */
  const tag = href.replace('#tag-', '');
  console.log('href', tag);
  /* find all tag links with class active */
  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (let tagLink of tagLinks) {
    /* remove class active */
    tagLink.classList.remove("active");
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const hrefLinks = href.querySelectorAll('href');
  /* START LOOP: for each found tag link */
  for (let hrefLink of hrefLinks) {
    /* add class active */
    hrefLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */
   const links = docuemnt.querySelector('a[href^="#tag-"]');
  /* START LOOP: for each link */
  for(let link of links){
  /* add tagClickHandler as event listener for that link */
  link.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors(){
  /* find all articles */
  const articles = document.querySelectorAll('.posts .post');
  console.log(articles);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find author wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    console.log('AUTHOR wrapper', authorWrapper);
    /* make html variable with empty string */
let html = '';
    /* get AUTHOR from data-AUTHOR attribute */
    const author = article.getAttribute('data-author');
    console.log('author', authors);
    /* insert HTML of all the authors into the tags wrapper */
    authorWrapper.innerHTML = html;
    console.log('authorWrapper', html);
  /* END LOOP: for every AUTHOR: */
  }
}

generateAuthors();

function authorClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  console.log('Author Link was clicked!');
  console.log(event);

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('');
  console.log(href);

  /* find all tag links with class active */
  const tagLinks = document.querySelectorAll('a.active[href^="by-"]');
  /* START LOOP: for each active tag link */
 {
    /* remove class active */

    /* END LOOP: for each active tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-authors="' + by + '"]');
}

function addClickListenersToAuthors() {
  /* find all links to tags */
   const links = docuemnt.querySelector('a[href^="by-"]');
  /* START LOOP: for each link */
  for(let link of links){
  /* add tagClickHandler as event listener for that link */
  link.addEventListener('click', authorClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();
