//class hello
//{
  // constructor()
    //{this. faculty = "vikas";
      //console.log("hello cosntructor")

    //}
//}
//let h = new hello();
//console.log(h.faculty);
//class student{
 
    //constructor(rollnumber,name,year)
    //{
      //this.rollnumber= rollnumber;
        //this.name= name;
        //this.year= year;
        //console.log(rollnumber);
        //console.log(name);
        //console.log(year);
    //}
//}
 //let  students1 = new student()
 //let students2 = new student(110,"mohit",2026)
 //let students3 = new student(111,"vishal",2026)
 //class student
 //{
   // static fname="mohit";
    //static lname ="gupta";
     //display()
    //{
       // console.log(student.fname);
        //console.log(student.lname);
        //}
   // }
//student.display();
//let s1 = new student();
  //s1.display();
  class hello
  {
    constructor()
    {
        console.log("hello consturctor");
    }
  }
class hi extends hello
{
    constructor()
    {
        super();
        console.log("hi consturctor");
    }
}
    let h1 = new hi();