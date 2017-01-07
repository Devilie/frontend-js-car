'use strict';

var car = {
    color: "white",
    dours: 4,
    speed: 0,
    defaultSpeed: 60,
    maxSpeed: 100,
    seats: 4,
    passengers: [],
    put: function () {
        if (this.passengers.length < this.seats) {
            this.passengers.push(true);
        }
    },
    land: function () {
        if (this.passengers.length <= this.seats && this.passengers.length > 0) {
            this.passengers.pop();
            if (this.passengers.length===0) {
                this.speed = 0;
            }
        }
        
    },
    drive: function (newSpeed) {
        if (newSpeed === undefined && this.passengers.length > 0) {
            this.speed = this.defaultSpeed;
        }
        else if (this.passengers.length === 0) {
            this.speed = 0;
        }
        else if (newSpeed>this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        else {
            this.speed = newSpeed;
        }

    }
};
module.exports = car;