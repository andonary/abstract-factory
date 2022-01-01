# Abstract Example

This is an example in TypeScript of using the design pattern called "abstract factory"

## Advance Wars CO's ground unit

In the game Advance Wars, a commanding officer (CO) can create an unit. But each CO have variation of the same unit. 
For example, Max's Infantry are stronger than Andy's Infantry but also have less defense.

## Architecture

The pattern is represented in folder `src/pattern`.

Folder `src/utils` doesn't need to be considered if you are interested about the pattern.

`tests` shows the client's point of view by creating unit. Developped using TDD (Test Driven Development).

## TODO

This list of TODO can be done but will be not by me in this repository. Feel free to fork this project and train yourself :

### Enhancements in business logic:

- CO named Sami has 125 power for infantries but 90 power for tanks. While Max has 110 power for tanks and Andy has 100.
- Advance Wars Dual Strike allow you to switch between CO, create a client's code starting with Andy for turn 1, then switch for Max at turn 2.
