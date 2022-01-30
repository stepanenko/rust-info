fn main() {
    let mut bunnies = 16; // can be mutated
    // let bunnies = 2; // can't be mutated (shadowing)
    bunnies = bunnies - 6;
    println!("Bunnies: {}", bunnies);

    let res = other_fn(5);
    println!("Function res: {}", res);
}

fn other_fn(num: i32) -> i32 {
    const SOME_STR: &str = "my number is";
    println!("{} {}", SOME_STR, num);
    return num;
}
