"use strict";
var Signature;
(function (Signature) {
    Signature["Director"] = "Shadman";
    Signature["Manager"] = "Martin";
    Signature["Client"] = "Piyal";
})(Signature || (Signature = {}));
;
let information;
information = {
    name: 'Abdullah Hasan Sarker',
    age: 30,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    reference: [
        { referenceName: 'Abu', referenceNumber: 121, govtId: '121' },
        { referenceName: 'Dullah', referenceNumber: 220, govtId: 200 }
    ],
    cgpa: [4.00, 3.00],
    sign: Signature.Director,
    literal: 'Piyal'
};
console.log(information);
