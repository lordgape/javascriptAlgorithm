function minimumPlays(N, K) {
    if (K == 0) {
        return N - 1;
    }

    let plays = 0;

    // loop while we have N or while we have all in plays to make
    while (N > 1 && K > 0) {
        if (N % 2 == 0) {
            K--;
            N /= 2;
            plays++;
        } else {
            N--;
            plays++;
        }
    }

    // Sum the rest of the N
    if (N > 1) {
        plays += N - 1;
    }
    return plays;
}