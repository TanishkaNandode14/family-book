var images = 
    [
  "father.JPG",
  "mother.JPG",
  "grandma.JPG",
  "grandpa.JPG",
  "sister.JPG",
  "me.JPG" ];

var names = 
    [
  "Abhijit Nandode",
  "Kirti Nandode",
  "Anjali Nandode",
  "Rajendra Nandode",
  "Divyana Nandode",
  "Tanishka Nandode" ];



var i = 0;
var j = 0;

function move()
{
    if (i == 9)
    {
        i = 0;
    }
    
    if (j == 9)
    {
        j = 0;
    }
    
    document.getElementById("image1").src = images[i];
    i++ ;
    
    document.getElementById("name1").src = names[j];
    i++
}
