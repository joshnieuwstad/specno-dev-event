using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Question4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // i apologise in advance for the long winded technique.
            // i have more time on this fine saturday and may have gotten carried away. 

            //Gravity is being switched from left to right instead of down. 

            //Test Case.    Input: 'R', [3, 2, 1, 2]
            //                      d, {Boxes arrangement array}
            //if d = L or R
            //Do Something fancy
            // reverse the array
            // R = L reversed? 

            int[] arr = { 3, 2, 1, 2, 4, 7, 9};

            //Create user input as a pretend gravity switch. 
            Console.WriteLine("Type in Which way gravity goes (L or R) or (l or r)");
            string input = Console.ReadLine();
            string d = input;

            //if user inserts R, or r d becomes R
            if(input == "r" || input == "R")
            {
                d = "R";
                //if user inserts L or l d becomes L
            }else if(input == "l" || input == "L")
            {
                d = "L";
            }
            else
            {
                //if user inserts anything except r,l, R or L. User is insulted. 
                Console.WriteLine("You did not type in L,R,l or r... Start over");
            }

            int[] boxGroup = arr;
            switch (d)
            {
                //evrything will be thrown to the right hand side as far
                //as possible within its limits unless blocked by another box.
                //there fore array.sort will arrange everything from smallest to biggest
                case "R":
                    Array.Sort(boxGroup);
                    break;
                case "L":
                    Array.Sort(boxGroup);
                    //reversing the array throws everything to the left. 
                    Array.Reverse(boxGroup);
                    break;
            }

            foreach(int i in boxGroup)
            {
                Console.WriteLine(i);
            }


            if(d == "R")
            {
                Console.WriteLine("All the boxes shifted to the right");
            }else if(d == "L")
            {
                Console.WriteLine("All the Boxes shifted to the Left");
            }
            else
            {
                Console.WriteLine("That was not a proper direction, as you can see- the boxes did not move. ");
            }

            //keep console open 
            Console.ReadKey();


        }
    }
}
