using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Question_2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            
            string[] Input = { "laptop", "phone", "charger","SuperChargers" };
        
            //get the longest string in the array
            string longest = Input.OrderByDescending( s => s.Length ).First();
            
            //create variable of the length of the longest array
            int space = longest.Length;

            //apply same technique to workout the border length
            string borderSpace = new string('*', space);

            //add the border
            Console.WriteLine("**" + borderSpace + "**");
            //loop through the array 
            foreach (string i in Input)
            {
                //work out the length of each string instance "i"
                int smaller = i.Length;
                //calculate the difference in length between the longest and each instance
                int extra = space - smaller;
                //store difference as a variable and new string as a space
                string resultSpace = new string(' ', extra);
                //print concatenated line of resultspace with instance
                Console.WriteLine("* " + i + resultSpace + " *");
            }
            //print border
            Console.WriteLine("**" + borderSpace + "**");

            Console.ReadKey();
        }
    }
}
