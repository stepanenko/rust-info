
use my_first_rust::my_methods::area_of;
// use rand::thread_rng;

fn main() {
    let mut bunnies = 16; // can be mutated
    // let bunnies = 2; // works (shadow), if redefined without 'mut' won't be mutable 
    bunnies = bunnies - 6;
    println!("Bunnies: {}", bunnies);

    let res = other_fn(5);
    println!("Function res: {}", res);

    let area_value: i32 = area_of(5, 4);
    println!("Area equals {}", area_value);

    // let random_range = thread_rng().gen_range(0, 10);
    // println!("Random Range: {}", random_range);
}

fn other_fn(num: i32) -> i32 {
    const SOME_STR: &str = "my number is";
    println!("{} {}", SOME_STR, num);
    // return num;
    num // if ; is omitted it means 'retung num;'
}
