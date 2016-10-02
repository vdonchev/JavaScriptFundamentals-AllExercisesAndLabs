function countOccurrences([needle, haystack]) {
    let index = 0;
    let matches = 0;
    while (index  >= 0) {
        index = haystack.indexOf(needle, index + 1);
        if (index >= 0) {
            matches++;
        }
    }

    return matches;
}

console.log(countOccurrences(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.']));
