using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Question3
{
    internal class Program
    {
        static void Main(string[] args)
        {

            // to solve this: 
                // Add the first 4 elements in the sequence to get the 5th element. 
                //to get the 6th, add the previous 4. 
                //and so on. 
                // n is the number of instances this process is cycled through. 

            

            Console.WriteLine("\nXFIBONACCI\n");

            int[] testcase = { 1, 1, 1,  };
            int n = 10;
            //Calling function in foreach because C# does not like to do it in any other way
            foreach(int i in MyFibo(testcase, n)){
                Console.WriteLine(i);
            }
            
            Console.ReadKey();
        }

        public static int[] MyFibo(int[] sig, int n)
        {
            //create a sequence list with int array parameter
            var pattern = new List<int>(sig);
            //get the length of the passed array
            int count = sig.Length;

            //loop through the array with the length being the starting point
            for (int i = count; i < n; i++)
            {
                //Add new Object to the end of the fibonacci list
                //skip bypasses a number of elements in a sequence and returns the remaining elements
                //i-count determines from which point in the sequence Skip is activated. 
                //ie: instance 7 111147
                pattern.Add(pattern.Skip(i - count).Take(count).Sum());
                
            }

            Console.WriteLine(pattern.Take(n).ToArray()[0]);
            return pattern.Take(n).ToArray();
        }

    }
}

