# Memorial Sloan Kettering Test

def solution(s)
  # write your code in Ruby 2.2

  # perform nested loop, check if there is a repeat
  # if repeat is confirmed, then return said letter
  # time complexity O(n^2)

  (0...s.length-1).each do |idx1|
    (idx1+1..s.length).each do |idx2|
      return s[idx1] if s[idx1] == s[idx2]
    end
  end
end

p solution("aba")
p solution("zz")
p solution("codility")

function solution(A, B, N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // n = possible # of cities
    // a & b are the edges of nodes (cities)
    // what are the chosen cities?

    // create a hash, counting # of roads to each city
    // key = city, value = # of roads to city (the amount of times it appears in each array)
    const cityRoads = {}

    for (let idx = 0; idx < A.length; idx++) {
        // if hash doesn't hold city, add city and value
        // if hash does hold city, add value to city
        !cityRoads[A[idx]] ? cityRoads[A[idx]] = A[idx] : cityRoads[A[idx]] += A[idx];
        !cityRoads[B[idx]] ? cityRoads[B[idx]] = B[idx] : cityRoads[B[idx]] += B[idx];
    }

    // how do we return without chosen cities provided?
}


function solution(S, C) {
    // write your code in JavaScript (Node.js 8.9.4)
    const string = S.split("")

    // have a counter to see deletion cost
    let deletionCost = 0

    // iterate thru the string and check if dup next to each other
    // if dups, compare deletion value, then remove smaller dup
    for (let i = 0; i < string.length-1; i++) {
        if (string[i] === string[i+1]) {
            if (C[i] < C[i+1]) {
                deletionCost += C[i]
                string.splice(i, 1);
                C.splice(i, 1);
                i--;
            } else {
                deletionCost += C[i+1]
                string.splice(i+1, 1);
                C.splice(i+1, 1);
                i--;
            }
        }
    }

    // return deletion cost
    return deletionCost;
}