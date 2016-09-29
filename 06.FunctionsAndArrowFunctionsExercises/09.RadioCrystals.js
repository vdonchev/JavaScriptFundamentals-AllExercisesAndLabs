function radioCrystals(input) {
    let cut = c => c / 4;
    let lap = c => c * 0.80;
    let grind = c => c - 20;
    let etch = c => c - 2;
    let xRay = c => ++c;
    let transportAndWashing = c => Math.floor(c);

    function performOperation(op, opName, currentThickness, desiredThickness) {
        let counter = 0;
        while (true) {
            let newThickness = op(currentThickness);
            if (Math.floor(newThickness) + 1 == desiredThickness) {
                currentThickness = newThickness;
                counter++;
                break;
            }

            if (newThickness < desiredThickness) {
                break;
            }

            currentThickness = newThickness;
            counter++;
        }

        if (counter > 0) {
            console.log(`${opName} x${counter}`);
            console.log('Transporting and washing');
            currentThickness = transportAndWashing(currentThickness);
        }

        return currentThickness;
    }

    input = input.map(Number);
    let desiredMicrons = input[0];
    let crystals = input.splice(1, input.length - 1);

    for (let i = 0; i < crystals.length; i++) {
        let crystal = crystals[i];

        console.log(`Processing chunk ${crystal} microns`);

        crystal = performOperation(cut, 'Cut', crystal, desiredMicrons);
        crystal = performOperation(lap, 'Lap', crystal, desiredMicrons);
        crystal = performOperation(grind, 'Grind', crystal, desiredMicrons);
        crystal = performOperation(etch, 'Etch', crystal, desiredMicrons);

        if (crystal < desiredMicrons) {
            crystal = xRay(crystal);
            console.log('X-ray x1');
        }
        
        console.log(`Finished crystal ${crystal} microns`);
    }
}

// radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);