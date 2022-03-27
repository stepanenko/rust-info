
# Rust

The Rust Programming Language: https://doc.rust-lang.org/book/

Rust official getting started page: https://www.rust-lang.org/learn/get-started

Rust by Example: https://doc.rust-lang.org/rust-by-example/index.html#rust-by-example

Small exercises to get you used to reading and writing Rust: https://github.com/rust-lang/rustlings

---

Install Rustup (Rust installer and version management tool) on Mac:
```zsh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

When you install Rustup you’ll also get the latest stable version of the Rust build tool and package manager, also known as Cargo. Cargo does lots of things:
- build your project with `cargo build`
- run your project with `cargo run`
- test your project with `cargo test`
- build documentation for your project with `cargo doc`
- publish a library to crates.io with `cargo publish`

To test that you have Rust and Cargo installed, you can run this in your terminal of choice:
```zsh
cargo --version
```

Rust updates very frequently. Get the latest version of Rust by running:
```zsh
rustup update
```

---
## Rust programming language

Current reading: **Fullstack Rust: The Complete Guide to Buildings Apps with the Rust**

All of good ideas from the world of programming language design combine
in a unique way to make Rust a language that truly makes you think about writing
code from a novel perspective. It does not matter how much experience you have,
learning Rust will forever change the way you write code for the better.

There is no best programming language. Almost every task has a variety of languages
which could be the right tool. Every language comes with good parts and bad parts.
Evaluating these trade-offs when faced with a particular problem is an art.

## Language features

There are a lot of features of Rust which make it a great tool for a great number of tasks. Some highlights include:
- Performance
- Strong, static, expressive type system
- Great error messages
- Modern generics
- Memory safety
- Fearless concurrency
- Cross platform
- C interoperability


### Performance

Rust is exceptionally fast, as C and C++. Memory consumption - **rust does not have a
garbage collector** so you can use exactly as much memory as is strictly necessary
at any given time.

Rust uses a relatively unique memory management approach that incorporates the idea of memory “ownership”. Basically, Rust keeps track of who can read and write to memory. It knows when the program is using memory and immediately frees the memory once it is no longer needed. It enforces memory rules at compile time, making it virtually impossible to have runtime memory bugs. You do not need to manually keep track of memory. The compiler takes care of it.

### [Cargo](https://doc.rust-lang.org/cargo/index.html)
Cargo is the Rust package manager. Cargo downloads your Rust package's dependencies, compiles your packages,
makes distributable packages, and uploads them to [**crates.io**](https://crates.io/), the Rust community’s package registry.
