<?php

class Bookshelf {
    
    private int $maxSize;
    private array $listOfMedia = [];

    function __constructor(int $size=5) {
        $this->maxSize = $size;
    }

    public function store(Media $item){
    if(count($this->listOfMedia) < $this->maxSize) {
        array_push($this->listOfMedia, $item);
    }
     
    }
    
    public function getMedia(int $position) : Media{
     return $this->listOfMedia[$position];
    }

    public function getCapacity() : int {
        return $this->maxSize;
    }

    public function getNumberOfMedia() : int {
        return count($this->listOfMedia);
    }

   }

   interface Media {      
    public function readPage(int $pageNumber) : string ;
   }

   class Book implements Media {
       private string $title;
       private string $author;
       private array $pages;

    public function getTitle() : string {
        return $this->title;
    }

    public function getAuthor() : string {
        return $this->author;
    }

    public function readPage(int $pageNumber) : string {
        return $this->pages[$pageNumber];
    }

   }


   class Magazine implements Media {
    private string $name;
    private array $pages;

    public function getName() : string {
        return $this->name;
    }

    public function readPage(int $pageNumber) : string {
        return $this->pages[$pageNumber];
    }
}

 class NoteBook implements Media {
    private string $owner;
    private array $pages;

    public function getOwner() : string {
        return $this->owner;
    }

    public function readPage(int $pageNumber) : string {
        return $this->pages[$pageNumber];
    }


}




?>