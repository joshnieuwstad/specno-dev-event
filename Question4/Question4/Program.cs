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
            //Gravity is being switched from left to right instead of down. 

            //Test Case.    Input: 'R', [3, 2, 1, 2]
            //                      d, {Boxes arrangement array}
            //if d = L or R
            //Do Something fancy
            // reverse the array
            // R = L reversed? 

            int[] arr = { 3, 2, 1, 2, 4, 7, 9};


            Console.WriteLine("Type in Which way gravity goes (L or R) or (l or r)");
            string input = Console.ReadLine();
            string d = input;

            if(input == "r" || input == "R")
            {
                d = "R";
            }else if(input == "l" || input == "L")
            {
                d = "L";
            }
            else
            {
                Console.WriteLine("You did not type in L,R,l or r... Start over");
            }


            int[] boxGroup = arr;
            switch (d)
            {
                case "R":
                    Array.Sort(boxGroup);
                    break;
                case "L":
                    Array.Sort(boxGroup);
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

            Console.ReadKey();


        }
    }
}
