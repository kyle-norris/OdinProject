function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    var ret = this.title + " by " + this.author + ", " + this.pages + " pages, "
    
    if (this.read) {
      ret = ret + "read"
    } else {
      ret = ret + "not read yet"
    }
    return ret;
  }

}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info())