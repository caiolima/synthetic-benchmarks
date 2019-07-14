let assert = (a) => {
  if (!a)
    throw new Error("Bad!");
}

let d = 256;

function search(pat, txt, q) {
  let M = pat.length;
  let N = txt.length;
  let i = 0;
  let j = 0; 
  let p = 0;
  let t = 0;
  let h = 1;
  let count = 0;

  for (i = 0; i < M - 1; i++) {
    h = (h * d) % q;
  }

  // Calculate the hash value of pattern and first
  //     window of text
  for (i = 0; i < M; i++) {
    p = (d * p + pat.charCodeAt(i)) % q;
    t = (d * t + txt.charCodeAt(i)) % q;
  }

  // Slide the pattern over text one by one
  for (i = 0; i <= N - M; i++) {

    // Check the hash values of current window of text
    // and pattern. If the hash values match then only
    // check for characters on by one
    if (p == t) {
      /* Check for characters one by one */
      for (j = 0; j < M; j++) {
        if (txt.charCodeAt(i + j) != pat.charCodeAt(j))
          break;
      }

      // if p == t and pat[0...M-1] = txt[i, i+1, ...i+M-1]
      if (j == M)
        count++;
    }

    // Calculate hash value for next window of text: Remove
    // leading digit, add trailing digit
    if (i < N - M) {
      t = (d * (t - txt.charCodeAt(i) * h) + txt.charCodeAt(i + M)) % q;

      // We might get negative value of t, converting it
      // to positive
      if (t < 0)
        t = (t + q);
    }
  }

  return count;
}

let txt = "GEEKS FOR GEEKS";
let pat = "GEEK";
for (let i = 0; i < 1000; i++)
  txt += " GEEKS FOR GEEKS";

let q = 101;
let runs = 50;
while (runs--) {
    for (let i = 0; i < 10; i++)
      assert(search(pat, txt, q) == 2002);
}

