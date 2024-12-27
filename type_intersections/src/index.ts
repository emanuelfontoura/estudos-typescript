// TYPE INTERSECTIONS
type Robot = {
    material: string,
    fuel: string
}

type Human = {
    name: string,
    age: number
}

type Ciborg = Robot & Human // ciborg = {material, fuel, name, age}