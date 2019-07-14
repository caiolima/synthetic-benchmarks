const OP_MIN = 0;
const OP_INC = 1;

function executeOperation(op){
    let r;
    switch (op.type) {
        case OP_MIN:
            r = Math.min(op.lhs, op.rhs);
            break;
        case OP_INC:
            r = op.operand + 1;
            break;
        default:
            r = 0;
    }

    return r;
}
noInline(executeOperation);

j = 0;

let o1 = {type: OP_MIN, lhs: 3, rhs: 4};
let o2 = {type: OP_INC, operand: 2};
for (let i = 0; i<10000; i++){
    j += executeOperation(o1);
    j += executeOperation(o2);
}
