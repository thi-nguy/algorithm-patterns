import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

public class RandomWord {
 public static void main(String[] args) {
  int numberCount = 0;
  String champion = "";
  while (!StdIn.isEmpty()) {
   String value = StdIn.readString();
   numberCount = numberCount + 1;
   if (StdRandom.bernoulli((double) 1/numberCount)) {
    champion = value;
   }
  }
  StdOut.println(champion);
 }
}
