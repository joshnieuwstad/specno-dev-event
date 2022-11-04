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
            int[] testcase = { 1, 1, 1, 1 };
            int n = 10;
            //Calling function in foreach
            foreach(int i in MyFibo(testcase, n)){
                Console.WriteLine(i);
            }
            
            Console.ReadKey();
        }

        public static int[] MyFibo(int[] sig, int n)
        {
            //create a list sequence list with an array as a parameter
            var pattern = new List<int>(sig);
            //get the length of the array
            int count = sig.Length;

            //loop through the array with the length being the starting point
            for (int i = count; i < n; i++)
            {
                //add the difference of the instance and sequence and add them in preparation for the next number in the array
                pattern.Add(pattern.Skip(i - count).Take(count).Sum());
                
            }

            Console.WriteLine(pattern.Take(n).ToArray()[0]);
            return pattern.Take(n).ToArray();
        }

    }
}

