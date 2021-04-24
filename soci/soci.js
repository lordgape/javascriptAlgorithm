/*
(JavaScript) You are given a paginated response from a REST API that contains information about movies. 
All the pages have been already fetched and you are given the following data structure. 
Your goal is to determine the average and maximum rating of all the movies in the dataset (two single values). 
You can assume that the “data” property is always present and is an array and each entry contains the “rating” value. 
The number of pages and items per page is undetermined. *


*/

const averageSum = (array) => {
    let allPageRating =  array.map(item => item.data).flat();

    let allRatings = allPageRating.map((item) => item.rating);

    let maximumRating = Math.max(...allRatings);

    let average = allRatings.reduce((acc,currentValue) => {
          return  acc + currentValue
    },0)/allRatings.length;

    return {average, maximumRating}
};


let data = [
  {
    page: 1,
    totalPages: 5,
    data: [
      {
        title: "Movie 1",
        rating: 4.7,
      },
      {
        title: "Movie 2",
        rating: 7.8,
      },
    ],
  },
  {
    page: 2,
    totalPages: 5,
    data: [
      {
        title: "Movie 3",
        rating: 5.1,
      },
      {
        title: "Movie 2",
        rating: 2.4,
      },
    ],
  },
];

console.log(averageSum(data));

