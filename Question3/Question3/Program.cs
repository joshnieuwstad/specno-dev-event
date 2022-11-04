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
            var pattern = new List<int>(sig);
            int count = sig.Length;

            for (int i = count; i < n; i++)
            {
                pattern.Add(pattern.Skip(i - count).Take(count).Sum());
                
            }

            Console.WriteLine(pattern.Take(n).ToArray()[0]);
            return pattern.Take(n).ToArray();
        }

    }
}

