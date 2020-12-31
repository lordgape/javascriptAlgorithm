"use strict";

const https = require("https")

const API_URL = 'https://jsonmock.hackerrank.com/api/articles?author=';


const getArticleTitles = async (author) => {
  try {
    let allTitles = [];
    let totalPages = 1;
    let currentPage = 1;
    let queue = [];

    // Let's make the first call to get totalPage
    let response = await remoteCall(author);

    totalPages = response.total_pages;
    currentPage = response.page;

    allTitles = getTitles(response.data);

    for (let i = currentPage + 1; i <= totalPages; i++) {
        queue.push(remoteCall(`${author}&page=${i}`));
      }
      let resp = await Promise.all(queue);
      allTitles.push(...getArticlesFromPromise(resp));
      return allTitles;

  } catch (error) {
    console.log(error);
  }
};

async function remoteCall(query) {
    return new Promise(function (resolve, reject) {
      https.get(`${API_URL}${query}`, (resp) => {
        let data = '';
  
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
  
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          resolve(JSON.parse(data));
  
        }).on("error", (err) => {
          reject('Err: ');
        });
      })
    })
  }

const getArticlesFromPromise = (promisesResp) => {    
    return promisesResp.map(article => {
      return getTitles(article.data);
    });
    
  }

const getTitles = (articles) => {

    return articles.reduce((accumulate,article) => {
        if(article.title) {
             accumulate.push(article.title)
        }
        else if (article.story_title) {
             accumulate.push(article.story_title)
        }

        return accumulate
    },[])
}


getArticleTitles("olalonde").then((response) => {
    console.log("Result ",response);
});
