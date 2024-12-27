// ENUMS
var Position;
(function (Position) {
    Position[Position["Up"] = 0] = "Up";
    Position[Position["Down"] = 1] = "Down";
    Position[Position["Left"] = 2] = "Left";
    Position[Position["Right"] = 3] = "Right";
})(Position || (Position = {}));
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 0] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
console.log(Position.Up); // 0
console.log(Status.Active); // 1
export {};
