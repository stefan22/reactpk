(() => {

    processInput = {
        init(oddsEvens) {
            this.oddsEvens = oddsEvens; //selection
            this.areNums = this.areNums || []; //all Numbers
            this.myNums = [];  //odds/evens
            this.checkIfNumber()
        },

        checkIfNumber() {
            if (typeof input === 'number') {
                this.getOddsEvens(this.oddsEvens);
            } else {
                throw new Error('is not a number');
                return true;
            }
        },

        getNumbersReady(whichOnes) {
            // best fn in entire exercise
            this.areNums = [...input + ''].map(n => +n);
            this.areNums.map(itm => {
                if (whichOnes === 'odds' && (itm % 2) !== 0) {
                    this.myNums.push(itm);
                } else if (whichOnes === 'evens' && (itm % 2) === 0) {
                    this.myNums.push(itm);
                }

            });
            return this.myNums;
        },

        getOdds() {
            this.myNums = this.getNumbersReady('odds');
            if (this.myNums.length > 0) {
                this.getSum(this.myNums);
            }
        },

        getEvens() {
            this.myNums = this.getNumbersReady('evens');
            if (this.myNums.length > 0) {
                this.getSum(this.myNums);
            }

        },

        getOddsEvens(oddsEvens) {
            //select fn based on param (exxtra work)
            (oddsEvens === 'evens') ? this.getEvens(): this.getOdds();

        },

        getSum(nums) {
            let total = nums.reduce((nums, b) => {
                return nums + b;
            });
            console.info(`\nAll Input numbers are: \n\n ${this.areNums}\n\n`);
            console.log(`All Even numbers are: \n\n ${this.myNums}\n\n`);
            console.log(`\nThe sum of all ${this.oddsEvens} is: ${total}`);
            return total;

        },



    }; //processNumber


    const input = 12345678;

    if (!!input) {

        try {
            processInput.init('evens');
        } catch (err) {
            console.log('Error: ', err.message);
        }
    }




})();
